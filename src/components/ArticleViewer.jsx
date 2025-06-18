import fm from 'front-matter';
import { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown';

export default function ArticleViewer({ slug }) {
  const [content, setContent] = useState('');
  const [metadata, setMetadata] = useState({});

  useEffect(() => {
    if (!slug) return;

    fetch(`/articles/${slug}.md`)
      .then(res => {
        if (!res.ok) throw new Error(`Failed to load /articles/${slug}.md`);
        return res.text();
      })
      .then(text => {
        const parsed = fm(text); // front-matter parses it
        setMetadata(parsed.attributes);
        setContent(parsed.body);
      })
      .catch(err => {
        console.error(err);
        setContent("Error loading article.");
      });
  }, [slug]);

  return (
    <article className="prose mx-auto p-4">
      <h1>{metadata.title || 'Untitled'}</h1>
      <p className="text-sm text-gray-500">{metadata.date || 'No date'}</p>
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
}
