import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";

const jobs = [
  {
    title: "Senior AI Engineer",
    department: "Engineering",
    location: "San Francisco, CA / Remote",
    type: "Full-time",
    description: "Build the next generation of agentic AI systems that autonomously complete complex tasks.",
    requirements: ["5+ years in AI/ML", "Experience with LLMs", "Python expertise"]
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "New York, NY / Remote",
    type: "Full-time",
    description: "Design intuitive interfaces that make complex AI automation accessible to everyone.",
    requirements: ["3+ years product design", "B2B SaaS experience", "Figma proficiency"]
  },
  {
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Scale our infrastructure to handle millions of automated tasks reliably and efficiently.",
    requirements: ["Cloud platforms (AWS/GCP)", "Kubernetes", "Infrastructure as Code"]
  },
  {
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Austin, TX / Remote",
    type: "Full-time",
    description: "Help customers maximize value from Gallball's automation capabilities.",
    requirements: ["2+ years in CS", "Technical background", "Excellent communication"]
  }
];

const Careers = () => {
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
              <span className="flow-text">Join</span> Our Mission
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Help us build the future of work where AI handles the busywork and humans focus on what matters most.
            </p>
          </header>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-card border border-border/50 rounded-xl p-6 text-center">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Remote-First</h3>
              <p className="text-muted-foreground text-sm">
                Work from anywhere in the world. We believe great talent shouldn't be limited by geography.
              </p>
            </div>
            <div className="bg-card border border-border/50 rounded-xl p-6 text-center">
              <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Flexible Hours</h3>
              <p className="text-muted-foreground text-sm">
                Work when you're most productive. We focus on results, not hours in a chair.
              </p>
            </div>
            <div className="bg-card border border-border/50 rounded-xl p-6 text-center">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Global Impact</h3>
              <p className="text-muted-foreground text-sm">
                Build technology that helps millions of people reclaim their time and focus.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
            <div className="space-y-6">
              {jobs.map((job, index) => (
                <div key={index} className="bg-card border border-border/50 rounded-xl p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <Badge variant="outline">{job.department}</Badge>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <Button className="mt-4 md:mt-0">Apply Now</Button>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{job.description}</p>
                  
                  <div>
                    <h4 className="font-medium mb-2">Key Requirements:</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      {job.requirements.map((req, reqIndex) => (
                        <li key={reqIndex}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <div className="bg-card border border-border/50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">Don't See the Right Role?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                We're always looking for exceptional talent. Send us your resume and tell us how you'd like to contribute to Gallball's mission.
              </p>
              <Button size="lg">Send Us Your Resume</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;