import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <WhoWeAre />
      <Services />
      <Benefits />
      <Process />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
