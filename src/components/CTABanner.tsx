import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-12 left-12 w-32 h-32 rounded-full bg-white/20 blur-xl rolling-sphere"></div>
        <div className="absolute bottom-12 right-12 w-24 h-24 rounded-full bg-white/30 blur-lg rolling-sphere" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 rounded-full bg-white/10 blur-md rolling-sphere" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center text-white space-y-8">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/30">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Ready to Transform Your Workflow?</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
              Delegate Your Tasks.<br />
              <span className="text-white/90">Gallball Keeps Life Moving.</span>
            </h2>
            
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Stop managing tasks and start achieving goals. Let our agentic AI handle 
              the complexity while you focus on what truly matters.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="lg" 
              className="group bg-white text-primary hover:bg-white/90 shadow-accent"
            >
              Start Your Free Account
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white"
            >
              Schedule a Demo
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white/60"></div>
              14-day free trial
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white/60"></div>
              No setup fees
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white/60"></div>
              Cancel anytime
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="pt-8 border-t border-white/20">
            <div className="flex items-center justify-center gap-12 text-white/60">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">10K+</div>
                <div className="text-sm">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">1M+</div>
                <div className="text-sm">Tasks Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">99.9%</div>
                <div className="text-sm">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;