import { Button } from "@/components/ui/button";
import { Heart, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-secondary">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container relative z-10 mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card shadow-soft backdrop-blur-sm">
            <Heart className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-foreground">Your Mental Wellness Companion</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            You're Not Alone in
            <span className="block bg-gradient-primary bg-clip-text text-transparent mt-2">
              Your Journey
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A safe, confidential space for campus mental health support. 
            Track your wellness, connect with peers, and access help whenever you need it.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link to="/wellness">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-dark text-primary-foreground shadow-medium hover:shadow-glow transition-all"
              >
                Start Your Journey
              </Button>
            </Link>
            <a href="#features">
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
              >
                Learn More
              </Button>
            </a>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16">
            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-gradient-card backdrop-blur-sm shadow-soft">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">100% Confidential</h3>
              <p className="text-sm text-muted-foreground">Your privacy is our top priority</p>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-gradient-card backdrop-blur-sm shadow-soft">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-semibold text-foreground">Peer Support</h3>
              <p className="text-sm text-muted-foreground">Connect with understanding peers</p>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-gradient-card backdrop-blur-sm shadow-soft">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Heart className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground">24/7 Resources</h3>
              <p className="text-sm text-muted-foreground">Help available anytime you need</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
