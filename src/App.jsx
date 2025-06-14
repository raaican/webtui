import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Articles from './pages/Articles.jsx';

function App() {
  return (
    <body className="bg-surface">
      <div className="bg-surface min-h-screen text-text font-jetbrains">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
        </Routes>
      </div>
    </body>
  );
}

export default App;
