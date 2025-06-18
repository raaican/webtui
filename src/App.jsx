import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import ArticleList from './components/ArticleList';
import ArticleViewer from './components/ArticleViewer';

function App() {
  return (
    <body className="bg-surface">
      <div className="bg-surface min-h-screen text-text font-jetbrains">
        <Navbar />
        <Routes>
          <Route path="/" element={<ArticleList />} />
          <Route path="/articles/:slug" element={<ArticleViewer />} />
        </Routes>
      </div>
    </body>
  );
}

export default App;
