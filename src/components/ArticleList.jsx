import { Link } from 'react-router-dom';
import articles from '../articles.json';

export default function ArticleLiist() {
  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Articles</h1>
      <ul>
        {articles.map(({ slug, title, date }) => (
          <li key={slug} className="mb-2">
            <Link to={`/articles/${slug}`} className="text-blue-500 hover:underline">
              {title}
            </Link>
            {date && <span className="text-sm text-gray-400 ml-2">({new Date(date).toLocaleDateString()})</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}
