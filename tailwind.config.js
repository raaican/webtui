module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        jetbrains: ['"JetBrains Mono"', 'monospace']
      },
      colors: {
        surface: '#1e1e2e',
        border: '#313244',
        text: '#cdd6f4',
        accent: '#b4befe',
      },
    },
  },
  plugins: [],
}
