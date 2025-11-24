import { Mail, Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language].footer;
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex items-center gap-6">
            <a 
              href="https://www.instagram.com/djfrednunnenkamp/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a 
              href="mailto:frednunnenkamp@gmail.com.br" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Frederico Nunnenkamp. {t.rights}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
