import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import BookingCalendar from "@/components/booking-calendar";
import HowItWorks from "@/components/how-it-works";
import FeaturesSection from "@/components/features-section";
import TestimonialSection from "@/components/testimonial-section";
import CTASection from "@/components/cta-section";
import DisciplinesSection from "@/components/disciplines-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import FeaturesAtGlance from "@/components/features-at-glance";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      {/* <BookingCalendar /> */}
      <FeaturesAtGlance/>
      <FeaturesSection />
      <DisciplinesSection />
      <HowItWorks />
      <TestimonialSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
}
