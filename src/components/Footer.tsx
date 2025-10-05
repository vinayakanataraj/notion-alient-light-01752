import logo from "@/assets/alient-logo.png";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-1.5">
            <img src={logo} alt="Alient Logo" className="w-8 h-8" />
            <span className="font-semibold text-xl text-foreground">Alient</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm">
              © 2025 Alient. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
