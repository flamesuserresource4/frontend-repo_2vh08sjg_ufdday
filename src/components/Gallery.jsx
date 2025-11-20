export default function Gallery() {
  const imgs = [
    'https://images.unsplash.com/photo-1621600411688-8b1f9a2d860d?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1614037607825-19c7050bb682?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=1200&auto=format&fit=crop',
  ]

  return (
    <section id="gallery" className="py-20 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">Gallery</h2>
          <p className="text-gray-400 mt-3">Μια γεύση από τη δουλειά μας.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {imgs.map((src, idx) => (
            <div key={idx} className="aspect-[4/3] overflow-hidden rounded-lg border border-white/10">
              <img src={src} alt="work" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
