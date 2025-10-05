import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Time and Material (T&M)",
      subtitle: "Adaptive Billing",
      description: "Flexible, hourly-based engagement ideal for evolving or exploratory projects.",
      features: [
        "Pay-as-you-go model",
        "Ideal for iterative development",
        "Weekly time reports and tracking",
        "E-mail and Slack support",
        "Optional consultations on demand",
      ],
      bgColor: "bg-indigo-50",
    },
    {
      name: "Fixed Price",
      subtitle: "Milestone Plan",
      description: "Outcome-driven projects with defined scope, budget, and delivery timelines.",
      features: [
        "Clear scope, timeline, and milestones",
        "Predictable budget with no surprises",
        "Ideal for well-defined automation goals",
        "Dedicated project manager",
        "Post-launch support included",
      ],
      bgColor: "bg-rose-50",
    },
  ];

  return (
    <section id="pricing" className="py-20 px-6 bg-secondary">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">Pricing</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4 text-foreground">
            Flexible plans for growth
          </h2>
          <p className="text-xl text-muted-foreground">
            Transparent pricing designed to fit your requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className={`p-8 border-0 rounded-3xl ${plan.bgColor}`}>
              <div className="mb-6">
                <p className="text-sm text-muted-foreground mb-2">{plan.name}</p>
                <h3 className="text-2xl font-bold text-foreground mb-3">{plan.subtitle}</h3>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => window.open('https://cal.com/alient-consultants/intro', '_blank')}
              >
                Schedule a call
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
