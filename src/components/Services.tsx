import { Card } from "@/components/ui/card";
import { MessageSquare, FileText, Users, BarChart3 } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: MessageSquare,
      title: "Business Chatbot",
      description: "Enhance customer interactions by automating responses with intelligent chatbots, providing seamless service.",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: FileText,
      title: "Content Creation",
      description: "Effortlessly generate high-quality, engaging content tailored to your audience using AI-powered tools.",
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      icon: Users,
      title: "Lead Generation",
      description: "Strengthen your sales pipeline by identifying, targeting, and attracting high-quality prospects with precision.",
      bgColor: "bg-green-50",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: BarChart3,
      title: "Data Insights",
      description: "Extract actionable insights from complex data sets to drive informed decisions and accelerate business growth.",
      bgColor: "bg-amber-50",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
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
            <Card key={index} className={`p-8 border-0 hover:shadow-lg transition-all ${service.bgColor}`}>
              <div className={`${service.iconBg} w-14 h-14 rounded-2xl flex items-center justify-center mb-6`}>
                <service.icon className={`w-7 h-7 ${service.iconColor}`} />
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
