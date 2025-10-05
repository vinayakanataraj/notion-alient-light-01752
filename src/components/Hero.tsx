import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center space-y-6">
          <div className="inline-block">
            <span className="text-sm text-muted-foreground bg-secondary px-4 py-2 rounded-full">
              Alient - AI Automation Partner
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
            Transforming workflows with AI powered automation
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the future of business with intelligent, scalable automation solutions tailored to your needs
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => scrollToSection('services')}
            >
              Our Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('pricing')}
            >
              See Plans
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
