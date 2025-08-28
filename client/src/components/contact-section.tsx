import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from "react";

export default function ContactSection() {
  useEffect(() => {
    // Load HubSpot script (updated)
    const script = document.createElement('script');
    script.src = 'https://js-na2.hsforms.net/forms/embed/242976227.js';
    script.defer = true;
    script.async = true;

    if (!document.querySelector(`script[src="${script.src}"]`)) {
      document.head.appendChild(script);
    }

    return () => {
      const existingScript = document.querySelector(`script[src="${script.src}"]`);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <section id="contact" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to transform your fitness business? Contact us today to learn more about our flexible studio rental solutions.
          </p>
        </div>

        <div className="grid">

          {/* Contact Form */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                {/* HubSpot Form Embed */}
                <div 
                  className="hs-form-frame" 
                  data-region="na2" 
                  data-form-id="bdc5f5bc-da7c-4ae1-aae1-d598630fa03f" 
                  data-portal-id="242976227"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
