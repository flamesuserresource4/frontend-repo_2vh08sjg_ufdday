import { useState } from 'react'
import { Menu, X, Scissors, Phone, MapPin } from 'lucide-react'

const navLinks = [
  { href: '#home', label: 'Αρχική' },
  { href: '#services', label: 'Υπηρεσίες' },
  { href: '#about', label: 'Σχετικά' },
  { href: '#team', label: 'Barbers' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Επικοινωνία' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/60 border-b border-red-600/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="p-2 rounded-md bg-gradient-to-br from-red-600 to-red-800 text-white shadow-lg shadow-red-900/30 group-hover:shadow-red-700/40 transition">
              <Scissors className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white font-black tracking-wide leading-tight text-lg font-display">
                Blade
                <span className="text-red-500"> Barbershop</span>
              </p>
              <p className="text-[10px] text-gray-400 -mt-1">Sharp Look. Clean Cut.</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                {l.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-md text-sm font-semibold transition">
              <Phone className="w-4 h-4" /> Κλείσε Ραντεβού
            </a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/80">
          <div className="px-4 py-3 space-y-2">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-gray-300 hover:text-white transition-colors text-sm">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-md text-sm font-semibold transition">
              <Phone className="w-4 h-4" /> Κλείσε Ραντεβού
            </a>
            <div className="flex items-center gap-3 text-gray-400 text-xs pt-2">
              <MapPin className="w-4 h-4" /> 28ης Οκτωβρίου 11, Ευκαρπία 564 29
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
