import { Twitter, Linkedin, Github, Mail } from "lucide-react";
import { Link } from "react-router-dom";

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
              <Link to="/#features" className="block text-muted-foreground hover:text-primary transition-smooth">
                Features
              </Link>
              <Link to="/pricing" className="block text-muted-foreground hover:text-primary transition-smooth">
                Pricing
              </Link>
              <Link to="/integrations" className="block text-muted-foreground hover:text-primary transition-smooth">
                Integrations
              </Link>
              <Link to="/api" className="block text-muted-foreground hover:text-primary transition-smooth">
                API Documentation
              </Link>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold">Company</h3>
            <div className="space-y-3">
              <Link to="/about" className="block text-muted-foreground hover:text-primary transition-smooth">
                About Us
              </Link>
              <Link to="/careers" className="block text-muted-foreground hover:text-primary transition-smooth">
                Careers
              </Link>
              <Link to="/blog" className="block text-muted-foreground hover:text-primary transition-smooth">
                Blog
              </Link>
              <Link to="/press" className="block text-muted-foreground hover:text-primary transition-smooth">
                Press
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold">Support</h3>
            <div className="space-y-3">
              <Link to="/contact" className="block text-muted-foreground hover:text-primary transition-smooth">
                Contact
              </Link>
              <Link to="/help" className="block text-muted-foreground hover:text-primary transition-smooth">
                Help Center
              </Link>
              <Link to="/status" className="block text-muted-foreground hover:text-primary transition-smooth">
                Status
              </Link>
              <Link to="/security" className="block text-muted-foreground hover:text-primary transition-smooth">
                Security
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span>© 2024 Gallball. All rights reserved.</span>
            <Link to="/privacy" className="hover:text-primary transition-smooth">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary transition-smooth">
              Terms of Service
            </Link>
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