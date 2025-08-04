import { Link } from "react-router-dom";
import { sections } from "@/data/articles";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted mt-16 border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="text-xl font-bold text-foreground">champinon.com</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-md">
              Un espacio para compartir reflexiones, análisis y aprendizajes sobre actualidad, 
              economía, filosofía y desarrollo personal.
            </p>
          </div>

          {/* Sections */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Secciones</h4>
            <nav className="space-y-2">
              <Link to="/actualidad" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                {sections.actualidad.name}
              </Link>
              <Link to="/economia" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                {sections.economia.name}
              </Link>
              <Link to="/filosofia" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                {sections.filosofia.name}
              </Link>
              <Link to="/learning" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                {sections.learning.name}
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contacto</h4>
            <div className="space-y-2">
              <Link to="/about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Sobre nosotros
              </Link>
              <p className="text-sm text-muted-foreground">
                champinon.com
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} champinon.com. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;