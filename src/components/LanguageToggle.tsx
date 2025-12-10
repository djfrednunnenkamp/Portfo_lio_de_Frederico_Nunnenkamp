import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState } from "react";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  return (
    <Button
      variant="secondary"
      size="sm"
      onClick={toggleLanguage}
      className={`fixed top-4 right-4 z-50 shadow-large transition-all duration-300 ${isScrolled ? 'scale-100 opacity-100' : 'scale-90 opacity-90'
        }`}
      aria-label="Toggle language"
    >
      {language === 'pt' ? 'EN' : 'PT'}
    </Button>
  );
};

export default LanguageToggle;
