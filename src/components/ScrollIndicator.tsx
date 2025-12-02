import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const clientHeight = window.innerHeight;
      
      // Hide when at top (Hero section) or near the bottom
      const atTop = scrollTop < clientHeight * 0.5;
      const nearBottom = scrollTop + clientHeight >= scrollHeight - 100;
      setIsVisible(!atTop && !nearBottom);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      onClick={() => window.scrollBy({ top: window.innerHeight * 0.6, behavior: "smooth" })}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 p-1.5 rounded-full bg-muted/50 backdrop-blur-sm hover:bg-muted/70 transition-all cursor-pointer opacity-60 hover:opacity-100"
      aria-label="Scroll down"
    >
      <ChevronDown className="h-4 w-4 text-muted-foreground animate-bounce" />
    </button>
  );
};

export default ScrollIndicator;
