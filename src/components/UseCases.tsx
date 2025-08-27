import { Briefcase, Home, Rocket, PenTool } from "lucide-react";

const useCases = [
  {
    icon: Briefcase,
    title: "Busy Professionals",
    description: "Schedule meetings, manage emails, research competitors, and handle administrative tasks",
    examples: ["Calendar coordination", "Email management", "Report generation", "Data analysis"]
  },
  {
    icon: Home,
    title: "Families",
    description: "Organize family schedules, plan vacations, manage household tasks, and coordinate activities",
    examples: ["Trip planning", "Schedule coordination", "Household management", "Activity research"]
  },
  {
    icon: Rocket,
    title: "Startups",
    description: "Market research, competitor analysis, content creation, and operational automation",
    examples: ["Market research", "Content creation", "Lead generation", "Process automation"]
  },
  {
    icon: PenTool,
    title: "Freelancers",
    description: "Client communication, project management, invoice handling, and business development",
    examples: ["Client outreach", "Project tracking", "Invoice management", "Portfolio updates"]
  }
];

const UseCases = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Perfect for <span className="flow-text">Every Lifestyle</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're a professional, parent, entrepreneur, or creative, 
            Gallball adapts to your unique needs and workflow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <div 
              key={index}
              className="group bg-card rounded-2xl p-6 shadow-electric hover:shadow-accent transition-smooth border border-border/50 hover:scale-105"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center momentum-glow">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-smooth">
                    {useCase.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {useCase.description}
                </p>
                
                <div className="space-y-2">
                  <p className="text-sm font-medium text-accent">Common tasks:</p>
                  <ul className="space-y-1">
                    {useCase.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Hover indicator */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/20 transition-smooth"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-card border border-primary/20 shadow-electric">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-primary"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-accent"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-hero"></div>
            </div>
            <span className="font-medium">Join 10,000+ users who've automated their workflows</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;