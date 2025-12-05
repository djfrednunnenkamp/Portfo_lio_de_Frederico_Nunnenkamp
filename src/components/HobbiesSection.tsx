import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Music, Sailboat, Bot } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

const HobbiesSection = () => {
  const { language } = useLanguage();
  const t = translations[language].hobbies;

  const hobbies = [
    {
      icon: Music,
      title: t.dj.title,
      description: t.dj.description,
      gradient: "from-accent/20 to-accent/5",
    },
    {
      icon: Bot,
      title: t.sailing.title,
      description: t.sailing.description,
      gradient: "from-primary/20 to-primary/5",
    },
    {
      icon: Sailboat,
      title: t.robotics.title,
      description: t.robotics.description,
      gradient: "from-primary/30 to-primary/10",
    },
  ];
  return (
    <section className="py-12 bg-background" id="hobbies">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {hobbies.map((hobby, index) => (
            <Card
              key={index}
              className={`bg-gradient-to-br ${hobby.gradient} border-border/50 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-card flex items-center justify-center">
                    <hobby.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{hobby.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">{hobby.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HobbiesSection;
