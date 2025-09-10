import { Mail, Phone, MapPin, Clock, Users, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";

export default function ContactSection() {
  const [activeTab, setActiveTab] = useState("trainers");

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

        <div className="max-w-4xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="trainers" className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Trainers
              </TabsTrigger>
              <TabsTrigger value="trainees" className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                Trainees/Students
              </TabsTrigger>
            </TabsList>

            <TabsContent value="trainers">
              <Card>
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      For Fitness Instructors & Trainers
                    </h3>
                    <p className="text-gray-600">
                      Ready to rent studio space? Get in touch to learn about our flexible hourly rentals.
                    </p>
                  </div>
                  {/* Trainer HubSpot Form */}
                  <div 
                    className="hs-form-frame" 
                    data-region="na2" 
                    data-form-id="bdc5f5bc-da7c-4ae1-aae1-d598630fa03f" 
                    data-portal-id="242976227"
                  />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="trainees">
              <Card>
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      For Students & Trainees
                    </h3>
                    <p className="text-gray-600">
                      Looking to join classes or book sessions? Contact us to find the right instructor for you.
                    </p>
                  </div>
                  {/* Trainee HubSpot Form */}
                  <div 
                    className="hs-form-frame" 
                    data-region="na2" 
                    data-form-id="635263de-8098-4043-b809-8ae9ebcbe616" 
                    data-portal-id="242976227"
                  />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
