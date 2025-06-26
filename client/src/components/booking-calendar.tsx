import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
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
    <section id="booking" className="bg-background py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-3">
            Book Your Studio Time
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose a location, date, and time slot that suits you.
          </p>
        </div>

        <Card className="rounded-2xl shadow-xl">
          <CardContent className="p-8 space-y-6">
            {/* Form Header */}
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <Label className="text-sm font-medium mb-1 block">
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
                <Label className="text-sm font-medium mb-1 block">
                  Date
                </Label>
                <Input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                />
              </div>

              <div className="flex items-end">
                <Button
                  onClick={handleSearch}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Search className="mr-2 h-4 w-4" />
                  Search
                </Button>
              </div>
            </div>

            {/* Time Slots */}
            <div className="border rounded-xl overflow-hidden">
              <div className="bg-muted px-6 py-3 border-b">
                <h3 className="text-base font-semibold text-foreground">
                  Available Time Slots
                </h3>
              </div>
              <div className="p-6">
                {isLoading ? (
                  <p className="text-center text-muted-foreground">Loading available slots...</p>
                ) : timeSlots && timeSlots.length > 0 ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {timeSlots.map((slot) => (
                      <Button
                        key={slot.time}
                        variant={slot.available ? "outline" : "ghost"}
                        disabled={!slot.available}
                        onClick={() => slot.available && handleTimeSlotSelect(slot.time)}
                        className={`flex flex-col py-4 ${
                          slot.available
                            ? "hover:border-primary hover:bg-primary/10"
                            : "opacity-50 cursor-not-allowed"
                        }`}
                      >
                        <span className="font-medium">{slot.time}</span>
                        <span className="text-xs text-muted-foreground">
                          {slot.available ? "Available" : "Booked"}
                        </span>
                      </Button>
                    ))}
                  </div>
                ) : selectedDate && selectedLocation ? (
                  <p className="text-center text-muted-foreground">
                    No slots available for the selected date and location.
                  </p>
                ) : (
                  <p className="text-center text-muted-foreground">
                    Select a location and date to see available slots.
                  </p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Modal for Booking Form */}
      <Dialog open={showBookingModal} onOpenChange={setShowBookingModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Complete Your Booking</DialogTitle>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="bg-muted px-4 py-3 rounded-md text-sm text-muted-foreground">
                <div className="flex items-center gap-2 mb-1">
                  <Calendar className="w-4 h-4" />
                  {selectedDate}
                  <Clock className="w-4 h-4 ml-4" />
                  {selectedTimeSlot}
                </div>
                <div>{selectedLocation}</div>
              </div>

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Jane Doe" {...field} />
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
                      <Input type="email" placeholder="jane@example.com" {...field} />
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
                      <Input type="tel" placeholder="(123) 456-7890" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex gap-2 pt-2">
                <Button type="button" variant="outline" onClick={() => setShowBookingModal(false)} className="flex-1">
                  Cancel
                </Button>
                <Button type="submit" className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
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
