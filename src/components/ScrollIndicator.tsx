import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const clientHeight = window.innerHeight;
      
      // Hide when near the bottom (within 100px)
      const nearBottom = scrollTop + clientHeight >= scrollHeight - 100;
      setIsVisible(!nearBottom);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      onClick={() => window.scrollBy({ top: window.innerHeight * 0.8, behavior: "smooth" })}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 p-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 hover:bg-primary/30 transition-all cursor-pointer animate-bounce"
      aria-label="Scroll down"
    >
      <ChevronDown className="h-6 w-6 text-primary" />
    </button>
  );
};

export default ScrollIndicator;
