import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Heart, Coffee, Book, Music, TreePine, 
  Moon, Smile, Users, Palette, Sparkles 
} from "lucide-react";

const categories = [
  { id: "physical", name: "Physical", color: "text-accent", icon: Heart },
  { id: "mental", name: "Mental", color: "text-primary", icon: Sparkles },
  { id: "social", name: "Social", color: "text-secondary", icon: Users },
];

const activities = [
  { id: 1, name: "Take a 10-minute walk", category: "physical", icon: TreePine },
  { id: 2, name: "Drink a glass of water", category: "physical", icon: Coffee },
  { id: 3, name: "Do 5 minutes of stretching", category: "physical", icon: Heart },
  { id: 4, name: "Get 15 minutes of sunlight", category: "physical", icon: TreePine },
  { id: 5, name: "Practice gratitude journaling", category: "mental", icon: Book },
  { id: 6, name: "Listen to calming music", category: "mental", icon: Music },
  { id: 7, name: "Try a creative activity", category: "mental", icon: Palette },
  { id: 8, name: "Practice meditation (5 min)", category: "mental", icon: Sparkles },
  { id: 9, name: "Call a friend or family", category: "social", icon: Users },
  { id: 10, name: "Send a kind message", category: "social", icon: Smile },
  { id: 11, name: "Join a campus activity", category: "social", icon: Users },
  { id: 12, name: "Have a meaningful conversation", category: "social", icon: Heart },
  { id: 13, name: "Get 7-8 hours of sleep", category: "physical", icon: Moon },
  { id: 14, name: "Read for pleasure", category: "mental", icon: Book },
];

const SelfCareActivities = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [completedActivities, setCompletedActivities] = useState<number[]>([]);

  const filteredActivities = selectedCategory === "all" 
    ? activities 
    : activities.filter(a => a.category === selectedCategory);

  const toggleActivity = (id: number) => {
    setCompletedActivities(prev => 
      prev.includes(id) 
        ? prev.filter(actId => actId !== id)
        : [...prev, id]
    );
  };

  const progress = Math.round((completedActivities.length / activities.length) * 100);

  return (
    <section className="py-20 px-6 bg-gradient-secondary">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Daily Self-Care Activities</h2>
          <p className="text-muted-foreground text-lg">
            Small steps lead to big changes. Check off activities as you complete them!
          </p>
        </div>

        {/* Progress Card */}
        <Card className="p-6 mb-8 shadow-medium bg-gradient-card backdrop-blur-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-1">
                Today's Progress
              </h3>
              <p className="text-sm text-muted-foreground">
                {completedActivities.length} of {activities.length} activities completed
              </p>
            </div>
            <div className="text-4xl font-bold text-primary">
              {progress}%
            </div>
          </div>
          <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-primary transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </Card>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          <Button
            onClick={() => setSelectedCategory("all")}
            variant={selectedCategory === "all" ? "default" : "outline"}
            className={selectedCategory === "all" 
              ? "bg-primary hover:bg-primary-dark text-primary-foreground" 
              : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            }
          >
            All Activities
          </Button>
          {categories.map(cat => {
            const Icon = cat.icon;
            return (
              <Button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                variant={selectedCategory === cat.id ? "default" : "outline"}
                className={selectedCategory === cat.id 
                  ? "bg-primary hover:bg-primary-dark text-primary-foreground" 
                  : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }
              >
                <Icon className="w-4 h-4 mr-2" />
                {cat.name}
              </Button>
            );
          })}
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredActivities.map((activity) => {
            const Icon = activity.icon;
            const isCompleted = completedActivities.includes(activity.id);
            const category = categories.find(c => c.id === activity.category);
            
            return (
              <Card
                key={activity.id}
                className={`
                  p-5 shadow-soft hover:shadow-medium transition-all cursor-pointer
                  bg-gradient-card backdrop-blur-sm
                  ${isCompleted ? "ring-2 ring-primary" : ""}
                `}
                onClick={() => toggleActivity(activity.id)}
              >
                <div className="flex items-start gap-4">
                  <Checkbox 
                    checked={isCompleted}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className={`w-5 h-5 ${category?.color}`} />
                      <span className={`text-xs font-medium ${category?.color}`}>
                        {category?.name}
                      </span>
                    </div>
                    <p className={`text-foreground ${isCompleted ? "line-through opacity-60" : ""}`}>
                      {activity.name}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Encouragement */}
        {completedActivities.length > 0 && (
          <Card className="mt-8 p-6 bg-primary/10 border border-primary/20 animate-fade-in">
            <div className="text-center">
              <Sparkles className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {completedActivities.length >= 5 
                  ? "Amazing work! You're taking great care of yourself!" 
                  : "Great start! Keep going, you're doing wonderful!"}
              </h3>
              <p className="text-muted-foreground">
                Every small act of self-care matters. You're building healthy habits!
              </p>
            </div>
          </Card>
        )}
      </div>
    </section>
  );
};

export default SelfCareActivities;
