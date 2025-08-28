import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Search, Book, MessageCircle, Video, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    icon: Book,
    name: "Getting Started",
    description: "Learn the basics of setting up and using Gallball",
    articles: 12
  },
  {
    icon: MessageCircle,
    name: "Integrations",
    description: "Connect Gallball with your favorite apps and services",
    articles: 25
  },
  {
    icon: Video,
    name: "Advanced Features",
    description: "Master complex workflows and automation",
    articles: 18
  },
  {
    icon: FileText,
    name: "Billing & Plans",
    description: "Manage your subscription and billing information",
    articles: 8
  }
];

const popularArticles = [
  "How to create your first automated task",
  "Connecting Gmail for email automation",
  "Setting up recurring workflows",
  "Understanding task execution logs",
  "Troubleshooting common integration issues",
  "Managing team permissions and access"
];

const HelpCenter = () => {
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
              <span className="flow-text">Help</span> Center
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Find answers, tutorials, and guides to get the most out of Gallball's automation features.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input 
                placeholder="Search help articles..." 
                className="pl-12 h-12 text-lg"
              />
            </div>
          </header>

          {/* Help Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index} className="bg-card border border-border/50 rounded-xl p-6 hover:shadow-accent transition-smooth cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{category.description}</p>
                  <p className="text-xs text-muted-foreground">{category.articles} articles</p>
                </div>
              );
            })}
          </div>

          {/* Popular Articles */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-card border border-border/50 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Popular Articles</h2>
              <div className="space-y-4">
                {popularArticles.map((article, index) => (
                  <div key={index} className="pb-3 border-b border-border/30 last:border-b-0 last:pb-0">
                    <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                      {article}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border/50 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
              <div className="space-y-4">
                <Button variant="outline" className="w-full justify-start">
                  <Video className="w-4 h-4 mr-2" />
                  Watch Video Tutorials
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contact Support
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Book className="w-4 h-4 mr-2" />
                  API Documentation
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="w-4 h-4 mr-2" />
                  Download User Guide
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Support */}
          <div className="text-center">
            <div className="bg-card border border-border/50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">Still Need Help?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Can't find what you're looking for? Our support team is available 24/7 to help you with any questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Chat with Support</Button>
                <Button variant="outline" size="lg">Send Email</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;