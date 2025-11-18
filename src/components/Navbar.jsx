import { ShoppingCart, Menu, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-pink-100">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="size-8 rounded-lg bg-gradient-to-br from-pink-400 to-fuchsia-500 text-white grid place-items-center shadow-md">
            <Sparkles className="size-5" />
          </div>
          <span className="text-lg font-semibold tracking-tight text-pink-700 group-hover:text-pink-800 transition-colors">
            Boba & Bites
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-pink-800/80">
          <a href="#menu" className="hover:text-pink-900 transition-colors">Menu</a>
          <a href="#about" className="hover:text-pink-900 transition-colors">About</a>
          <a href="#contact" className="hover:text-pink-900 transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-2">
          <button className="relative inline-flex items-center gap-2 rounded-full bg-pink-600 px-4 py-2 text-white text-sm font-medium shadow-md shadow-pink-600/20 hover:bg-pink-700 transition-colors">
            <ShoppingCart className="size-4" />
            Order
            <span className="ml-1 inline-flex items-center justify-center text-[10px] font-semibold bg-white/20 rounded-full px-1.5 py-0.5">0</span>
          </button>
          <button className="md:hidden p-2 rounded-lg hover:bg-pink-50" onClick={() => setOpen(v=>!v)} aria-label="Toggle menu">
            <Menu className="size-5 text-pink-800" />
          </button>
        </div>
      </nav>
      {open && (
        <div className="md:hidden border-t border-pink-100 bg-white/80 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col gap-2 text-pink-900">
            <a href="#menu" className="py-2">Menu</a>
            <a href="#about" className="py-2">About</a>
            <a href="#contact" className="py-2">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}
