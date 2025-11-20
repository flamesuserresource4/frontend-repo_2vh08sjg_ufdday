import { Scissors, Sparkles, BadgeEuro, Beard } from 'lucide-react'

const services = [
  { icon: Scissors, name: 'Ανδρικό Κούρεμα', price: '10€', desc: 'Κλασικό ή μοντέρνο κούρεμα, πάντα με ακρίβεια.' },
  { icon: Sparkles, name: 'Ξύρισμα', price: '8€', desc: 'Παραδοσιακό ξύρισμα με ζεστή πετσέτα.' },
  { icon: Beard, name: 'Beard Trim', price: '7€', desc: 'Σχήμα και περιποίηση γενειάδας.' },
  { icon: Scissors, name: 'Fade & Shape Up', price: '12€', desc: 'Καθαρά fades και περιποίηση γραμμών.' },
]

export default function Services() {
  return (
    <section id="services" className="relative py-20 bg-zinc-950">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,0,0,0.06),transparent_20%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">Υπηρεσίες & Τιμές</h2>
          <p className="text-gray-400 mt-3">Ποιότητα χωρίς συμβιβασμούς.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.name} className="group rounded-xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-5 hover:border-red-600/50 transition shadow-lg hover:shadow-red-900/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-md bg-red-600/20 text-red-400">
                    <s.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-white font-semibold">{s.name}</h3>
                </div>
                <span className="text-red-500 font-bold">{s.price}</span>
              </div>
              <p className="text-sm text-gray-400 mt-3">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a href="#contact" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white px-6 py-3 rounded-md font-semibold transition">
            <Scissors className="w-5 h-5" /> Κλείσε Ραντεβού
          </a>
        </div>
      </div>
    </section>
  )
}
