import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="sticky top-[1px] z-50 bg-surface text-text font-jetbrains border border-border rounded p-2 px-2 rounded-lg shadow-xl my-2 mx-2 backdrop-blur bg-opacity-80">
      <div className="flex items-center justify-between w-full">
        <Link to="/" className="flex items-center gap-1 text-accent">
          <span className="font-bold text-green-400">&lt;/#&gt;</span>
          <span className="hidden min-[317px]:inline">raican's Notes</span>
        </Link>

        <div className="flex items-center gap-3">
          <Link to="/articles" className="hover:underline">
            <span>📄</span>
            <span className="hidden sm:inline pl-1">Articles</span>
          </Link>
          <a
            href="https://github.com/raaican/webtui"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            <span>🐙</span>
            <span className="hidden sm:inline pl-1">Github</span>
          </a>
          <button className="border border-border bg-[#313244] text-white px-2 py-1 rounded hover:border-white flex items-center">
            🔍
          </button>
        </div>
      </div>
    </nav>
  );
}

