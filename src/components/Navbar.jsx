export default function Navbar() {
  return (
    <nav className="bg-surface text-text font-jetbrains border border-border rounded p-2">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-1 text-accent">
          <span className="font-bold text-green-400">&lt;/#&gt;</span>
          <span className="font-bold">raican's Notes</span>
        </div>

        <div className="flex items-center gap-3">
          <a to="/articles" className="hover:underline">
            <span>📄</span>
            <span className="hidden pl-1 md:inline">Articles</span>
          </a>
          <a href="#" className="hover:underline">
            <span>📦</span>
            <span className="hidden pl-1 md:inline">Archives</span>
          </a>
          <a href="#" className="hover:underline">
            <span>🐙</span>
            <span className="hidden pl-1 md:inline">Source</span>
          </a>
          <button className="border border-border bg-[#313244] text-white px-2 py-1 rounded hover:border-white flex items-center">
            🔍
          </button>
        </div>
      </div>
    </nav>
  );
}

