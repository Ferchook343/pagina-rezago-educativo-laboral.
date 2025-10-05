import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">PE</span>
            </div>
            <span className="font-bold text-lg hidden sm:inline">Proyecto Educativo</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection("problema")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Problema
            </button>
            <button
              onClick={() => scrollToSection("objetivos")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Objetivos
            </button>
            <button
              onClick={() => scrollToSection("fases")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Fases
            </button>
            <button
              onClick={() => scrollToSection("impacto")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Impacto
            </button>
            <Button onClick={() => scrollToSection("contacto")} size="sm">
              Contacto
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border space-y-3">
            <button
              onClick={() => scrollToSection("problema")}
              className="block w-full text-left px-4 py-2 hover:bg-secondary rounded-lg transition-colors"
            >
              Problema
            </button>
            <button
              onClick={() => scrollToSection("objetivos")}
              className="block w-full text-left px-4 py-2 hover:bg-secondary rounded-lg transition-colors"
            >
              Objetivos
            </button>
            <button
              onClick={() => scrollToSection("fases")}
              className="block w-full text-left px-4 py-2 hover:bg-secondary rounded-lg transition-colors"
            >
              Fases
            </button>
            <button
              onClick={() => scrollToSection("impacto")}
              className="block w-full text-left px-4 py-2 hover:bg-secondary rounded-lg transition-colors"
            >
              Impacto
            </button>
            <Button onClick={() => scrollToSection("contacto")} className="w-full">
              Contacto
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
