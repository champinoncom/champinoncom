import { useParams, Link, useNavigate } from "react-router-dom";
import { articles, sections } from "@/data/articles";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Tag, Calendar } from "lucide-react";
import ArticleCard from "@/components/ArticleCard";

const ArticlePage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const article = articles.find(a => a.id === id);
  
  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Artículo no encontrado</h1>
          <p className="text-muted-foreground mb-6">El artículo que buscas no existe.</p>
          <Button onClick={() => navigate("/")}>
            Volver al inicio
          </Button>
        </div>
      </div>
    );
  }

  const sectionInfo = sections[article.section];
  const relatedArticles = articles
    .filter(a => a.id !== article.id && (a.section === article.section || a.tags.some(tag => article.tags.includes(tag))))
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Article Header */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            className="mb-6" 
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver
          </Button>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6 flex-wrap">
              <Badge 
                variant="secondary"
                style={{ backgroundColor: `${sectionInfo.color}20`, color: sectionInfo.color }}
              >
                {sectionInfo.name}
              </Badge>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(article.date).toLocaleDateString('es-ES', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </div>
                
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {article.readTime} min de lectura
                </div>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              {article.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {article.excerpt}
            </p>
            
            <div className="flex items-center gap-2 mb-8">
              <Tag className="w-4 h-4 text-muted-foreground" />
              {article.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div 
              className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-a:text-primary hover:prose-a:text-primary/80"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-muted/30 border-t border-border">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
              Artículos relacionados
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {relatedArticles.map((relatedArticle) => (
                <ArticleCard key={relatedArticle.id} article={relatedArticle} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Section CTA */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              ¿Te gustó este artículo?
            </h3>
            <p className="text-muted-foreground mb-6">
              Explora más contenido en la sección de {sectionInfo.name.toLowerCase()}.
            </p>
            <Button asChild>
              <Link to={`/${article.section}`}>
                Ver más en {sectionInfo.name}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticlePage;