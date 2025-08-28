import { Palette, Dumbbell, Shield, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";

const features = [
  {
    icon: Palette,
    title: "Personalize Your Space",
    description:
      "Create a signature experience by customizing lighting, monitors, music, and streaming internet for your sessions.",
    image: image1,
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
    image: image2,
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
    image: image3,
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
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your own private studio geared towards fitness instruction and available for meeting,
            gathering and many other uses.
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
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center mb-4">
                    <div
                      className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center mr-4",
                        feature.bgColor
                      )}
                    >
                      <Icon
                        className={cn("w-5 h-5", feature.iconColor)}
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
                  {feature.title === "Premium Equipment" && (
                    <p className="mt-4 text-xs text-gray-500">
                      Need something specific? We can provide additional equipment on request.
                    </p>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
