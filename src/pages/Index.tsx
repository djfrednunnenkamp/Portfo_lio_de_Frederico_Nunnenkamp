import Hero from "@/components/Hero";
import LanguageToggle from "@/components/LanguageToggle";
import ScrollIndicator from "@/components/ScrollIndicator";
import ExpertiseCard from "@/components/ExpertiseCard";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import HobbiesSection from "@/components/HobbiesSection";
import Footer from "@/components/Footer";
import { Printer, Cpu, Home, Globe, Code, Lightbulb } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

const Index = () => {
  const { language } = useLanguage();
  const t = translations[language].expertise;
  
  const expertiseAreas = [
    {
      icon: Printer,
      title: t.printing.title,
      description: t.printing.description,
      items: t.printing.items,
    },
    {
      icon: Cpu,
      title: t.electronics.title,
      description: t.electronics.description,
      items: t.electronics.items,
    },
    {
      icon: Home,
      title: t.homeAssistant.title,
      description: t.homeAssistant.description,
      items: t.homeAssistant.items,
    },
    {
      icon: Globe,
      title: t.infrastructure.title,
      description: t.infrastructure.description,
      items: t.infrastructure.items,
    },
    {
      icon: Code,
      title: t.development.title,
      description: t.development.description,
      items: t.development.items,
    },
    {
      icon: Lightbulb,
      title: t.personal.title,
      description: t.personal.description,
      items: t.personal.items,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <LanguageToggle />
      <ScrollIndicator />
      <Hero />
      
      <section className="py-12 bg-background" id="expertise">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.title}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseAreas.map((area, index) => (
              <ExpertiseCard
                key={index}
                {...area}
                delay={`${index * 0.1}s`}
              />
            ))}
          </div>
        </div>
      </section>

      <ExperienceSection />
      <ProjectsSection />
      <HobbiesSection />
      <Footer />
    </div>
  );
};

export default Index;
