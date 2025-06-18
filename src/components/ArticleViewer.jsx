import fm from 'front-matter';
import { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown';

export default function ArticleViewer({ slug }) {
  const [content, setContent] = useState('');
  const [metadata, setMetadata] = useState({});

  useEffect(() => {
    const path = `/articles/${slug}.md`;
    console.log("Fetching article from:", path);
    fetch(path)
      .then(res => res.ok ? res.text() : Promise.reject(res))
      .then(fmData => {
        const parsed = fm(fmData);
        console.log("Parsed metadata:", parsed.attributes);
        console.log("Parsed body:", parsed.body);
        setMetadata(parsed.attributes);
        setContent(parsed.body);
      })
      .catch(err => {
        console.error("Article load error:", err);
        setContent("Error loading article");
      });
  }, [slug]);

  return (
    <article className="prose mx-auto p-4 text-justify">
      <h1 className="text-2xl font-bold">{metadata.title || 'Untitled'}</h1>
      <p className="text-sm text-gray-500">{metadata.date ? new Date(metadata.date).toLocaleDateString() : 'No date'}</p>
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
}
