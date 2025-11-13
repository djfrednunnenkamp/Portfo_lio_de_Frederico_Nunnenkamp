import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContent = () => {
    const element = document.getElementById("expertise");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-cyan-500/90" />
      </div>
      
      <div className="container relative z-10 px-4 py-20 mx-auto text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
          Frederico Nunnenkamp
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 max-w-3xl mx-auto">
          Maker & Engenheiro
        </p>
        <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
          Transformando ideias em realidade através de impressão 3D, automação, eletrônica e desenvolvimento
        </p>
        <Button 
          size="lg"
          variant="secondary"
          onClick={scrollToContent}
          className="group shadow-large hover:shadow-medium transition-all"
        >
          Conheça meu trabalho
          <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
