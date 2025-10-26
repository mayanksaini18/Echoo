import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Mail, ExternalLink, AlertCircle } from "lucide-react";

const helplines = [
  {
    name: "National Mental Health Helpline",
    number: "1800-599-0019",
    available: "24/7",
    description: "Free, confidential mental health support",
    type: "call",
  },
  {
    name: "AASRA Suicide Prevention",
    number: "91-9820466726",
    available: "24/7",
    description: "Suicide prevention and emotional support",
    type: "call",
  },
  {
    name: "Vandrevala Foundation",
    number: "1860-2662-345",
    available: "24/7",
    description: "Mental health counseling and support",
    type: "call",
  },
  {
    name: "iCall Helpline",
    number: "91-22-2556-3291",
    available: "Mon-Sat: 8am-10pm",
    description: "Psychosocial counseling service",
    type: "call",
  },
];

const resources = [
  {
    title: "Campus Counseling Center",
    description: "Schedule an appointment with licensed counselors",
    action: "Book Appointment",
    icon: MessageCircle,
  },
  {
    title: "Emergency Services",
    description: "For immediate medical emergencies",
    action: "Call 112",
    icon: AlertCircle,
    urgent: true,
  },
  {
    title: "Email Support",
    description: "Non-urgent support via email",
    action: "Send Email",
    icon: Mail,
  },
];

const CrisisSupport = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Emergency Banner */}
        <div className="mb-12 p-6 rounded-2xl bg-destructive/10 border-2 border-destructive/20">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-destructive mb-2">
                If you're in immediate danger, call emergency services
              </h3>
              <p className="text-foreground mb-4">
                For life-threatening emergencies, contact local emergency services (112) or go to the nearest hospital emergency room.
              </p>
              <Button 
                size="lg"
                className="bg-destructive hover:bg-destructive/90 text-destructive-foreground"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call 112 Emergency
              </Button>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Crisis Support Resources</h2>
          <p className="text-muted-foreground text-lg">
            You are not alone. Help is available 24/7
          </p>
        </div>

        {/* Helplines */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-foreground mb-6">24/7 Helplines</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {helplines.map((helpline, index) => (
              <Card
                key={index}
                className="p-6 shadow-soft hover:shadow-medium transition-all bg-gradient-card backdrop-blur-sm"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-1">
                      {helpline.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">{helpline.description}</p>
                  </div>
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                </div>
                <div className="space-y-2">
                  <a
                    href={`tel:${helpline.number}`}
                    className="block w-full"
                  >
                    <Button 
                      className="w-full bg-primary hover:bg-primary-dark text-primary-foreground"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      {helpline.number}
                    </Button>
                  </a>
                  <p className="text-xs text-center text-muted-foreground">
                    Available: {helpline.available}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Resources */}
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-6">Additional Support</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <Card
                  key={index}
                  className={`
                    p-6 shadow-soft hover:shadow-medium transition-all bg-gradient-card backdrop-blur-sm
                    ${resource.urgent ? "border-2 border-destructive/30" : ""}`}
                >
                  <div className={`w-12 h-12 rounded-xl ${resource.urgent ? "bg-destructive/10" : "bg-primary/10"} flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${resource.urgent ? "text-destructive" : "text-primary"}`} />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {resource.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                  <Button 
                    variant="outline"
                    className={`
                      w-full
                      ${resource.urgent 
                        ? "border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground" 
                        : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      }
                    `}
                  >
                    {resource.action}
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Safety Tips */}
        <Card className="mt-12 p-8 bg-primary/5 border border-primary/20">
          <h3 className="text-xl font-semibold text-foreground mb-4">
            While Waiting for Help
          </h3>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
              <span>Stay with someone you trust or in a safe environment</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
              <span>Remove access to anything that could be used for self-harm</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
              <span>Practice breathing exercises or grounding techniques</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
              <span>Remember: This feeling is temporary, and help is available</span>
            </li>
          </ul>
        </Card>
      </div>
    </section>
  );
};

export default CrisisSupport;
