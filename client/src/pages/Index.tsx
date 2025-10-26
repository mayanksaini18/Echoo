import Hero from "@/components/Hero";
import MoodTracker from "@/components/MoodTracker";
import Resources from "@/components/Resources";
import Features from "@/components/Features";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <MoodTracker />
      <div id="features">
        <Features />
      </div>
      <Resources />
    </main>
  );
};

export default Index;
