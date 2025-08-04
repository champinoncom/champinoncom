export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  section: 'actualidad' | 'economia' | 'filosofia' | 'learning' | 'about';
  date: string;
  readTime: number;
  tags: string[];
  featured?: boolean;
}

export const articles: Article[] = [
  {
    id: "1",
    title: "El futuro de la tecnología en 2024",
    excerpt: "Una reflexión sobre las tendencias tecnológicas que están moldeando nuestro futuro y cómo nos afectarán en los próximos años.",
    content: `
      <p>En este artículo exploramos las tendencias tecnológicas más importantes que están definiendo el 2024...</p>
      
      <h2>Inteligencia Artificial y Automatización</h2>
      <p>La IA continúa revolucionando sectores enteros, desde la medicina hasta la educación...</p>
      
      <h2>Sostenibilidad Digital</h2>
      <p>La tecnología verde se está convirtiendo en una prioridad para empresas y gobiernos...</p>
      
      <h2>Conclusiones</h2>
      <p>El futuro tecnológico promete ser emocionante pero también desafiante...</p>
    `,
    section: "actualidad",
    date: "2024-01-15",
    readTime: 5,
    tags: ["tecnología", "futuro", "IA"],
    featured: true
  },
  {
    id: "2",
    title: "Análisis del mercado financiero actual",
    excerpt: "Un análisis profundo de las tendencias económicas actuales y sus implicaciones para los inversores.",
    content: `
      <p>El mercado financiero actual presenta varios desafíos y oportunidades...</p>
      
      <h2>Tendencias Macroeconómicas</h2>
      <p>La inflación y las políticas monetarias están influenciando significativamente...</p>
      
      <h2>Oportunidades de Inversión</h2>
      <p>Identificamos sectores prometedores para el próximo trimestre...</p>
    `,
    section: "economia",
    date: "2024-01-20",
    readTime: 7,
    tags: ["finanzas", "inversión", "economía"]
  },
  {
    id: "3",
    title: "La importancia del pensamiento crítico",
    excerpt: "Reflexiones sobre cómo desarrollar y aplicar el pensamiento crítico en nuestra vida diaria.",
    content: `
      <p>El pensamiento crítico es una habilidad fundamental en el mundo moderno...</p>
      
      <h2>¿Qué es el pensamiento crítico?</h2>
      <p>Se trata de la capacidad de analizar información de manera objetiva...</p>
      
      <h2>Aplicación práctica</h2>
      <p>Podemos desarrollar esta habilidad a través de ejercicios específicos...</p>
    `,
    section: "filosofia",
    date: "2024-01-18",
    readTime: 6,
    tags: ["filosofía", "pensamiento", "desarrollo personal"]
  },
  {
    id: "4",
    title: "Lecciones aprendidas en programación",
    excerpt: "Mis reflexiones sobre los errores más comunes que he cometido y las lecciones que he aprendido como desarrollador.",
    content: `
      <p>Después de años programando, he recopilado algunas lecciones valiosas...</p>
      
      <h2>La importancia de la planificación</h2>
      <p>Planificar antes de codificar puede ahorrarte muchas horas de refactoring...</p>
      
      <h2>Testing es tu amigo</h2>
      <p>Los tests no son solo para detectar bugs, sino para documentar el comportamiento esperado...</p>
    `,
    section: "learning",
    date: "2024-01-22",
    readTime: 4,
    tags: ["programación", "desarrollo", "lecciones"]
  }
];

export const sections = {
  actualidad: {
    name: "Actualidad",
    description: "Noticias y tendencias del mundo actual",
    color: "hsl(var(--primary))"
  },
  economia: {
    name: "Economía", 
    description: "Análisis económicos y financieros",
    color: "hsl(180 100% 40%)"
  },
  filosofia: {
    name: "Filosofía",
    description: "Reflexiones y pensamientos profundos", 
    color: "hsl(270 100% 50%)"
  },
  learning: {
    name: "My Learning Lessons",
    description: "Experiencias y aprendizajes personales",
    color: "hsl(120 100% 40%)"
  },
  about: {
    name: "Sobre Nosotros",
    description: "Información sobre champinon.com",
    color: "hsl(var(--muted-foreground))"
  }
} as const;