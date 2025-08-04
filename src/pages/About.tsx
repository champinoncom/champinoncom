import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Lightbulb, TrendingUp, Heart } from "lucide-react";

const About = () => {
  const principles = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Conocimiento",
      description: "Compartimos información valiosa y análisis profundos sobre temas que importan."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Reflexión",
      description: "Promovemos el pensamiento crítico y la reflexión sobre el mundo que nos rodea."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Crecimiento",
      description: "Creemos en el aprendizaje continuo y el desarrollo personal constante."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Pasión",
      description: "Todo lo que hacemos está impulsado por la pasión por el conocimiento y la escritura."
    }
  ];

  const sections = [
    {
      title: "Actualidad",
      description: "Analizamos las noticias y tendencias más relevantes del momento actual.",
      color: "hsl(25 95% 53%)"
    },
    {
      title: "Economía",
      description: "Exploramos el mundo financiero y económico con análisis accesibles.",
      color: "hsl(180 100% 40%)"
    },
    {
      title: "Filosofía",
      description: "Reflexionamos sobre las grandes preguntas de la vida y el pensamiento.",
      color: "hsl(270 100% 50%)"
    },
    {
      title: "My Learning Lessons",
      description: "Compartimos experiencias personales y lecciones aprendidas en el camino.",
      color: "hsl(120 100% 40%)"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-section py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Sobre{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              champinon.com
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Un espacio digital dedicado a la reflexión, el análisis y el intercambio de ideas 
            sobre los temas que moldean nuestro mundo y nuestras vidas.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">Nuestra Misión</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              En champinon.com creemos que el conocimiento debe ser accesible y que las ideas 
              merecen ser compartidas. Nuestro objetivo es crear un espacio donde la curiosidad 
              intelectual se encuentre con la claridad en la comunicación, ofreciendo contenido 
              que inspire, eduque y genere reflexión.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Cada artículo que publicamos busca no solo informar, sino también provocar 
              pensamiento crítico y fomentar el diálogo constructivo sobre los temas que 
              nos interesan y nos afectan a todos.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Nuestros Principios
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => (
              <Card key={index} className="bg-gradient-card border-article-border text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-primary">
                    {principle.icon}
                  </div>
                  <CardTitle className="text-lg">{principle.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {principle.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Nuestras Secciones
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {sections.map((section, index) => (
              <Card key={index} className="bg-gradient-card border-article-border">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{section.title}</CardTitle>
                    <Badge 
                      variant="secondary"
                      style={{ backgroundColor: `${section.color}20`, color: section.color }}
                    >
                      Sección
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {section.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Una Plataforma en Constante Evolución
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              champinon.com es más que un blog; es un proyecto en constante crecimiento. 
              Diseñado para ser fácilmente mantenible y actualizable, nos permite enfocarnos 
              en lo que realmente importa: crear contenido de calidad.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Cada artículo nuevo es una oportunidad de explorar ideas, compartir perspectivas 
              y contribuir al diálogo público sobre los temas que nos apasionan.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-card border border-article-border rounded-xl p-8 md:p-12 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Gracias por ser parte de nuestra comunidad
            </h3>
            <p className="text-muted-foreground mb-6">
              Tu interés en nuestro contenido es lo que nos motiva a seguir escribiendo 
              y compartiendo ideas. Esperamos que encuentres valor en cada artículo y 
              que nuestras reflexiones te inspiren a seguir aprendiendo.
            </p>
            <p className="text-sm text-muted-foreground">
              champinon.com - Donde las ideas encuentran su voz
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;