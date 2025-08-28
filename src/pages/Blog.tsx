import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    title: "The Future of Work is Agentic",
    excerpt: "How AI agents are transforming the way we approach productivity and task management in the modern workplace.",
    author: "Sarah Chen",
    date: "March 15, 2024",
    category: "AI & Automation",
    readTime: "5 min read",
    featured: true
  },
  {
    title: "Building Trust in AI Automation",
    excerpt: "Exploring the importance of transparency and safety in autonomous AI systems that handle sensitive tasks.",
    author: "Michael Rodriguez",
    date: "March 10, 2024",
    category: "Safety & Ethics",
    readTime: "7 min read",
    featured: false
  },
  {
    title: "Case Study: How Startup X Saved 20 Hours Per Week",
    excerpt: "Real-world results from implementing Gallball's agentic AI in a fast-growing startup environment.",
    author: "Emily Johnson",
    date: "March 5, 2024",
    category: "Case Studies",
    readTime: "6 min read",
    featured: false
  },
  {
    title: "The Evolution of Personal Productivity",
    excerpt: "From to-do lists to AI agents: tracing the history and future of personal productivity tools.",
    author: "David Park",
    date: "February 28, 2024",
    category: "Productivity",
    readTime: "8 min read",
    featured: false
  },
  {
    title: "Integration Deep Dive: Gmail Automation",
    excerpt: "Technical overview of how Gallball's AI agents intelligently manage email workflows and responses.",
    author: "Sarah Chen",
    date: "February 20, 2024",
    category: "Technical",
    readTime: "10 min read",
    featured: false
  },
  {
    title: "Small Business Automation Success Stories",
    excerpt: "How small businesses are using AI automation to compete with larger organizations.",
    author: "Lisa Thompson",
    date: "February 15, 2024",
    category: "Small Business",
    readTime: "6 min read",
    featured: false
  }
];

const Blog = () => {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

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
              <span className="flow-text">Gallball</span> Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Insights, stories, and ideas about the future of AI automation and productivity.
            </p>
          </header>

          {/* Featured Post */}
          {featuredPost && (
            <div className="bg-card border border-border/50 rounded-2xl p-8 mb-16">
              <Badge className="mb-4">Featured</Badge>
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge variant="outline" className="mb-3">{featuredPost.category}</Badge>
                  <h2 className="text-3xl font-bold mb-4">{featuredPost.title}</h2>
                  <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </div>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <Button className="group">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                <div className="bg-gradient-primary/10 rounded-xl h-64 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <div className="w-16 h-16 rounded-full bg-gradient-primary opacity-20 mx-auto mb-4"></div>
                    Featured Article Image
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Regular Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {regularPosts.map((post, index) => (
              <article key={index} className="bg-card border border-border/50 rounded-xl p-6 hover:shadow-accent transition-smooth">
                <div className="mb-4">
                  <div className="bg-gradient-primary/10 rounded-lg h-40 mb-4 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-gradient-primary opacity-20"></div>
                  </div>
                  <Badge variant="outline" className="mb-3">{post.category}</Badge>
                  <h3 className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-3">{post.excerpt}</p>
                </div>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                  </div>
                  <span>{post.readTime}</span>
                </div>
                
                <Button variant="outline" size="sm" className="w-full">
                  Read More
                </Button>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="text-center">
            <div className="bg-card border border-border/50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Get the latest insights about AI automation, productivity tips, and Gallball updates delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-4 py-2 rounded-lg border border-border bg-background flex-1"
                />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;