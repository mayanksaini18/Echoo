import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Wind, MessageCircle, Phone, Brain, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const resources = [
  {
    icon: Wind,
    title: "Breathing Exercises",
    description: "Calm your mind with guided breathing techniques",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Brain,
    title: "Mental Health Articles",
    description: "Learn about stress, anxiety, and wellness strategies",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: MessageCircle,
    title: "Anonymous Chat",
    description: "Connect with trained peer supporters",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Phone,
    title: "Crisis Helplines",
    description: "24/7 professional support when you need it most",
    color: "text-destructive",
    bgColor: "bg-destructive/10",
  },
  {
    icon: Heart,
    title: "Self-Care Tips",
    description: "Daily practices for maintaining mental wellness",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: BookOpen,
    title: "Campus Counseling",
    description: "Book appointments with campus counselors",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
];

const Resources = () => {
  return (
    <section className="py-20 px-6 bg-gradient-secondary">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Wellness Resources</h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to support your mental health journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <Link key={index} to="/wellness">
                <Card
                  className="p-6 shadow-soft hover:shadow-medium transition-all duration-300 bg-gradient-card backdrop-blur-sm hover:scale-105 cursor-pointer group"
                >
                  <div className={`w-14 h-14 rounded-2xl ${resource.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-7 h-7 ${resource.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{resource.title}</h3>
                  <p className="text-muted-foreground mb-4">{resource.description}</p>
                  <Button 
                    variant="ghost" 
                    className="text-primary hover:text-primary-dark hover:bg-primary/10 p-0 h-auto"
                  >
                    Explore →
                  </Button>
                </Card>
              </Link>
            );
          })}
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-gradient-card backdrop-blur-sm shadow-medium border border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Crisis Support Available 24/7
              </h3>
              <p className="text-muted-foreground">
                If you're in immediate distress, help is always available
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:1800-599-0019">
                <Button 
                  size="lg"
                  className="bg-destructive hover:bg-destructive/90 text-destructive-foreground shadow-soft"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Emergency Helpline
                </Button>
              </a>
              <Link to="/wellness">
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Chat Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
