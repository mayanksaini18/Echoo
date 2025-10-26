import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wind, Play, Pause, RotateCcw } from "lucide-react";

const exercises = [
  {
    name: "4-7-8 Breathing",
    description: "Calming technique for anxiety and sleep",
    inhale: 4,
    hold: 7,
    exhale: 8,
  },
  {
    name: "Box Breathing",
    description: "Military technique for focus and calm",
    inhale: 4,
    hold: 4,
    exhale: 4,
  },
  {
    name: "Deep Breathing",
    description: "Simple stress relief",
    inhale: 5,
    hold: 2,
    exhale: 5,
  },
];

type Phase = "inhale" | "hold" | "exhale" | "idle";

const BreathingExercise = () => {
  const [selectedExercise, setSelectedExercise] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState<Phase>("idle");
  const [countdown, setCountdown] = useState(0);
  const [cycles, setCycles] = useState(0);

  const exercise = exercises[selectedExercise];

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          // Move to next phase
          if (phase === "inhale") {
            setPhase("hold");
            return exercise.hold;
          } else if (phase === "hold") {
            setPhase("exhale");
            return exercise.exhale;
          } else if (phase === "exhale") {
            setPhase("inhale");
            setCycles((c) => c + 1);
            return exercise.inhale;
          }
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive, phase, exercise]);

  const startExercise = () => {
    setIsActive(true);
    setPhase("inhale");
    setCountdown(exercise.inhale);
    setCycles(0);
  };

  const pauseExercise = () => {
    setIsActive(false);
  };

  const resetExercise = () => {
    setIsActive(false);
    setPhase("idle");
    setCountdown(0);
    setCycles(0);
  };

  const getCircleScale = () => {
    if (phase === "inhale") return "scale-150";
    if (phase === "exhale") return "scale-75";
    return "scale-100";
  };

  const getPhaseText = () => {
    if (phase === "inhale") return "Breathe In";
    if (phase === "hold") return "Hold";
    if (phase === "exhale") return "Breathe Out";
    return "Ready?";
  };

  return (
    <section className="py-20 px-6 bg-gradient-secondary">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Wind className="w-6 h-6 text-secondary" />
            <h2 className="text-4xl font-bold text-foreground">Breathing Exercises</h2>
          </div>
          <p className="text-muted-foreground text-lg">
            Take a moment to center yourself with guided breathing
          </p>
        </div>

        {/* Exercise Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {exercises.map((ex, index) => (
            <button
              key={index}
              onClick={() => {
                setSelectedExercise(index);
                resetExercise();
              }}
              className={`
                p-4 rounded-xl text-left transition-all duration-300
                ${
                  selectedExercise === index
                    ? "bg-gradient-card shadow-medium ring-2 ring-primary"
                    : "bg-card hover:shadow-soft"
                }
              `}
            >
              <h3 className="font-semibold text-foreground mb-1">{ex.name}</h3>
              <p className="text-sm text-muted-foreground">{ex.description}</p>
            </button>
          ))}
        </div>

        {/* Main Exercise Area */}
        <Card className="p-12 shadow-medium bg-gradient-card backdrop-blur-sm">
          <div className="flex flex-col items-center gap-8">
            {/* Breathing Circle */}
            <div className="relative w-64 h-64 flex items-center justify-center">
              <div
                className={`
                  absolute w-48 h-48 rounded-full bg-gradient-primary 
                  transition-all duration-[3000ms] ease-in-out
                  ${getCircleScale()}
                  ${isActive ? "opacity-80" : "opacity-40"}
                `}
                style={{
                  boxShadow: "0 0 60px hsla(260, 70%, 65%, 0.6)",
                }}
              />
              <div className="relative z-10 text-center">
                <p className="text-2xl font-bold text-primary-foreground mb-2">
                  {getPhaseText()}
                </p>
                {phase !== "idle" && (
                  <p className="text-5xl font-bold text-primary-foreground">
                    {countdown}
                  </p>
                )}
              </div>
            </div>

            {/* Instructions */}
            <div className="text-center space-y-2">
              <p className="text-lg text-foreground">
                {exercise.name} - {exercise.inhale}:{exercise.hold}:{exercise.exhale}
              </p>
              <p className="text-sm text-muted-foreground">
                Cycles completed: {cycles}
              </p>
            </div>

            {/* Controls */}
            <div className="flex gap-4">
              {!isActive ? (
                <Button
                  onClick={startExercise}
                  size="lg"
                  className="bg-primary hover:bg-primary-dark text-primary-foreground shadow-soft"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Start
                </Button>
              ) : (
                <Button
                  onClick={pauseExercise}
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Pause className="w-5 h-5 mr-2" />
                  Pause
                </Button>
              )}
              <Button
                onClick={resetExercise}
                size="lg"
                variant="outline"
                className="border-muted-foreground text-muted-foreground hover:bg-muted"
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                Reset
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default BreathingExercise;
