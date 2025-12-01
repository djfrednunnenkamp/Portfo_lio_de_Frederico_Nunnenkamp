import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import profilePhoto from "@/assets/profile-photo.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

const Hero = () => {
  const { language, setLanguage } = useLanguage();
  const t = translations[language].hero;
  
  const scrollToContent = () => {
    const element = document.getElementById("expertise");
    element?.scrollIntoView({ behavior: "smooth" });
  };
  

  const calculateAge = () => {
    const birthDate = new Date(2007, 8, 18); // Month is 0-indexed, so 8 = September
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age;
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
      
      <div className="container relative z-10 px-4 py-20 mx-auto animate-fade-in">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 max-w-6xl mx-auto">
          <div className="flex-shrink-0">
            <img 
              src={profilePhoto} 
              alt="Frederico Nunnenkamp"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-primary-foreground/20 shadow-large"
            />
          </div>
          
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
              {t.title}
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-2">
              {t.subtitle}
            </p>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-4">
              {calculateAge()} {t.years}
            </p>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl">
              {t.description}
            </p>
            <Button 
              size="lg"
              variant="secondary"
              onClick={scrollToContent}
              className="group shadow-large hover:shadow-medium transition-all"
            >
              {t.cta}
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
