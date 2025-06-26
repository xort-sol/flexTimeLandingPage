import { Search, UserPlus, Clock, CalendarCheck } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: 1,
    title: "Find Studio Space",
    description: "Trainers or teachers looking for studio space find a time for their class.",
    bgColor: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: UserPlus,
    number: 2,
    title: "Sign Up",
    description: "Sign up for FlexTime with no commitment required.",
    bgColor: "bg-secondary/10",
    iconColor: "text-secondary",
  },
  {
    icon: Clock,
    number: 3,
    title: "Select Your Time",
    description: "Choose from available time slots that fit your schedule.",
    bgColor: "bg-accent/10",
    iconColor: "text-accent",
  },
  {
    icon: CalendarCheck,
    number: 4,
    title: "Book Studio Time",
    description: "Confirm your booking and start using the studio!",
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simple steps to get you started with flexible studio rentals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="text-center transition-transform duration-300 hover:scale-[1.03] group"
              >
                <div
                  className={`${step.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5`}
                >
                  <Icon
                    className={`${step.iconColor} h-7 w-7`}
                    aria-label={step.title}
                  />
                </div>
                <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-semibold">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed px-2 sm:px-0">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
