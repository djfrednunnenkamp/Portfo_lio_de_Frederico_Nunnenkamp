import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AirVent, Wrench, Box } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

const ExperienceSection = () => {
  const { language } = useLanguage();
  const t = translations[language].experience;
  
  const experiences = [
    {
      icon: Box,
      title: t.makerspace.title,
      role: t.makerspace.role,
      description: t.makerspace.description,
    },
    {
      icon: Wrench,
      title: t.mechanic.title,
      role: t.mechanic.role,
      description: t.mechanic.description,
    },
    {
      icon: AirVent,
      title: t.airConditioning.title,
      role: t.airConditioning.role,
      description: t.airConditioning.description,
    },
  ];
  return (
    <section className="py-12 bg-muted/30" id="experiencias">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="bg-card shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <exp.icon className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-lg">{exp.title}</CardTitle>
                <CardDescription className="text-sm font-medium text-primary">
                  {exp.role}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
