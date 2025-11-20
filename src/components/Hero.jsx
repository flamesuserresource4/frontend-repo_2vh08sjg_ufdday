import { motion } from 'framer-motion'
import { Scissors, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black">
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-red-700/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-[32rem] h-[32rem] bg-red-900/20 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),rgba(0,0,0,0)_60%)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-700/40 bg-black/50 text-red-400 text-xs tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" /> Sharp Look. Clean Cut.
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white font-display">
            Blade <span className="text-red-600">Barbershop</span>
          </h1>
          <p className="mt-5 text-gray-300 max-w-2xl mx-auto">
            Premium ανδρικά κουρέματα, ξυρίσματα και περιποίηση γενειάδας σε σύγχρονο, αυθεντικό χώρο.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white px-6 py-3 rounded-md font-semibold transition shadow-lg shadow-red-900/30">
              <Scissors className="w-5 h-5" /> Κλείσε Ραντεβού
            </a>
            <a href="#services" className="text-gray-300 hover:text-white transition">Δες Υπηρεσίες</a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-4 inset-x-0 flex justify-center">
        <div className="h-8 w-px bg-gradient-to-b from-red-600/60 to-transparent" />
      </div>
    </section>
  )
}
