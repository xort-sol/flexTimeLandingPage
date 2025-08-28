import { Button } from "@/components/ui/button";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

export default function Footer() {

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <footer id="contact" className="bg-gray-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Logo & Social */}
            <div>
              <h2 className="text-2xl font-bold mb-4">FlexTime</h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Flexible studio rentals for fitness professionals. Book by the
                hour — no long-term contracts.
              </p>
              {/* <div className="flex space-x-4">
                {[Facebook, Instagram, Twitter].map((Icon, i) => (
                  <Button
                    key={i}
                    variant="ghost"
                    size="icon"
                    className="text-gray-400 hover:text-white"
                  >
                    <Icon className="h-5 w-5" />
                  </Button>
                ))}
              </div> */}
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3 text-gray-400">
                {[
                  { label: "How It Works", id: "how-it-works" },
                  { label: "Features", id: "features" },
                  { label: "Contact Us", id: "contact" },
                ].map(({ label, id }) => (
                  <li key={id}>
                    <button
                      onClick={() => scrollToSection(id)}
                      className="hover:text-white transition"
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-4 text-gray-400">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 mt-1" />
                  <span>140 Slades Ferry Ave, Somerset, MA 02726 <br />
                  Slade's Ferry Business District <br />
                  401.480.7644</span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 mt-1" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 mt-1" />
                  <span>hello@flextime.com</span>
                </div>
              </div>
              <Button
                onClick={() => scrollToSection("contact")}
                className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90 w-full"
              >
                Get in Touch
              </Button>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} FlexTime. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
