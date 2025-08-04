import { useParams } from "react-router-dom";
import { articles, sections } from "@/data/articles";
import ArticleCard from "@/components/ArticleCard";
import { Badge } from "@/components/ui/badge";

const SectionPage = () => {
  const { section } = useParams<{ section: string }>();
  
  if (!section || !(section in sections)) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Sección no encontrada</h1>
          <p className="text-muted-foreground">La sección que buscas no existe.</p>
        </div>
      </div>
    );
  }

  const sectionKey = section as keyof typeof sections;
  const sectionInfo = sections[sectionKey];
  const sectionArticles = articles
    .filter(article => article.section === sectionKey)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="min-h-screen">
      {/* Section Header */}
      <section className="bg-gradient-section py-16">
        <div className="container mx-auto px-4 text-center">
          <Badge 
            variant="secondary" 
            className="mb-4 text-sm font-medium px-4 py-2"
            style={{ backgroundColor: `${sectionInfo.color}20`, color: sectionInfo.color }}
          >
            Sección
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {sectionInfo.name}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {sectionInfo.description}
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {sectionArticles.length > 0 ? (
            <>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-foreground">
                  {sectionArticles.length} {sectionArticles.length === 1 ? 'artículo' : 'artículos'}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sectionArticles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📝</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Próximamente contenido
              </h3>
              <p className="text-muted-foreground">
                Estamos trabajando en nuevos artículos para esta sección.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default SectionPage;