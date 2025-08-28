import { Dumbbell, HeartPulse, Flame, Sparkles, Shield, Music, Activity } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const disciplines = [
  { label: "Yoga", icon: Activity },
  { label: "Pilates", icon: HeartPulse },
  { label: "Reiki", icon: Sparkles },
  { label: "Barre", icon: Flame },
  { label: "Dance", icon: Music },
  { label: "Martial Arts", icon: Shield },
  { label: "Zumba", icon: Dumbbell },
];

export default function DisciplinesSection() {
  return (
    <section id="disciplines" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Popular Disciplines
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore what you can host in your private studio.
          </p>
        </div>

        <div className="grid gap-6 grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 place-items-center">
          {disciplines.map(({ label, icon: Icon }, index) => (
            <Card
              key={label}
              className="group w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center hover:shadow-xl hover:scale-110 transition-all duration-300 ease-out cursor-pointer"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'both'
              }}
            >
              <CardContent className="p-0 w-full h-full rounded-full flex flex-col items-center justify-center">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center mb-1 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xs sm:text-sm font-medium text-gray-900 text-center group-hover:text-primary transition-colors duration-300">
                  {label}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
