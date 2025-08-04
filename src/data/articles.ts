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
    id: "5",
    title: "TENGO MÁS HAMBRE QUE CASCORRO, ORÍGENES DE TAN FAMOSA EXPRESIÓN",
    excerpt: "La fascinante historia detrás de una de las expresiones más populares de España, que nos lleva a la Guerra de Independencia cubana y al heroísmo de Eloy Gonzalo.",
    content: `
      <p>Aquí y ahora, este es el momento que estabas esperando y nadie antes te había contado. De todas aquellas veces que has escuchado de una y mil bocas decir…tengo más hambre que Cascorro y de aquellas otras tantas que te has cuestionado el origen dicha antiquísima coletilla.</p>
      
      <p>Se escucha habitualmente en el centro de España, Castilla y León y Madrid, aunque también este hacedor de palabras tiene entendido que en Latinoamérica es más que conocida, si bien es cierto que sus orígenes vienen relacionados con el nuevo continente.</p>
      
      <p>Y es que la apostilla que pocos conocen y que sucede al famoso ''Tengo más hambre que Cascorro'' va ligado con un ''que volvió de la guerra y se tragó un fogón''. El motivo y la historia que tiene detrás se remontan a 1896, año crucial a la Guerra de Independencia cubana, para los despistados: Guerra en la que se enfrentan Estados Unidos y Cuba contra el Reino de España, saldándose en 1898 con la rendición de España y la pérdida de la isla.</p>
      
      <h2>El héroe de Cascorro</h2>
      <p>El héroe de Cascorro tiene nombre, apellido y una historia muy triste. Eloy Gonzalo nace en Malaguilla (Guadalajara) y es abandonado al nacer por sus padres biológicos, crece con sus padres adoptivos en San Bartolomé de Pinares (Ávila) y Peñafiel (Valladolid) y posteriormente al morir dicho matrimonio es acogido de nuevo por otra familia en Chapinería (Madrid) donde a la edad de 21 años es reclutado para el ejército.</p>
      
      <p>Destinado a un regimiento de Infantería en América, se traslada a Cuba en 1895, año en el que comienza la guerra con Cuba. La guerra que distaba de ser un conflicto asequible para el Reino de España, a un año de su comienzo en 1896 tiene un episodio clave simbólicamente hablando que acontece en el poblado cubano de Cascorro.</p>
      
      <h2>La gesta heroica</h2>
      <p>Unas fuerzas con 3.000 insurrectos cubanos acorralan a los 170 españoles en dicho poblado el día 22 de Septiembre, comprometiendo enormemente la avanzada y por tanto la guerra y poniendo en apuros a las fuerzas españolas. El poblado cuenta con insurrectos cubanos que desde sus casas bombardean constantemente las posiciones españolas, principal foco del ataque y por tanto del hacinamiento.</p>
      
      <p>Es por tanto, que ante tal situación el Capitán Neila pide voluntarios para incendiar estas posiciones, a lo que Eloy se propone alegando que es huérfano y soltero sin tener a nadie a su cargo.</p>
      
      <p>Con más corazón que cabeza y para cometer tal hazaña, Eloy pidió una lata de petróleo para incendiar una de las casas y una cuerda para que le atasen y que recuperasen su cadáver una vez caído. Que dichosa fue su suerte cuando pasó a las líneas enemigas con vida mientras las balas le silbaban, pudiendo quemar el fuerte enemigo y liberando su ejército.</p>
      
      <img src="/images/cascorro-statue.jpg" alt="Estatua de Eloy Gonzalo en la Plaza de Cascorro, Madrid" style="width: 100%; max-width: 600px; height: auto; margin: 20px 0; border-radius: 8px;" />
      
      <h2>El famoso banquete</h2>
      <p>Tras el desbloqueo y dada la crítica situación de hambruna de las tropas españolas, pudieron rehacerse y volver al asentamiento base donde al enterarse de dicha gesta prepararon un banquete a las tropas y en especial a Eloy, por tan valerosa hazaña. Y en este momento, se dice que cuando Eloy llegó no pudo aguantar su hambre, internándose en las cocinas para saciar su gula, se dice que se tragó un fogón.</p>
      
      <h2>El trágico final</h2>
      <p>Lamentablemente, la historia de Eloy es tan trágica como gran parte de su vida. Eloy muere en Cuba antes de finalizar la guerra, fruto de unas fiebres tropicales. Posteriormente sus restos viajaron al puerto de Santander, donde se le dio sepultura finalmente en el cementerio de la Almudena.</p>
      
      <p>La gesta por si misma del héroe de Cascorro no tuvo apenas relevancia militar, sin embargo su figura en Madrid se hizo popular por su valentía y su gesto individual en una guerra. En 1897 el Ayuntamiento de Madrid decide homenajearle y le dedican una calle y una estatua en la Plaza de Nicolás Salmerón, conocida más comúnmente como la Plaza de Cascorro. En la estatua, Eloy aparece con una lata de petróleo, una bayoneta y una cuerda.</p>
      
      <p><strong>Brindemos porque esta historia se extienda, porque se conozcan sus orígenes y porque probablemente la próxima versión de Office tenga un diccionario decente que incluya Cascorro no como nombre propio, sino como leyenda.</strong></p>
    `,
    section: "filosofia",
    date: "2024-01-25",
    readTime: 8,
    tags: ["historia", "expresiones", "madrid", "cuba"]
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