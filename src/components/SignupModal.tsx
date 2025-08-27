import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sparkles, Mail, User, ArrowRight, Check } from "lucide-react";

interface SignupModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SignupModal = ({ open, onOpenChange }: SignupModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md border-primary/20 shadow-electric">
        <div className="relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 -z-10"></div>
          
          {/* Floating elements */}
          <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-primary opacity-20 animate-float"></div>
          <div className="absolute bottom-4 left-4 w-6 h-6 rounded-full bg-gradient-accent opacity-30 animate-float" style={{animationDelay: '2s'}}></div>

          <DialogHeader className="space-y-4 pb-6">
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center momentum-glow">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>
            <DialogTitle className="text-center text-2xl font-bold">
              Start Your <span className="flow-text">Free Account</span>
            </DialogTitle>
            <p className="text-center text-muted-foreground">
              Join thousands who've automated their workflows with Gallball
            </p>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
                  <User className="w-4 h-4 text-primary" />
                  Full Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="border-border/50 focus:border-primary transition-smooth"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="border-border/50 focus:border-primary transition-smooth"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className="text-sm font-medium flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-accent" />
                  Company (Optional)
                </Label>
                <Input
                  id="company"
                  type="text"
                  placeholder="Your company name"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="border-border/50 focus:border-primary transition-smooth"
                />
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-card/50 rounded-xl p-4 border border-primary/10">
              <p className="text-sm font-medium mb-3 text-center">What you get:</p>
              <div className="space-y-2">
                {[
                  "5 free tasks per month",
                  "Basic automation features",
                  "Email support",
                  "No credit card required"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <div className="w-4 h-4 rounded-full bg-gradient-primary flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 text-white" />
                    </div>
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="w-full group"
              >
                Create Free Account
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                By creating an account, you agree to our{" "}
                <a href="#terms" className="text-primary hover:underline">Terms of Service</a>
                {" "}and{" "}
                <a href="#privacy" className="text-primary hover:underline">Privacy Policy</a>
              </p>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SignupModal;