import { Card } from "@/components/ui/card";
import { MessageSquare, FileText, Users, BarChart3 } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: MessageSquare,
      title: "Business Chatbot",
      description: "Enhance customer interactions by automating responses with intelligent chatbots, providing seamless service.",
    },
    {
      icon: FileText,
      title: "Content Creation",
      description: "Effortlessly generate high-quality, engaging content tailored to your audience using AI-powered tools.",
    },
    {
      icon: Users,
      title: "Lead Generation",
      description: "Strengthen your sales pipeline by identifying, targeting, and attracting high-quality prospects with precision.",
    },
    {
      icon: BarChart3,
      title: "Data Insights",
      description: "Extract actionable insights from complex data sets to drive informed decisions and accelerate business growth.",
    },
  ];

  return (
    <section id="services" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">Services</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4 text-foreground">
            Innovative services for growth
          </h2>
          <p className="text-xl text-muted-foreground">
            Tailored solutions to streamline, innovate, and grow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="p-8 border border-border hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
