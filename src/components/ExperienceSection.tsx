import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Wrench, Box } from "lucide-react";

const experiences = [
  {
    icon: Box,
    title: "Makerspace",
    role: "Gestão e Produções",
    description: "Gestão de compras, orçamentos e produções sob demanda. Experiência em coordenação de projetos e recursos.",
  },
  {
    icon: Wrench,
    title: "Oficina Mecânica",
    role: "Estágio Prático - 2 semanas",
    description: "Experiência em manutenção de veículos, desenvolvendo disciplina e cuidado com ferramentas e procedimentos.",
  },
  {
    icon: Briefcase,
    title: "Empresa de Ar-Condicionado",
    role: "Estágio Prático - 1 mês",
    description: "Aprendizado em montagem, desmontagem e limpeza de aparelhos, com foco em qualidade e segurança.",
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-20 bg-muted/30" id="experiencias">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experiências</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trajetória prática em robótica, manutenção e gestão de projetos
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="bg-card shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-in"
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
