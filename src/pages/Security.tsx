import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Shield, Lock, Eye, FileCheck, Users, Server } from "lucide-react";
import { Link } from "react-router-dom";

const securityFeatures = [
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "SOC 2 Type II compliant infrastructure with 24/7 monitoring and threat detection."
  },
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "All data encrypted in transit and at rest using AES-256 encryption standards."
  },
  {
    icon: Eye,
    title: "Privacy by Design",
    description: "Built with privacy principles from the ground up. We never sell or share your data."
  },
  {
    icon: FileCheck,
    title: "Compliance Ready",
    description: "GDPR, CCPA, and HIPAA compliant processes to protect your sensitive information."
  },
  {
    icon: Users,
    title: "Access Controls",
    description: "Role-based permissions and multi-factor authentication for enhanced security."
  },
  {
    icon: Server,
    title: "Secure Infrastructure",
    description: "Hosted on AWS with automated backups and disaster recovery procedures."
  }
];

const certifications = [
  {
    name: "SOC 2 Type II",
    description: "Annual security and availability audits",
    status: "Certified"
  },
  {
    name: "ISO 27001",
    description: "Information security management",
    status: "In Progress"
  },
  {
    name: "GDPR",
    description: "European data protection compliance",
    status: "Compliant"
  },
  {
    name: "CCPA",
    description: "California privacy regulations",
    status: "Compliant"
  }
];

const Security = () => {
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
              <span className="flow-text">Security</span> & Privacy
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your trust is our priority. Learn how we protect your data and maintain the highest security standards.
            </p>
          </header>

          {/* Security Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {securityFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-card border border-border/50 rounded-xl p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>

          {/* Data Protection */}
          <div className="bg-card border border-border/50 rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold mb-8">Data Protection Principles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">What We Collect</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Account information (name, email)</li>
                  <li>• Task and workflow data</li>
                  <li>• Integration connection data</li>
                  <li>• Usage analytics (anonymized)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">How We Protect It</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• AES-256 encryption at rest</li>
                  <li>• TLS 1.3 encryption in transit</li>
                  <li>• Zero-knowledge architecture</li>
                  <li>• Regular security audits</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Compliance & Certifications */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-card border border-border/50 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Compliance & Certifications</h2>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                    <div>
                      <h3 className="font-semibold">{cert.name}</h3>
                      <p className="text-sm text-muted-foreground">{cert.description}</p>
                    </div>
                    <Badge 
                      variant={cert.status === "Certified" || cert.status === "Compliant" ? "default" : "secondary"}
                    >
                      {cert.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border/50 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Security Practices</h2>
              <div className="space-y-4">
                <div className="p-4 bg-muted rounded-lg">
                  <h3 className="font-semibold mb-2">Regular Audits</h3>
                  <p className="text-sm text-muted-foreground">
                    Third-party security assessments and penetration testing every quarter.
                  </p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <h3 className="font-semibold mb-2">Employee Training</h3>
                  <p className="text-sm text-muted-foreground">
                    Mandatory security awareness training for all team members.
                  </p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <h3 className="font-semibold mb-2">Incident Response</h3>
                  <p className="text-sm text-muted-foreground">
                    24/7 monitoring with rapid incident response and user notification.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Security Resources */}
          <div className="bg-card border border-border/50 rounded-2xl p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6">Security Resources</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <FileCheck className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Security Whitepaper</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Detailed technical overview of our security architecture
                </p>
                <button className="text-primary hover:text-primary/80 text-sm font-medium">
                  Download PDF
                </button>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Privacy Policy</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Complete details on how we handle your personal data
                </p>
                <button className="text-primary hover:text-primary/80 text-sm font-medium">
                  Read Policy
                </button>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Report Vulnerability</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Help us maintain security by reporting issues responsibly
                </p>
                <button className="text-primary hover:text-primary/80 text-sm font-medium">
                  Security@gallball.com
                </button>
              </div>
            </div>
          </div>

          {/* Contact Security Team */}
          <div className="text-center">
            <div className="bg-card border border-border/50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">Questions About Security?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our security team is available to answer questions about our practices, compliance, or to discuss your specific security requirements.
              </p>
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-smooth">
                Contact Security Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;