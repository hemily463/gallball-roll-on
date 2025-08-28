import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const pressReleases = [
  {
    title: "Gallball Raises $15M Series A to Revolutionize Task Automation",
    date: "March 20, 2024",
    excerpt: "Leading venture capital firms back Gallball's vision of agentic AI that autonomously completes complex workflows."
  },
  {
    title: "Gallball Launches Advanced Enterprise Features",
    date: "February 15, 2024",
    excerpt: "New enterprise-grade security, compliance, and customization options for large organizations."
  },
  {
    title: "10,000+ Users Trust Gallball for Daily Task Automation",
    date: "January 8, 2024",
    excerpt: "Milestone reached as professionals worldwide adopt AI-powered task delegation at unprecedented scale."
  }
];

const mediaKit = [
  {
    name: "Company Logo (PNG)",
    description: "High-resolution logo files in various formats",
    size: "2.1 MB"
  },
  {
    name: "Brand Guidelines",
    description: "Complete brand identity and usage guidelines",
    size: "1.8 MB"
  },
  {
    name: "Product Screenshots",
    description: "High-quality product interface screenshots",
    size: "5.4 MB"
  },
  {
    name: "Executive Photos",
    description: "Professional headshots of leadership team",
    size: "3.2 MB"
  }
];

const Press = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-smooth mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <header className="text-center mb-16">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="flow-text">Press</span> & Media
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Latest news, press releases, and media resources about Gallball's mission to transform work through agentic AI.
            </p>
          </header>

          {/* Press Contact */}
          <div className="bg-card border border-border/50 rounded-2xl p-8 mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Media Inquiries</h2>
                <p className="text-muted-foreground mb-6">
                  For press inquiries, interview requests, or additional information about Gallball, please contact our media team.
                </p>
                <div className="space-y-3">
                  <div>
                    <span className="font-medium">Email:</span>
                    <span className="text-muted-foreground ml-2">press@gallball.com</span>
                  </div>
                  <div>
                    <span className="font-medium">Phone:</span>
                    <span className="text-muted-foreground ml-2">+1 (555) 123-4567</span>
                  </div>
                  <div>
                    <span className="font-medium">Response Time:</span>
                    <span className="text-muted-foreground ml-2">Within 24 hours</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Available for Interviews</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-medium">Sarah Chen</h4>
                    <p className="text-sm text-muted-foreground">CEO & Co-founder</p>
                    <p className="text-sm text-muted-foreground mt-1">AI strategy, company vision, industry trends</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-medium">Dr. Michael Rodriguez</h4>
                    <p className="text-sm text-muted-foreground">CTO & Co-founder</p>
                    <p className="text-sm text-muted-foreground mt-1">Technical architecture, AI safety, automation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Press Releases */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Recent Press Releases</h2>
            <div className="space-y-6">
              {pressReleases.map((release, index) => (
                <div key={index} className="bg-card border border-border/50 rounded-xl p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{release.title}</h3>
                      <p className="text-muted-foreground mb-3">{release.excerpt}</p>
                      <p className="text-sm text-muted-foreground">{release.date}</p>
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-6">
                      <Button variant="outline" className="group">
                        Read Full Release
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Media Kit */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Media Kit</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {mediaKit.map((item, index) => (
                <div key={index} className="bg-card border border-border/50 rounded-xl p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">{item.name}</h3>
                      <p className="text-muted-foreground text-sm mb-1">{item.description}</p>
                      <p className="text-xs text-muted-foreground">{item.size}</p>
                    </div>
                    <Button variant="outline" size="sm" className="ml-4">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Button>Download Complete Media Kit</Button>
            </div>
          </div>

          {/* Company Facts */}
          <div className="bg-card border border-border/50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-8 text-center">Company at a Glance</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">2024</div>
                <div className="text-sm text-muted-foreground">Founded</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">10K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">1M+</div>
                <div className="text-sm text-muted-foreground">Tasks Automated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">25</div>
                <div className="text-sm text-muted-foreground">Team Members</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Press;