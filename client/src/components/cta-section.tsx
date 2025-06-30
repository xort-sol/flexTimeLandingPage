import { Button } from "@/components/ui/button";
import { Calendar, Phone } from "lucide-react";

export default function CTASection() {
  const scrollToBooking = () => {
    const el = document.getElementById("booking");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-primary text-primary-foreground py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-6 leading-tight">
          Ready to Book Your Studio Time?
        </h2>
        <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
          Join hundreds of fitness professionals who trust FlexTime for their studio rental needs. Secure your spot or get in touch today.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            onClick={scrollToBooking}
            size="lg"
            className="bg-white text-primary hover:bg-gray-100 hover:shadow-md px-8 py-4 text-lg font-medium transition"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Book Now
          </Button>
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-white text-primary hover:bg-gray-100 hover:shadow-md px-8 py-4 text-lg font-medium transition"
          >
            <Phone className="mr-2 h-5 w-5" />
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
