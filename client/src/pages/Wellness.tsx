import BreathingExercise from "@/components/BreathingExercise";
import SelfCareActivities from "@/components/SelfCareActivities";
import CrisisSupport from "@/components/CrisisSupport";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Wellness = () => {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-6 pt-8">
        <Link to="/">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>
      <BreathingExercise />
      <SelfCareActivities />
      <CrisisSupport />
    </main>
  );
};

export default Wellness;
