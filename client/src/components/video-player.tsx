import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import introVideo from "@/assets/intro_video.mp4";

interface VideoPlayerProps {
  onClose: () => void;
}

export default function VideoPlayer({ onClose }: VideoPlayerProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <div className="relative w-full max-w-4xl bg-black rounded-xl shadow-xl overflow-hidden">
        {/* Close Button */}
        <Button
          onClick={onClose}
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 bg-black/50 hover:bg-black/70"
          aria-label="Close video player"
        >
          <X className="w-6 h-6" />
        </Button>
        
        <div className="p-2">
          <video
            className="w-full h-full rounded-lg"
            controls
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={introVideo}
          >
            <source src={introVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}
