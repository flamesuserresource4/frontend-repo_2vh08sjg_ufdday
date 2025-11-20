export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Blade Barbershop • Sharp Look. Clean Cut.</p>
        <p className="text-gray-500 text-sm">28ης Οκτωβρίου 11, Ευκαρπία 564 29, Ελλάδα • +30 699 999 9999</p>
      </div>
    </footer>
  )
}
