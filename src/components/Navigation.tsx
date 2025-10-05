import { Button } from "@/components/ui/button";
import logo from "@/assets/alient-logo.png";

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <img src={logo} alt="Alient Logo" className="w-8 h-8" />
            <span className="font-semibold text-xl text-foreground">Alient</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('process')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Process
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('benefits')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Benefits
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </button>
          </div>

          <Button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() => window.open('https://cal.com/alient-consultants/intro', '_blank')}
          >
            Get in touch
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
