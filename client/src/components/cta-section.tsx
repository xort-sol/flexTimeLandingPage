import { Button } from "@/components/ui/button";
import { Calendar, Phone } from "lucide-react";

export default function CTASection() {
  const scrollToBooking = () => {
    const element = document.getElementById("booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-primary py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
          Ready to Book Your Studio Time?
        </h2>
        <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
          Join hundreds of fitness professionals who trust FlexTime for their studio rental needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={scrollToBooking}
            size="lg"
            variant="secondary"
            className="bg-white text-primary hover:bg-gray-50 px-8 py-4 text-lg"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Book Now
          </Button>
          <Button
            onClick={scrollToContact}
            size="lg"
            variant="secondary"
            className="bg-white text-primary hover:bg-gray-50 px-8 py-4 text-lg"
          >
            <Phone className="mr-2 h-5 w-5" />
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
