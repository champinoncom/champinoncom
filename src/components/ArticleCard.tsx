import { Link } from "react-router-dom";
import { Clock, Tag } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Article, sections } from "@/data/articles";

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

const ArticleCard = ({ article, featured = false }: ArticleCardProps) => {
  const sectionInfo = sections[article.section];
  
  return (
    <Card className={`group hover:shadow-lg transition-all duration-300 bg-gradient-card border-article-border ${
      featured ? "md:col-span-2 lg:col-span-3" : ""
    }`}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between mb-2">
          <Badge 
            variant="secondary" 
            className="text-xs font-medium"
            style={{ backgroundColor: `${sectionInfo.color}20`, color: sectionInfo.color }}
          >
            {sectionInfo.name}
          </Badge>
          <div className="flex items-center text-xs text-muted-foreground">
            <Clock className="w-3 h-3 mr-1" />
            {article.readTime} min
          </div>
        </div>
        
        <Link to={`/article/${article.id}`}>
          <h3 className={`font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 ${
            featured ? "text-2xl md:text-3xl" : "text-lg"
          }`}>
            {article.title}
          </h3>
        </Link>
        
        <p className={`text-muted-foreground line-clamp-3 ${
          featured ? "text-base" : "text-sm"
        }`}>
          {article.excerpt}
        </p>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 flex-wrap">
            <Tag className="w-3 h-3 text-muted-foreground" />
            {article.tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          
          <span className="text-xs text-muted-foreground">
            {new Date(article.date).toLocaleDateString('es-ES', {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            })}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;