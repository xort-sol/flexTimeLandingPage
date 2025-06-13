import { Palette, Dumbbell, Shield, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Palette,
    title: "Personalize Your Space",
    description: "Broadcast your brand and vibe during your sessions to create a personalized experience for your guests while promoting your business. Personalize the monitors, lighting, music, and internet for streaming!",
    image: "https://images.unsplash.com/photo-1549476464-37392f717541?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    features: [
      "Custom lighting control",
      "Branded monitor displays", 
      "Music system access",
      "High-speed internet"
    ],
    bgColor: "bg-primary/10",
    iconColor: "text-primary"
  },
  {
    icon: Dumbbell,
    title: "Premium Equipment",
    description: "Equipped with weights, GorillaBow resistance training, TRX, yoga equipment and more. Everything you need for diverse fitness sessions.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    features: [
      "Free weights & kettlebells",
      "GorillaBow resistance training",
      "TRX suspension systems",
      "Yoga mats & props"
    ],
    bgColor: "bg-secondary/10",
    iconColor: "text-secondary"
  },
  {
    icon: Shield,
    title: "No Risk, Maximum Flexibility", 
    description: "No risk with flexible hourly rentals and even low cost insurance options to protect you and your training business.",
    image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    features: [
      "Hourly rental options",
      "No long-term commitments",
      "Low cost insurance available",
      "Business protection"
    ],
    bgColor: "bg-accent/10",
    iconColor: "text-accent"
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What You Get
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need for successful fitness sessions
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <Card key={feature.title} className="shadow-lg overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className={`${feature.bgColor} w-12 h-12 rounded-full flex items-center justify-center mr-4`}>
                      <IconComponent className={`${feature.iconColor} h-6 w-6`} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    {feature.description}
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {feature.features.map((item) => (
                      <li key={item} className="flex items-center">
                        <Check className="text-secondary h-4 w-4 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
