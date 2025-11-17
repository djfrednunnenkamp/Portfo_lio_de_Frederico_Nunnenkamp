import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Music, Sailboat } from "lucide-react";

const hobbies = [
  {
    icon: Music,
    title: "DJ",
    description: "Experiência tocando em festas, desenvolvendo repertório e leitura de pista. Estudo sob orientação do DJ Lê Araujo.",
    gradient: "from-accent/20 to-accent/5",
  },
  {
    icon: Sailboat,
    title: "Vela - Classe Soling",
    description: "Integro equipe de HP, participação em regatas nacionais e internacionais incluindo Campeonato Brasileiro e Mundial 2025 em Porto Alegre. Habilitações: Arrais Amador e Motonauta.",
    gradient: "from-primary/20 to-primary/5",
  },
];

const HobbiesSection = () => {
  return (
    <section className="py-20 bg-background" id="hobbies">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Hobbies & Interesses</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Além da tecnologia, paixões que desenvolvem disciplina e criatividade
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
