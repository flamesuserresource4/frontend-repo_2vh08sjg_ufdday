import { User, Scissors } from 'lucide-react'

const team = [
  { name: 'Nikos', role: 'Fade Specialist', img: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Giorgos', role: 'Beard Master', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Alex', role: 'Classic Cuts', img: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1200&auto=format&fit=crop' },
]

export default function Team() {
  return (
    <section id="team" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">Η Ομάδα</h2>
          <p className="text-gray-400 mt-3">Εξειδικευμένοι barbers με πάθος για το άψογο αποτέλεσμα.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((b) => (
            <div key={b.name} className="relative group rounded-xl overflow-hidden border border-white/10 bg-zinc-950">
              <img src={b.img} alt={b.name} className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-semibold">{b.name}</p>
                    <p className="text-sm text-gray-400">{b.role}</p>
                  </div>
                  <div className="p-2 rounded-md bg-red-600/20 text-red-400">
                    <Scissors className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
