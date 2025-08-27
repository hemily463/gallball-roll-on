import { Twitter, Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center momentum-glow">
                <div className="w-6 h-6 rounded-full bg-white/20"></div>
              </div>
              <span className="text-2xl font-bold flow-text">Gallball</span>
            </div>
            <p className="text-muted-foreground">
              Keep life rolling with intelligent task automation that works while you focus on what matters most.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="font-semibold">Product</h3>
            <div className="space-y-3">
              <a href="#features" className="block text-muted-foreground hover:text-primary transition-smooth">
                Features
              </a>
              <a href="#pricing" className="block text-muted-foreground hover:text-primary transition-smooth">
                Pricing
              </a>
              <a href="#integrations" className="block text-muted-foreground hover:text-primary transition-smooth">
                Integrations
              </a>
              <a href="#api" className="block text-muted-foreground hover:text-primary transition-smooth">
                API Documentation
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold">Company</h3>
            <div className="space-y-3">
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-smooth">
                About Us
              </a>
              <a href="#careers" className="block text-muted-foreground hover:text-primary transition-smooth">
                Careers
              </a>
              <a href="#blog" className="block text-muted-foreground hover:text-primary transition-smooth">
                Blog
              </a>
              <a href="#press" className="block text-muted-foreground hover:text-primary transition-smooth">
                Press
              </a>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold">Support</h3>
            <div className="space-y-3">
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-smooth">
                Contact
              </a>
              <a href="#help" className="block text-muted-foreground hover:text-primary transition-smooth">
                Help Center
              </a>
              <a href="#status" className="block text-muted-foreground hover:text-primary transition-smooth">
                Status
              </a>
              <a href="#security" className="block text-muted-foreground hover:text-primary transition-smooth">
                Security
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span>© 2024 Gallball. All rights reserved.</span>
            <a href="#privacy" className="hover:text-primary transition-smooth">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-primary transition-smooth">
              Terms of Service
            </a>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <div className="w-4 h-4 rounded-full bg-gradient-accent"></div>
            <span>for a better tomorrow</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;