import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play, Star, Loader2 } from "lucide-react";
import VideoPlayer from "./video-player";
import testimonialImage from "../assets/testimonial.jpg";
import julieVideo from "../assets/julie.mp4";

export default function TestimonialSection() {
  const [showVideo, setShowVideo] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayVideo = () => {
    setIsVideoLoading(true);
    setShowVideo(true);
  };

  const handleVideoLoad = () => {
    setIsVideoLoading(false);
    setVideoLoaded(true);
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
    setIsVideoLoading(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

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
            <div className="relative group aspect-video cursor-pointer" onClick={handlePlayVideo}>
              <img
                src={testimonialImage}
                alt="Julie - Trainer Testimonial"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-6 transition-all duration-300 hover:scale-110">
                  <Play className="text-white h-8 w-8" />
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium">
                Click to play video
              </div>
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
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-[90vh] bg-black rounded-lg overflow-hidden">
            {isVideoLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900 min-h-[300px]">
                <div className="text-center">
                  <Loader2 className="h-12 w-12 text-white animate-spin mx-auto mb-4" />
                  <p className="text-white text-lg">Loading video...</p>
                </div>
              </div>
            )}
            
            <video
              ref={videoRef}
              className="w-full h-auto max-h-[90vh] object-contain"
              controls
              autoPlay
              muted={false}
              playsInline
              preload="metadata"
              onLoadedData={handleVideoLoad}
              onError={() => setIsVideoLoading(false)}
            >
              <source src={julieVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            <button
              onClick={handleCloseVideo}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
