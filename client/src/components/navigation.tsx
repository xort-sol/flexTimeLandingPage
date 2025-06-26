import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import Logo from "@/assets/navigation_bar_logo.svg";

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
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/60 dark:bg-background/70 border-b border-border shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <img
              src={Logo}
              alt="FlexTime Logo"
              className="h-10 w-auto"
            />
          </div>

          <div className="hidden md:flex space-x-6">
            {["how-it-works", "features", "contact"].map((id) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {id
                  .replace(/-/g, " ")
                  .replace(/\b\w/g, (c) => c.toUpperCase())}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            <Button
              onClick={() => scrollToSection("booking")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
            >
              Book Now
            </Button>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Toggle menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={clsx(
            "md:hidden transition-all duration-300 ease-in-out overflow-hidden",
            isMenuOpen ? "max-h-60 mt-2" : "max-h-0"
          )}
        >
          <div className="flex flex-col bg-white dark:bg-background border rounded-lg shadow-md py-2 px-3 space-y-2">
            {["how-it-works", "features", "contact"].map((id) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="text-sm text-muted-foreground hover:text-primary text-left"
              >
                {id
                  .replace(/-/g, " ")
                  .replace(/\b\w/g, (c) => c.toUpperCase())}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
