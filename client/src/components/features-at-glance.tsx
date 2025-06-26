import { Dumbbell, Clock, ShieldCheck, Wifi } from "lucide-react";

const features = [
  {
    icon: Dumbbell,
    title: "Pro Equipment",
    description: "Top-quality gear for strength, cardio, and mobility training.",
  },
  {
    icon: Clock,
    title: "24/7 Access",
    description: "Book your preferred time — day or night, we’re open for you.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Private",
    description: "Clean, secure, and distraction-free environment for your clients.",
  },
  {
    icon: Wifi,
    title: "Smart Amenities",
    description: "High-speed Wi-Fi, Bluetooth speakers, and booking reminders.",
  },
];

export default function FeaturesAtGlance() {
  return (
    <section className="bg-white dark:bg-gray-950 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          Studio Features at a Glance
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Everything you need to deliver professional training sessions, with zero hassle.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="flex flex-col items-center text-center space-y-3">
              <feature.icon className="w-10 h-10 text-primary" />
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{feature.title}</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
