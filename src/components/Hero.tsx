import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/gallball-hero.jpg";
import SignupModal from "./SignupModal";

const Hero = () => {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-subtle overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-primary blur-xl"></div>
        <div className="absolute top-40 right-32 w-24 h-24 rounded-full bg-gradient-accent blur-lg"></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 rounded-full bg-gradient-hero blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">Agentic AI Assistant</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="flow-text">Gallball</span>
                <br />
                Keep Life Rolling
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl">
                The AI assistant that autonomously completes tasks for busy professionals, 
                families, and small businesses. Delegate, relax, and watch your life gain momentum.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="lg" 
                className="group"
                onClick={() => setIsSignupOpen(true)}
              >
                Get Started Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center gap-8 text-sm text-muted-foreground justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                Free to start
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                No credit card required
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Gallball AI Assistant - Abstract sphere representing autonomous task completion"
                className="w-full max-w-lg h-auto rolling-sphere momentum-glow rounded-3xl"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-accent animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full bg-gradient-primary opacity-60 animate-float" style={{animationDelay: '2s'}}></div>
              <div className="absolute top-1/2 -left-8 w-6 h-6 rounded-full bg-accent/40 animate-float" style={{animationDelay: '4s'}}></div>
            </div>
          </div>
        </div>
      </div>

      <SignupModal 
        open={isSignupOpen} 
        onOpenChange={setIsSignupOpen} 
      />
    </section>
  );
};

export default Hero;