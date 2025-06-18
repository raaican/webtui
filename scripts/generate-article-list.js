import fs from 'fs';
import path from 'path';
import fm from 'front-matter';

const articlesDir = path.resolve('public/articles');
const outputPath = path.resolve('./src/articles.json');

const files = fs.readdirSync(articlesDir).filter(file => file.endsWith('.md'));

const articles = files.map(file => {
  const slug = file.replace(/\.md$/, '');
  const rawContent = fs.readFileSync(path.join(articlesDir, file), 'utf-8');
  const parsed = fm(rawContent);

  return {
    slug,
    title: parsed.attributes.title || slug,
    date: parsed.attributes.date || 'Unknown',
  };
});

// Optional: sort by newest date
articles.sort((a, b) => new Date(b.date) - new Date(a.date));

fs.writeFileSync(outputPath, JSON.stringify(articles, null, 2));
console.log(`Generated ${articles.length} article(s).`);

