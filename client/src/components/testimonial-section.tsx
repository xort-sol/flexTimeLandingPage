import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Star } from "lucide-react";
import VideoPlayer from "./video-player";
import testimonialImage from "../assets/testimonial.jpg";

export default function TestimonialSection() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          What Trainers Are Saying
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Discover how FlexTime empowers fitness professionals to do their best work.
        </p>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
            <div className="relative group aspect-video">
              <img
                src={testimonialImage}
                alt="Trainer Testimonial"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity"
              />
              {/* <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  onClick={() => setShowVideo(true)}
                  variant="ghost"
                  size="icon"
                  className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-6 transition duration-300"
                >
                  <Play className="text-white h-8 w-8" />
                </Button>
              </div> */}
            </div>

            <div className="p-6 sm:p-8 text-left">
              <blockquote className="text-xl sm:text-2xl text-gray-800 dark:text-gray-200 italic font-medium mb-6 leading-relaxed">
                "FlexTime has completely transformed how I run my fitness business. The flexibility to book exactly when I need it, combined with the professional equipment, makes it perfect for my clients."
              </blockquote>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white text-lg">Julie</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">Certified Personal Trainer</div>
                </div>
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-500 dark:text-gray-400 text-sm font-medium">5.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
          <VideoPlayer onClose={() => setShowVideo(false)} />
        </div>
      )}
    </section>
  );
}
