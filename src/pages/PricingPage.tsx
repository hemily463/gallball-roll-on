import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Check, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for trying out Gallball's automation capabilities",
    features: [
      "5 automated tasks per month",
      "Basic integrations",
      "Email support",
      "Task history (7 days)",
      "Standard AI models"
    ],
    limitations: [
      "Limited to simple workflows",
      "No custom integrations",
      "Basic analytics"
    ],
    cta: "Get Started Free",
    popular: false
  },
  {
    name: "Pro",
    price: "$29",
    period: "per month",
    description: "For power users who want to automate complex workflows",
    features: [
      "Unlimited automated tasks",
      "Advanced integrations",
      "Priority support",
      "Full task history",
      "Advanced AI models",
      "Custom workflows",
      "Team collaboration",
      "Advanced analytics",
      "API access"
    ],
    cta: "Start Pro Trial",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "For organizations that need enterprise-grade automation",
    features: [
      "Everything in Pro",
      "Custom integrations",
      "Dedicated support",
      "Advanced security",
      "Custom AI training",
      "SLA guarantees",
      "Multi-tenant architecture",
      "Advanced compliance",
      "Custom deployment options"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

const PricingPage = () => {
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
              <span className="flow-text">Simple,</span> Transparent Pricing
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the plan that fits your automation needs. Start free and scale as you grow.
            </p>
          </header>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <div key={index} className={`relative bg-card border rounded-2xl p-8 ${plan.popular ? 'border-primary shadow-accent' : 'border-border/50'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">
                      <Sparkles className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {plan.description}
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className="w-full" 
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-card border border-border/50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h3 className="font-semibold mb-2">Can I change plans anytime?</h3>
                  <p className="text-muted-foreground text-sm">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">What payment methods do you accept?</h3>
                  <p className="text-muted-foreground text-sm">We accept all major credit cards, PayPal, and bank transfers for enterprise customers.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Is there a free trial for Pro?</h3>
                  <p className="text-muted-foreground text-sm">Yes! All Pro features are available during your 14-day free trial. No credit card required.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">What happens if I exceed my task limit?</h3>
                  <p className="text-muted-foreground text-sm">Free plan users will be notified and can upgrade. Pro users have unlimited tasks.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;