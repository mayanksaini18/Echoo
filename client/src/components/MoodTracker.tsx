import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smile, Meh, Frown, Sun, Cloud, CloudRain } from "lucide-react";

const moods = [
  { icon: Smile, label: "Great", color: "text-accent", bgColor: "bg-accent/10" },
  { icon: Sun, label: "Good", color: "text-secondary", bgColor: "bg-secondary/10" },
  { icon: Meh, label: "Okay", color: "text-primary", bgColor: "bg-primary/10" },
  { icon: Cloud, label: "Low", color: "text-muted-foreground", bgColor: "bg-muted" },
  { icon: Frown, label: "Struggling", color: "text-destructive", bgColor: "bg-destructive/10" },
];

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);

  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">How Are You Feeling Today?</h2>
          <p className="text-muted-foreground text-lg">
            Taking a moment to check in with yourself is an act of self-care
          </p>
        </div>

        <Card className="p-8 shadow-medium bg-gradient-card backdrop-blur-sm">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            {moods.map((mood, index) => {
              const Icon = mood.icon;
              return (
                <button
                  key={index}
                  onClick={() => setSelectedMood(index)}
                  className={`
                    flex flex-col items-center gap-3 p-6 rounded-2xl 
                    transition-all duration-300
                    ${selectedMood === index 
                      ? `${mood.bgColor} ring-2 ring-offset-2 ring-offset-background scale-105` 
                      : 'bg-muted/50 hover:bg-muted hover:scale-105'
                    }
                  `}
                >
                  <Icon className={`w-8 h-8 ${selectedMood === index ? mood.color : 'text-muted-foreground'}`} />
                  <span className={`text-sm font-medium ${selectedMood === index ? 'text-foreground' : 'text-muted-foreground'}`}>
                    {mood.label}
                  </span>
                </button>
              );
            })}
          </div>

          {selectedMood !== null && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                <p className="text-sm text-muted-foreground mb-3">
                  Would you like to share more about how you're feeling? (Optional)
                </p>
                <textarea
                  className="w-full p-3 rounded-lg bg-background border border-input resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                  rows={3}
                  placeholder="What's on your mind?"
                />
              </div>

              <Button 
                className="w-full bg-primary hover:bg-primary-dark text-primary-foreground shadow-soft hover:shadow-medium transition-all"
              >
                Log My Mood
              </Button>

              {selectedMood >= 3 && (
                <div className="p-4 rounded-xl bg-accent/10 border border-accent/20">
                  <p className="text-sm text-foreground font-medium mb-2">
                    Need immediate support?
                  </p>
                  <Button 
                    variant="outline"
                    className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                  >
                    View Crisis Resources
                  </Button>
                </div>
              )}
            </div>
          )}
        </Card>
      </div>
    </section>
  );
};

export default MoodTracker;
