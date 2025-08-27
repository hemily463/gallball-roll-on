import { Clock, Smile, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Clock,
    title: "Save Time",
    stat: "15+ hours",
    description: "Average weekly time saved per user through intelligent task automation",
    color: "text-primary"
  },
  {
    icon: Smile,
    title: "Reduce Stress",
    stat: "80% less",
    description: "Reported reduction in task-related stress and mental overhead",
    color: "text-accent"
  },
  {
    icon: TrendingUp,
    title: "Always-On Momentum",
    stat: "24/7",
    description: "Continuous progress on your goals, even while you sleep",
    color: "text-primary"
  }
];

const ValueProposition = () => {
  return (
    <section className="py-24 bg-gradient-subtle relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-gradient-primary blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-gradient-accent blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            The <span className="flow-text">Gallball</span> Advantage
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform how you work and live. Experience the freedom of having an AI assistant 
            that truly understands and executes on your behalf.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <div 
              key={index}
              className="text-center group hover:scale-105 transition-smooth"
            >
              <div className="bg-card rounded-3xl p-8 shadow-electric hover:shadow-accent border border-border/50 space-y-6">
                <div className="flex justify-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center momentum-glow">
                    <value.icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className={`text-4xl font-bold ${value.color}`}>
                    {value.stat}
                  </div>
                  <h3 className="text-2xl font-semibold">{value.title}</h3>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-block p-1 rounded-3xl bg-gradient-hero">
            <div className="bg-background rounded-2xl px-12 py-8">
              <h3 className="text-2xl font-bold mb-4">Ready to keep life rolling?</h3>
              <p className="text-muted-foreground mb-6">
                Join thousands who've discovered the power of agentic AI assistance
              </p>
              <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  Free tier available
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  No setup required
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  Cancel anytime
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;