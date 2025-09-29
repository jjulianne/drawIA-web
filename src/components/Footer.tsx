
export default function Footer() {
  return (
    <footer className="mt-auto bg-transparent py-12">
      <div className="max-w-6xl mx-auto px-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} DRAWIA — Minimal landing example. Built with Vite, React, TypeScript & TailwindCSS.
      </div>
    </footer>
  )
}
