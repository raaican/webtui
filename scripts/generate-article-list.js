// scripts/generate-article-list.js
import fs from 'fs/promises';
import path from 'path';
import fm from 'front-matter';

async function main() {
  const dir = path.resolve('public/articles');
  const files = (await fs.readdir(dir)).filter(f => f.endsWith('.md'));
  const articles = [];

  for (const file of files) {
    const raw = await fs.readFile(path.join(dir, file), 'utf-8');
    const { attributes } = fm(raw);
    articles.push({
      slug: file.replace(/\.md$/, ''),
      title: attributes.title,
      date: attributes.date,
    });
  }

  await fs.writeFile(
    path.resolve('src/articles.json'),
    JSON.stringify(articles, null, 2)
  );

  console.log(`Generated ${articles.length} articles.json entries`);
}

main();
