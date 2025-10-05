import { DollarSign, TrendingUp, Zap } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Cost reduction",
      description: "Optimize business processes and streamline operations to significantly minimize costs and maximize overall efficiency.",
    },
    {
      icon: TrendingUp,
      title: "Improved outcomes",
      description: "Leverage powerful data-driven insights and innovative strategies to enhance business performance and achieve superior outcomes.",
    },
    {
      icon: Zap,
      title: "Increased productivity",
      description: "Enhance group performance and output by automating redundant tasks, refining processes, and speeding up business functions.",
    },
  ];

  return (
    <section id="benefits" className="py-20 px-6 bg-secondary">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">Benefits</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4 text-foreground">
            Maximize efficiency and impact
          </h2>
          <p className="text-xl text-muted-foreground">
            Discover the key benefits of partnering with us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
