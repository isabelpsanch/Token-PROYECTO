export default function Header() {
  return (
    <header className="py-2 px-3 sm:py-4 sm:px-8 flex justify-between items-center bg-white border-b shadow-xs">
      {/* Logo para version mobile */}
      <img src="/cropped-favicon-32x32.png" alt="logo-blockmarker" width={47} className="sm:hidden" />
      {/* Logo para version desktop */}
      <img src="/logo-blockmarker.png" alt="logo-blockmarker" width={300} className="hidden sm:flex" />
    </header>
  )
}