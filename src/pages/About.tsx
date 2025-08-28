import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-smooth mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <header className="text-center mb-16">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="flow-text">About</span> Gallball
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're building the future of task automation with agentic AI that actually gets things done.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                At Gallball, we believe that life should keep rolling forward, not get stuck on repetitive tasks. 
                Our mission is to create intelligent AI agents that handle the complex, multi-step work that 
                bogs down busy professionals, families, and small businesses.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">What Makes Us Different</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 rounded-xl bg-card border border-border/50">
                  <h3 className="text-xl font-semibold mb-3">Truly Autonomous</h3>
                  <p className="text-muted-foreground">
                    Unlike simple chatbots, our agents take initiative, make decisions, and execute complex workflows without constant supervision.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border/50">
                  <h3 className="text-xl font-semibold mb-3">Cross-Domain Intelligence</h3>
                  <p className="text-muted-foreground">
                    Our AI understands context across different apps, services, and domains to complete tasks that span multiple platforms.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Founded in 2024, Gallball emerged from a simple observation: despite all our productivity tools, 
                people are busier than ever. The problem isn't lack of tools—it's that every tool requires 
                human orchestration.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We imagined a world where AI doesn't just respond to commands but proactively manages the 
                complex workflows that eat up our time. Where delegation means truly letting go, not 
                micromanaging every step.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;