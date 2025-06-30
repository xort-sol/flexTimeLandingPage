import { Palette, Dumbbell, Shield, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Palette,
    title: "Personalize Your Space",
    description:
      "Create a signature experience by customizing lighting, monitors, music, and streaming internet for your sessions.",
    image:
      "https://images.unsplash.com/photo-1549476464-37392f717541?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: [
      "Custom lighting control",
      "Branded monitor displays",
      "Music system access",
      "High-speed internet",
    ],
    bgColor: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: Dumbbell,
    title: "Premium Equipment",
    description:
      "Train with a full suite of equipment, including GorillaBow, TRX, weights, and yoga props.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: [
      "Free weights & kettlebells",
      "GorillaBow resistance training",
      "TRX suspension systems",
      "Yoga mats & props",
    ],
    bgColor: "bg-secondary/10",
    iconColor: "text-secondary",
  },
  {
    icon: Shield,
    title: "No Risk, Maximum Flexibility",
    description:
      "Flexible hourly rentals with optional low-cost insurance to keep your business protected.",
    image:
      "https://images.unsplash.com/photo-1588286840104-8957b019727f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: [
      "Hourly rental options",
      "No long-term commitments",
      "Low cost insurance available",
      "Business protection",
    ],
    bgColor: "bg-accent/10",
    iconColor: "text-accent",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What You Get
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need for successful fitness sessions
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center mb-4">
                    <div
                      className={cn(
                        "w-12 h-12 rounded-full flex items-center justify-center mr-4",
                        feature.bgColor
                      )}
                    >
                      <Icon
                        className={cn("w-6 h-6", feature.iconColor)}
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {feature.features.map((item) => (
                      <li key={item} className="flex items-start">
                        <Check className="text-green-500 w-4 h-4 mt-1 mr-2 flex-shrink-0" />
                        <span>{item}</span>
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
