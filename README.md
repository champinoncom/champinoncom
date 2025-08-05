# champinon.com

A beautiful, maintainable blog website built with React, TypeScript, and Tailwind CSS.

## Features

- 📱 **Mobile-first responsive design**
- 📝 **Easy content management** - Add articles by editing simple data files
- 🎨 **Beautiful UI** with custom design system
- 🚀 **Fast and modern** - Built with Vite and React
- 📚 **Multiple sections** - Actualidad, Economía, Filosofía, Learning Lessons
- 🔍 **SEO friendly** structure

## How to Add New Articles

Adding new articles is simple! Just edit the `src/data/articles.ts` file:

1. Open `src/data/articles.ts` in your editor
2. Add a new article object to the `articles` array:

```typescript
{
  id: "unique-id",
  title: "Your Article Title",
  excerpt: "Brief description of your article...",
  content: `
    <p>Your HTML content here...</p>
    <h2>Section Header</h2>
    <p>More content...</p>
  `,
  section: "actualidad", // or "economia", "filosofia", "learning", "about"
  date: "2024-01-25",
  readTime: 5, // minutes
  tags: ["tag1", "tag2"],
  featured: false // set to true for featured articles
}
```

3. Save the file and your new article will appear automatically!

## Sections

- **Actualidad** - Current events and news analysis
- **Economía** - Economic and financial analysis
- **Filosofía** - Philosophical reflections and thoughts
- **My Learning Lessons** - Personal experiences and learnings
- **Sobre nosotros** - About page

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── components/          # Reusable UI components
├── data/               # Article data and configuration
├── pages/              # Page components
├── lib/                # Utilities
└── index.css           # Design system and global styles
```

## Content Management

The blog is designed to be easily maintainable through code:

- **Articles**: Edit `src/data/articles.ts` to add/modify articles
- **Sections**: Modify section info in `src/data/articles.ts`
- **Design**: Customize the design system in `src/index.css` and `tailwind.config.ts`

## Publishing Workflow

1. Edit articles in VS Code
2. Commit changes to git
3. Push to your repository
4. Deploy automatically (if connected to a deployment service)

This approach gives you full control over your content while keeping everything version-controlled and easy to manage.# champinoncom
