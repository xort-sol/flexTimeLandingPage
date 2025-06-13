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
    <section className="bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Flexible Studio Rentals for{" "}
              <span className="text-primary">Fitness Professionals</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Book premium fitness studio space by the hour. No long-term commitments, 
              just flexible access to fully equipped studios when you need them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToBooking}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-4"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Studio Time
              </Button>
              <Button
                onClick={() => setShowVideo(true)}
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Testimonial
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Modern fitness studio with equipment and mirrors"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            
            {/* Video Testimonial Overlay */}
            <div
              className="absolute inset-0 bg-black bg-opacity-20 rounded-2xl flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
              onClick={() => setShowVideo(true)}
            >
              <div className="bg-white bg-opacity-90 rounded-full p-6">
                <Play className="text-primary text-3xl ml-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {showVideo && (
        <VideoPlayer onClose={() => setShowVideo(false)} />
      )}
    </section>
  );
}
