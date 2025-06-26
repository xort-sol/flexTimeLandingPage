import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Play } from "lucide-react";
import VideoPlayer from "./video-player";

export default function HeroSection() {
  const [showVideo, setShowVideo] = useState(false);

  const scrollToBooking = () => {
    const element = document.getElementById("booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-background py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
              Flexible Studio Rentals for{" "}
              <span className="text-primary">Fitness Professionals</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl">
              Book premium fitness studio space by the hour. No long-term commitments,
              just flexible access to fully equipped studios when you need them.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToBooking}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-6 py-4 shadow-md transition"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Studio Time
              </Button>
              <Button
                onClick={() => setShowVideo(true)}
                variant="outline"
                size="lg"
                className="text-base px-6 py-4 border-muted-foreground hover:bg-accent transition"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Testimonial
              </Button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative group">
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Modern fitness studio with equipment and mirrors"
              className="rounded-2xl shadow-xl w-full object-cover aspect-video"
            />

            {/* Hover to play overlay */}
            <div
              className="absolute inset-0 bg-black bg-opacity-30 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
              onClick={() => setShowVideo(true)}
            >
              <div className="bg-white bg-opacity-90 rounded-full p-4 shadow-lg hover:scale-105 transition-transform">
                <Play className="text-primary h-8 w-8" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video modal */}
      {showVideo && (
        <VideoPlayer onClose={() => setShowVideo(false)} />
      )}
    </section>
  );
}
