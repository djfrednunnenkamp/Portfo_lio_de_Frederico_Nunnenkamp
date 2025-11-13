import Hero from "@/components/Hero";
import ExpertiseCard from "@/components/ExpertiseCard";
import ExperienceSection from "@/components/ExperienceSection";
import HobbiesSection from "@/components/HobbiesSection";
import Footer from "@/components/Footer";
import { Printer, Cpu, Home, Globe, Code, Lightbulb } from "lucide-react";

const Index = () => {
  const expertiseAreas = [
    {
      icon: Printer,
      title: "Impressão 3D & CAD",
      description: "Modelagem e manufatura digital",
      items: [
        "Fusion 360 - modelagem sólida avançada e montagens",
        "Impressoras Bambu Lab (P1S, A1, X1 Carbon)",
        "OrcaSlicer - otimização de qualidade e custo",
        "Design de produtos e soluções Gridfinity",
      ],
    },
    {
      icon: Cpu,
      title: "Eletrônica & Embarcados",
      description: "IoT e sistemas integrados",
      items: [
        "ESP32 e Raspberry Pi Pico W (MicroPython/C++)",
        "MQTT - broker Mosquitto, QoS, LWT e descoberta",
        "Sensores e barramentos (GPIO, I²C, SPI)",
        "PCB design e reguladores de tensão",
      ],
    },
    {
      icon: Home,
      title: "Home Assistant",
      description: "Automação residencial avançada",
      items: [
        "Servidor dedicado Ubuntu com integrações",
        "ESPHome e MQTT para dispositivos próprios",
        "Dashboards, automações e templates customizados",
        "MariaDB e monitoramento de sistemas",
      ],
    },
    {
      icon: Globe,
      title: "Infraestrutura & Web",
      description: "Deploy e serviços em nuvem",
      items: [
        "Nginx - reverse proxy e TLS com subdomínios",
        "Docker e conteinerização de serviços",
        "Linux/Ubuntu Server - logs e supervisão",
        "Diagnósticos de rede (curl, DNS, headers)",
      ],
    },
    {
      icon: Code,
      title: "Desenvolvimento",
      description: "Python e frameworks web",
      items: [
        "Python - scripts, JSON, automações",
        "Flask - estrutura de projeto e deploy com Gunicorn",
        "Django - estrutura, migrações e administração",
        "SASS para estilização modular",
      ],
    },
    {
      icon: Lightbulb,
      title: "Qualidades Pessoais",
      description: "Soft skills e metodologias",
      items: [
        "Proatividade e pensamento sistêmico",
        "Documentação e reprodutibilidade",
        "Colaboração técnica com não técnicos",
        "Crescimento contínuo e aprendizado prático",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Hero />
      
      <section className="py-20 bg-background" id="expertise">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Áreas de Expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Combinando hardware, software e automação para criar soluções completas
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
      <HobbiesSection />
      <Footer />
    </div>
  );
};

export default Index;
