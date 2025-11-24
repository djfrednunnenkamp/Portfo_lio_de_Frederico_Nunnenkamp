import ProjectCard from "@/components/ProjectCard";
import { Home, Cpu, Zap } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      icon: Home,
      title: "Automação Residencial Completa",
      description: "Sistema integrado de automação com Home Assistant, controlando iluminação, climatização, segurança e dispositivos customizados.",
      technologies: ["Home Assistant", "ESP32", "MQTT", "ESPHome", "Raspberry Pi"],
    },
    {
      icon: Cpu,
      title: "Dispositivos IoT Customizados",
      description: "Desenvolvimento de sensores e atuadores próprios usando ESP32 e MicroPython, integrados via MQTT.",
      technologies: ["ESP32", "MicroPython", "MQTT", "PCB Design", "Fusion 360"],
    },
    {
      icon: Zap,
      title: "Dashboard de Monitoramento",
      description: "Interface web para visualização de dados de sensores e controle de automações em tempo real.",
      technologies: ["Python", "Flask", "Docker", "Nginx", "MariaDB"],
    },
  ];

  return (
    <section className="py-20 bg-muted/30" id="projects">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projetos Realizados</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Soluções práticas desenvolvidas combinando hardware, software e automação
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              delay={`${index * 0.1}s`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
