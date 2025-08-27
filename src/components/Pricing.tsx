import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started with basic task automation",
    features: [
      "5 tasks per month",
      "Basic automation",
      "Email support",
      "Standard processing speed"
    ],
    cta: "Get Started Free",
    variant: "outline" as const
  },
  {
    name: "Pro",
    price: "$29",
    period: "per month",
    description: "Unlimited automation for professionals and growing businesses",
    features: [
      "Unlimited tasks",
      "Advanced AI capabilities",
      "Priority support",
      "Fast processing",
      "Custom integrations",
      "Team collaboration"
    ],
    cta: "Start Pro Trial",
    variant: "hero" as const,
    popular: true
  }
];

const Pricing = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Simple, <span className="flow-text">Transparent</span> Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start free and scale as you grow. No hidden fees, no complex tiers - 
            just straightforward pricing that works for everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-card rounded-3xl p-8 shadow-electric border transition-smooth hover:scale-105 ${
                plan.popular 
                  ? 'border-primary/50 shadow-accent' 
                  : 'border-border/50 hover:border-primary/30'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-hero text-white text-sm font-medium">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="space-y-8">
                {/* Header */}
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-5xl font-bold flow-text">{plan.price}</span>
                      <span className="text-muted-foreground">/{plan.period}</span>
                    </div>
                    <p className="text-muted-foreground">{plan.description}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="pt-6">
                  <Button 
                    variant={plan.variant} 
                    size="lg" 
                    className="w-full"
                  >
                    {plan.cta}
                  </Button>
                </div>
              </div>

              {/* Background gradient for popular plan */}
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl -z-10"></div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-block p-1 rounded-2xl bg-gradient-hero">
            <div className="bg-background rounded-xl px-8 py-4">
              <p className="text-lg">
                <span className="font-semibold">Need enterprise solutions?</span> 
                <span className="text-muted-foreground ml-2">Contact us for custom pricing</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;