import { Mail, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contacto" className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">PE</span>
              </div>
              <span className="font-bold text-lg">Proyecto Educativo</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Transformando el futuro de la juventud mexicana a través de la educación y el desarrollo de habilidades.
            </p>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Contacto</h3>
            <div className="space-y-3">
              <a
                href="mailto:contacto@proyecto.org"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm">contacto@proyecto.org</span>
              </a>
              <a
                href="https://linkedin.com/proyecto"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Mission Section */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Nuestra Misión</h3>
            <p className="text-muted-foreground text-sm">
              Reducir el rezago educativo y mejorar la empleabilidad de jóvenes mediante capacitación, alianzas y tecnología.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Proyecto Educativo. Todos los derechos reservados.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Hecho con <Heart className="w-4 h-4 text-destructive fill-destructive" /> para la juventud de México
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
