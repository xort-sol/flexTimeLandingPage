import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Star } from "lucide-react";
import VideoPlayer from "./video-player";

export default function TestimonialSection() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            What Trainers Are Saying
          </h2>

          {/* Video Testimonial Player */}
          <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl mb-8">
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=450"
              alt="Fitness trainer giving video testimonial in studio"
              className="w-full h-64 md:h-96 object-cover opacity-80"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Button
                onClick={() => setShowVideo(true)}
                variant="ghost"
                size="lg"
                className="bg-white/20 backdrop-blur-sm rounded-full p-6 hover:bg-white/30 transition-all"
              >
                <Play className="text-white h-8 w-8 ml-2" />
              </Button>
            </div>
            <div className="absolute bottom-6 left-6 text-white">
              <div className="font-semibold">Sarah Johnson</div>
              <div className="text-sm opacity-90">Certified Personal Trainer</div>
            </div>
          </div>

          <blockquote className="text-xl lg:text-2xl text-gray-700 font-medium italic mb-6">
            "FlexTime has completely transformed how I run my fitness business. The flexibility to book exactly when I need it, combined with the professional equipment, makes it perfect for my clients."
          </blockquote>
          
          <div className="flex items-center justify-center">
            <div className="flex text-accent">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <span className="ml-2 text-gray-600 font-medium">5.0 stars</span>
          </div>
        </div>
      </div>
      
      {showVideo && (
        <VideoPlayer onClose={() => setShowVideo(false)} />
      )}
    </section>
  );
}
