import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Code, Book, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Api = () => {
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
              <span className="flow-text">API</span> Documentation
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Build powerful integrations with Gallball's RESTful API. Automate tasks, manage workflows, and integrate with your existing systems.
            </p>
          </header>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-card border border-border/50 rounded-xl p-6 text-center">
              <Code className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">RESTful API</h3>
              <p className="text-muted-foreground text-sm">
                Clean, predictable REST endpoints with comprehensive documentation and examples.
              </p>
            </div>
            <div className="bg-card border border-border/50 rounded-xl p-6 text-center">
              <Book className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Interactive Docs</h3>
              <p className="text-muted-foreground text-sm">
                Test API calls directly in the browser with our interactive documentation.
              </p>
            </div>
            <div className="bg-card border border-border/50 rounded-xl p-6 text-center">
              <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Webhooks</h3>
              <p className="text-muted-foreground text-sm">
                Real-time notifications when tasks complete or workflows change status.
              </p>
            </div>
          </div>

          <div className="bg-card border border-border/50 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6">Quick Start</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">1. Get Your API Key</h3>
                <p className="text-muted-foreground mb-4">
                  Generate an API key from your dashboard settings. Keep it secure and never expose it in client-side code.
                </p>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                  curl -H "Authorization: Bearer YOUR_API_KEY" \<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;https://api.gallball.com/v1/tasks
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">2. Create Your First Task</h3>
                <p className="text-muted-foreground mb-4">
                  Send a POST request to create a new automated task.
                </p>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                  {`{
  "goal": "Send weekly report to team",
  "schedule": "0 9 * * 1",
  "integrations": ["gmail", "sheets"]
}`}
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-card border border-border/50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Core Endpoints</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm">GET /tasks</span>
                  <Badge variant="outline">List tasks</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm">POST /tasks</span>
                  <Badge variant="outline">Create task</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm">GET /tasks/:id</span>
                  <Badge variant="outline">Get task</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm">PUT /tasks/:id</span>
                  <Badge variant="outline">Update task</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm">DELETE /tasks/:id</span>
                  <Badge variant="outline">Delete task</Badge>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border/50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Rate Limits</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Free Plan</span>
                  <span className="text-muted-foreground">100 requests/hour</span>
                </div>
                <div className="flex justify-between">
                  <span>Pro Plan</span>
                  <span className="text-muted-foreground">1,000 requests/hour</span>
                </div>
                <div className="flex justify-between">
                  <span>Enterprise</span>
                  <span className="text-muted-foreground">Custom limits</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">
                  Rate limit headers are included in all responses to help you track usage.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-card border border-border/50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">Ready to Start Building?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Explore our full API documentation with interactive examples, SDKs for popular languages, and comprehensive guides.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">View Full Documentation</Button>
                <Button variant="outline" size="lg">Download SDKs</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Api;