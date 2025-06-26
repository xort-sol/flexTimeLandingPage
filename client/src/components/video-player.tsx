import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VideoPlayerProps {
  onClose: () => void;
}

export default function VideoPlayer({ onClose }: VideoPlayerProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <div className="relative w-full max-w-4xl bg-white rounded-xl shadow-xl overflow-hidden">
        {/* Close Button */}
        <Button
          onClick={onClose}
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-10 text-gray-700 hover:text-black"
          aria-label="Close video player"
        >
          <X className="w-6 h-6" />
        </Button>
        
        <div className="p-6">
          <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
            <div className="text-center text-white">
              <div className="text-2xl font-semibold mb-2">Video Testimonial</div>
              <p className="text-gray-300">Video player would be implemented here</p>
              <p className="text-sm text-gray-400 mt-4">
                In production, this would contain the actual testimonial video from clients
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
