import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle, AlertCircle, XCircle, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    name: "API",
    status: "operational",
    uptime: "99.99%"
  },
  {
    name: "Web Application",
    status: "operational",
    uptime: "99.98%"
  },
  {
    name: "Task Processing",
    status: "operational",
    uptime: "99.97%"
  },
  {
    name: "Email Integrations",
    status: "operational",
    uptime: "99.95%"
  },
  {
    name: "Calendar Sync",
    status: "degraded",
    uptime: "98.50%"
  },
  {
    name: "Database",
    status: "operational",
    uptime: "99.99%"
  }
];

const incidents = [
  {
    title: "Intermittent delays in calendar synchronization",
    status: "investigating",
    time: "2 hours ago",
    description: "We're investigating reports of delayed calendar sync for some Google Calendar integrations."
  },
  {
    title: "Email integration temporary outage",
    status: "resolved",
    time: "1 day ago",
    description: "Brief outage in Gmail integration has been resolved. All pending emails have been processed."
  },
  {
    title: "Scheduled maintenance - Database optimization",
    status: "completed",
    time: "3 days ago",
    description: "Completed scheduled maintenance to optimize database performance. No user impact."
  }
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case "operational":
      return <CheckCircle className="w-5 h-5 text-green-500" />;
    case "degraded":
      return <AlertCircle className="w-5 h-5 text-yellow-500" />;
    case "outage":
      return <XCircle className="w-5 h-5 text-red-500" />;
    case "investigating":
      return <Clock className="w-5 h-5 text-yellow-500" />;
    default:
      return <CheckCircle className="w-5 h-5 text-green-500" />;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "operational":
      return "bg-green-500";
    case "degraded":
      return "bg-yellow-500";
    case "outage":
      return "bg-red-500";
    case "investigating":
      return "bg-yellow-500";
    case "resolved":
      return "bg-green-500";
    case "completed":
      return "bg-blue-500";
    default:
      return "bg-green-500";
  }
};

const Status = () => {
  const overallStatus = services.some(s => s.status === "outage") 
    ? "outage" 
    : services.some(s => s.status === "degraded") 
    ? "degraded" 
    : "operational";

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-smooth mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <header className="text-center mb-16">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="flow-text">System</span> Status
            </h1>
            <div className="flex items-center justify-center gap-3 mb-4">
              {getStatusIcon(overallStatus)}
              <span className="text-xl font-semibold capitalize">
                {overallStatus === "operational" ? "All Systems Operational" : 
                 overallStatus === "degraded" ? "Some Systems Degraded" : 
                 "System Outage"}
              </span>
            </div>
            <p className="text-muted-foreground">
              Current status of Gallball services and infrastructure
            </p>
          </header>

          {/* Services Status */}
          <div className="bg-card border border-border/50 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">Services</h2>
            <div className="space-y-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-center justify-between py-3 border-b border-border/30 last:border-b-0">
                  <div className="flex items-center gap-3">
                    {getStatusIcon(service.status)}
                    <span className="font-medium">{service.name}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge 
                      variant="outline" 
                      className={`capitalize ${service.status === 'operational' ? 'text-green-600 border-green-200' : 
                        service.status === 'degraded' ? 'text-yellow-600 border-yellow-200' : 
                        'text-red-600 border-red-200'}`}
                    >
                      {service.status}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{service.uptime} uptime</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Incidents */}
          <div className="bg-card border border-border/50 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">Recent Incidents</h2>
            <div className="space-y-6">
              {incidents.map((incident, index) => (
                <div key={index} className="border-l-4 pl-4" style={{borderColor: getStatusColor(incident.status).replace('bg-', '')}}>
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold">{incident.title}</h3>
                    <span className="text-sm text-muted-foreground">{incident.time}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-2 h-2 rounded-full ${getStatusColor(incident.status)}`}></div>
                    <Badge variant="outline" className="text-xs capitalize">
                      {incident.status}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm">{incident.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Uptime Stats */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-border/50 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">99.98%</div>
              <div className="text-sm text-muted-foreground">30-day uptime</div>
            </div>
            <div className="bg-card border border-border/50 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">99.95%</div>
              <div className="text-sm text-muted-foreground">90-day uptime</div>
            </div>
            <div className="bg-card border border-border/50 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">99.92%</div>
              <div className="text-sm text-muted-foreground">1-year uptime</div>
            </div>
          </div>

          {/* Subscribe to Updates */}
          <div className="mt-12 text-center">
            <div className="bg-card border border-border/50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">Stay Informed</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Subscribe to status updates to receive notifications about incidents and maintenance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-2 rounded-lg border border-border bg-background flex-1"
                />
                <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-smooth">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;