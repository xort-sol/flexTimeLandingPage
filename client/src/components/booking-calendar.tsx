import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { insertBookingSchema } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { Search, Calendar, Clock } from "lucide-react";
import { z } from "zod";

const bookingFormSchema = insertBookingSchema.extend({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone number is required"),
});

type BookingFormData = z.infer<typeof bookingFormSchema>;

interface TimeSlot {
  time: string;
  available: boolean;
}

export default function BookingCalendar() {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [showBookingModal, setShowBookingModal] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      location: "",
      date: "",
      timeSlot: "",
    },
  });

  const { data: timeSlots, isLoading } = useQuery({
    queryKey: ["/api/availability", selectedDate, selectedLocation],
    enabled: Boolean(selectedDate && selectedLocation),
    select: (data: TimeSlot[]) => data,
  });

  const createBookingMutation = useMutation({
    mutationFn: (data: BookingFormData) => apiRequest("POST", "/api/bookings", data),
    onSuccess: () => {
      toast({
        title: "Booking Confirmed!",
        description: "Your studio time has been successfully booked.",
      });
      setShowBookingModal(false);
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/availability"] });
    },
    onError: (error: any) => {
      toast({
        title: "Booking Failed",
        description: error.message || "Unable to book studio time. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSearch = () => {
    if (!selectedLocation || !selectedDate) {
      toast({
        title: "Missing Information",
        description: "Please select both location and date to search.",
        variant: "destructive",
      });
    }
  };

  const handleTimeSlotSelect = (timeSlot: string) => {
    setSelectedTimeSlot(timeSlot);
    form.setValue("location", selectedLocation);
    form.setValue("date", selectedDate);
    form.setValue("timeSlot", timeSlot);
    setShowBookingModal(true);
  };

  const onSubmit = (data: BookingFormData) => {
    createBookingMutation.mutate(data);
  };

  return (
    <section id="booking" className="bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Book Your Studio Time
          </h2>
          <p className="text-xl text-gray-600">
            Select your preferred location, date, and time
          </p>
        </div>

        <Card className="shadow-lg">
          <CardContent className="p-8">
            {/* Booking Form */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div>
                <Label className="text-sm font-semibold text-gray-700 mb-3">
                  Location
                </Label>
                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select City, State" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="austin-tx">Austin, TX</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-sm font-semibold text-gray-700 mb-3">
                  Date
                </Label>
                <Input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              <div>
                <Label className="text-sm font-semibold text-gray-700 mb-3">
                  &nbsp;
                </Label>
                <Button
                  onClick={handleSearch}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Search className="mr-2 h-4 w-4" />
                  Search
                </Button>
              </div>
            </div>

            {/* Available Time Slots */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">
                  Available Time Slots
                </h3>
              </div>
              <div className="p-6">
                {isLoading ? (
                  <div className="text-center py-8">
                    <div className="text-gray-500">Loading available slots...</div>
                  </div>
                ) : timeSlots && timeSlots.length > 0 ? (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {timeSlots.map((slot) => (
                      <Button
                        key={slot.time}
                        variant={slot.available ? "outline" : "secondary"}
                        disabled={!slot.available}
                        onClick={() => slot.available && handleTimeSlotSelect(slot.time)}
                        className={`p-4 h-auto flex flex-col ${
                          slot.available
                            ? "hover:border-primary hover:bg-primary/5"
                            : "opacity-50 cursor-not-allowed"
                        }`}
                      >
                        <div className="font-semibold">{slot.time}</div>
                        <div className="text-sm text-muted-foreground">
                          {slot.available ? "Available" : "Booked"}
                        </div>
                      </Button>
                    ))}
                  </div>
                ) : selectedDate && selectedLocation ? (
                  <div className="text-center py-8 text-gray-500">
                    No available slots found for the selected date and location.
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    Select a location and date to view available time slots.
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Booking Modal */}
      <Dialog open={showBookingModal} onOpenChange={setShowBookingModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Complete Your Booking</DialogTitle>
          </DialogHeader>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span>{selectedDate}</span>
                  <Clock className="h-4 w-4 ml-2" />
                  <span>{selectedTimeSlot}</span>
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  {selectedLocation}
                </div>
              </div>

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder="Enter your phone number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowBookingModal(false)}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={createBookingMutation.isPending}
                  className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  {createBookingMutation.isPending ? "Booking..." : "Confirm Booking"}
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </section>
  );
}
