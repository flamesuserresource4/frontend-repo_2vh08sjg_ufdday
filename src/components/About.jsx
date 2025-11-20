export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-zinc-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">Σχετικά με εμάς</h2>
            <p className="text-gray-400 mt-4">
              Στο Blade Barbershop προσφέρουμε εμπειρία grooming υψηλού επιπέδου με έμφαση στη λεπτομέρεια. Η ομάδα μας ειδικεύεται σε fades, παραδοσιακά ξυρίσματα και μοντέρνα κουρέματα που ταιριάζουν στο στυλ σου.
            </p>
            <ul className="mt-6 space-y-3 text-gray-300">
              <li>• Premium προϊόντα και απολυμασμένος εξοπλισμός</li>
              <li>• Άνετο, σύγχρονο περιβάλλον</li>
              <li>• Προσοχή στην εξυπηρέτηση και την ακρίβεια</li>
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border border-white/10">
              <img src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCYXJiZXJzaG9wfGVufDB8MHx8fDE3NjM2NDgxNjl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Barbershop" className="w-full h-full object-cover scale-105" />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-black/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
