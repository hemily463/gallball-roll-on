import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Check, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const integrations = [
  {
    name: "Gmail",
    description: "Automatically sort, respond to, and schedule emails",
    category: "Email",
    status: "Available",
    features: ["Auto-categorization", "Smart replies", "Schedule send"]
  },
  {
    name: "Google Calendar",
    description: "Intelligent scheduling and meeting coordination",
    category: "Calendar",
    status: "Available",
    features: ["Smart scheduling", "Conflict resolution", "Meeting prep"]
  },
  {
    name: "Slack",
    description: "Team communication and workflow automation",
    category: "Communication",
    status: "Available",
    features: ["Message management", "Channel organization", "Status updates"]
  },
  {
    name: "Notion",
    description: "Content creation and knowledge management",
    category: "Productivity",
    status: "Available",
    features: ["Page creation", "Database updates", "Template automation"]
  },
  {
    name: "Asana",
    description: "Project management and task coordination",
    category: "Project Management",
    status: "Available",
    features: ["Task creation", "Progress tracking", "Team coordination"]
  },
  {
    name: "Salesforce",
    description: "CRM automation and lead management",
    category: "CRM",
    status: "Coming Soon",
    features: ["Lead scoring", "Pipeline management", "Report generation"]
  }
];

const Integrations = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-smooth mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <header className="text-center mb-16">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="flow-text">Integrations</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Gallball seamlessly connects with your favorite tools to create powerful automation workflows across your entire digital ecosystem.
            </p>
          </header>

          <div className="mb-12">
            <div className="text-center p-8 bg-card border border-border/50 rounded-2xl">
              <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">500+ Integrations Available</h2>
              <p className="text-muted-foreground mb-4">
                Connect with virtually any app or service through our extensive integration library and custom API connections.
              </p>
              <Button variant="outline">Browse All Integrations</Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-card border border-border/50 rounded-xl p-6 hover:shadow-accent transition-smooth">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{integration.name}</h3>
                    <Badge variant={integration.status === "Available" ? "default" : "secondary"} className="text-xs">
                      {integration.status}
                    </Badge>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {integration.category}
                  </Badge>
                </div>
                
                <p className="text-muted-foreground mb-4 text-sm">
                  {integration.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Key Features:</h4>
                  {integration.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-3 h-3 text-primary" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full mt-4" 
                  disabled={integration.status === "Coming Soon"}
                >
                  {integration.status === "Available" ? "Connect" : "Coming Soon"}
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-card border border-border/50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">Need a Custom Integration?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Don't see your tool listed? Our team can build custom integrations for your specific workflow needs. 
                Contact us to discuss your requirements.
              </p>
              <Button>Request Custom Integration</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integrations;