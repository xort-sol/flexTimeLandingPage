import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="text-2xl font-bold text-primary">FlexTime</div>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-gray-600 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="text-gray-600 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-600 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button
              onClick={() => scrollToSection("booking")}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Book Now
            </Button>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary w-full text-left"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary w-full text-left"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary w-full text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
