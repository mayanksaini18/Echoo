import { Card } from "@/components/ui/card";
import { BarChart3, Lock, Users, Sparkles } from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Track Your Progress",
    description: "Visualize your mood patterns and wellness journey over time with insightful analytics",
  },
  {
    icon: Lock,
    title: "Complete Privacy",
    description: "Your data is encrypted and anonymous. Share only what you're comfortable with",
  },
  {
    icon: Users,
    title: "Peer Community",
    description: "Connect with fellow students who understand what you're going through",
  },
  {
    icon: Sparkles,
    title: "Personalized Support",
    description: "Get tailored resources and recommendations based on your needs",
  },
];

const Features = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Built for Student Wellness
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our platform combines privacy, community, and expert resources to create 
            a comprehensive mental health support system
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-8 shadow-soft hover:shadow-medium transition-all duration-300 bg-gradient-card backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
