import { Workflow, Network, Users, Shield } from "lucide-react";

const features = [
  {
    icon: Workflow,
    title: "Multi-Step Automation",
    description: "Seamlessly handles complex workflows across multiple platforms and applications",
    gradient: "from-primary to-primary-glow"
  },
  {
    icon: Network,
    title: "Cross-Domain Intelligence",
    description: "Connects data and processes across different domains for comprehensive task completion",
    gradient: "from-accent to-accent-glow"
  },
  {
    icon: Users,
    title: "Adaptive Personality",
    description: "Learns your preferences and communication style for personalized assistance",
    gradient: "from-primary to-accent"
  },
  {
    icon: Shield,
    title: "Safety & Transparency",
    description: "Built with security-first approach and full visibility into every action taken",
    gradient: "from-accent to-primary"
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Powerful Features for <span className="flow-text">Every Need</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Advanced AI capabilities designed to handle your most complex tasks 
            with intelligence, safety, and reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative bg-card rounded-3xl p-8 shadow-electric hover:shadow-accent transition-smooth border border-border/50 overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-5 group-hover:opacity-10 transition-smooth`}></div>
              
              <div className="relative z-10">
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center momentum-glow flex-shrink-0`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold group-hover:text-primary transition-smooth">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-block p-1 rounded-2xl bg-gradient-hero">
            <div className="bg-background rounded-xl px-8 py-4">
              <p className="text-lg font-medium">
                <span className="flow-text">Built for scale:</span> Handle hundreds of tasks simultaneously
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;