import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import ArticleList from './components/ArticleList';
import ArticleWrapper from './pages/ArticleWrapper.jsx'; './components/ArticleViewer';
import HomePage from './pages/HomePage.jsx';

function App() {
  return (
    <body className="bg-surface">
      <div className="bg-surface min-h-screen text-text font-jetbrains">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/articles" element={<ArticleList />} />
          <Route path="/articles/:slug" element={<ArticleWrapper />} />
        </Routes>
      </div>
    </body>
  );
}

export default App;
