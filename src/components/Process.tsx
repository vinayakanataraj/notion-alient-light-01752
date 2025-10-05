import { Search, Code, Rocket } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: Search,
      title: "Discovery & Analysis",
      description: "We dive deep into your needs, exploring ideas and defining strategies for long-term success.",
    },
    {
      icon: Code,
      title: "Development & Test",
      description: "We craft tailored solutions for your goals and rigorously test them for top-notch reliability.",
    },
    {
      icon: Rocket,
      title: "Launch & Maintain",
      description: "We deploy your solution seamlessly and ensure its continued performance with ongoing care.",
    },
  ];

  return (
    <section id="process" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">Process</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4 text-foreground">
            Your path to excellence
          </h2>
          <p className="text-xl text-muted-foreground">
            A simple, effective approach to deliver excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary text-primary-foreground w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-border"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
