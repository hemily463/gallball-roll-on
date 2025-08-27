import { Target, Brain, Zap, RotateCcw } from "lucide-react";

const steps = [
  {
    icon: Target,
    title: "Input Goal",
    description: "Tell Gallball what you want to accomplish in plain language"
  },
  {
    icon: Brain,
    title: "Decompose",
    description: "AI breaks down your goal into manageable, actionable steps"
  },
  {
    icon: Zap,
    title: "Agentic Execution",
    description: "Autonomous agents work across platforms to complete tasks"
  },
  {
    icon: RotateCcw,
    title: "Feedback Loop",
    description: "Continuous learning and adaptation for better results"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            How <span className="flow-text">Gallball</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From goal to completion in four simple steps. Our AI agents handle the complexity 
            while you focus on what matters most.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary to-accent opacity-30 z-10"></div>
              )}
              
              <div className="relative bg-card rounded-2xl p-8 shadow-electric hover:shadow-accent transition-smooth hover:scale-105 border border-border/50">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center momentum-glow">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-white text-sm font-bold flex items-center justify-center">
                      {index + 1}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-accent/10 text-accent border border-accent/20">
            <div className="w-3 h-3 rounded-full bg-accent animate-pulse"></div>
            <span className="font-medium">Average task completion: 3.2x faster than manual work</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;