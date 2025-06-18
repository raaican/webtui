import { useParams } from 'react-router-dom';
import ArticleViewer from '../components/ArticleViewer';

export default function ArticleWrapper() {
  const { slug } = useParams();
  return <ArticleViewer slug={slug} />;
}
