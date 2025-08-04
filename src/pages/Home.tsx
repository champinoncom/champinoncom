import { articles } from "@/data/articles";
import ArticleCard from "@/components/ArticleCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen } from "lucide-react";

const Home = () => {
  const featuredArticles = articles.filter(article => article.featured);
  const latestArticles = articles
    .filter(article => !article.featured)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-section py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Bienvenido a{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                champinon.com
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Un espacio para reflexionar sobre actualidad, economía, filosofía y compartir 
              lecciones de aprendizaje personal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link to="/actualidad">
                  Explorar artículos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                <Link to="/about">
                  Sobre nosotros
                  <BookOpen className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Artículos Destacados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} featured />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Latest Articles */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-foreground">
              Últimos Artículos
            </h2>
            <Button variant="outline" asChild>
              <Link to="/actualidad">
                Ver todos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter/CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-card border border-article-border rounded-xl p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              ¿Te interesa estar al día?
            </h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Explora nuestras diferentes secciones y descubre contenido que te inspire y te haga reflexionar.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="outline" size="lg" asChild>
                <Link to="/actualidad">Actualidad</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/economia">Economía</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/filosofia">Filosofía</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/learning">Learning</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;