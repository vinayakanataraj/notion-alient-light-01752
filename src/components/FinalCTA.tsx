import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 px-6 bg-secondary">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
          Let's talk about your next big move
        </h2>
        <p className="text-xl text-muted-foreground mb-8">
          Hop on a call with us to see how our services can accelerate your growth.
        </p>
        <Button 
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground"
          onClick={() => window.open('https://cal.com/alient-consultants/intro', '_blank')}
        >
          Schedule a quick call
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export default FinalCTA;
