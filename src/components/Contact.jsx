import { Phone, MapPin, Clock, Instagram, Video } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">Επικοινωνία</h2>
            <p className="text-gray-400 mt-3">Κλείσε ραντεβού τηλεφωνικά ή πέρασε από το χώρο μας.</p>

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-red-500 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Τηλέφωνο</p>
                  <a href="tel:+306999999999" className="hover:text-red-400 transition">+30 699 999 9999</a>
                </div>
              </div>

              <div className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-red-500 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Διεύθυνση</p>
                  <p>28ης Οκτωβρίου 11, Ευκαρπία 564 29, Ελλάδα</p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-gray-300">
                <Clock className="w-5 h-5 text-red-500 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Ώρες Λειτουργίας</p>
                  <ul className="text-sm mt-1 space-y-0.5">
                    <li>Δευτέρα - Παρασκευή: 10:00 - 20:00</li>
                    <li>Σάββατο: 10:00 - 16:00</li>
                    <li>Κυριακή: Κλειστά</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <a href="#" className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-white/10 text-gray-300 hover:text-white hover:border-red-500/60 transition">
                  <Instagram className="w-4 h-4" /> Instagram
                </a>
                <a href="#" className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-white/10 text-gray-300 hover:text-white hover:border-red-500/60 transition">
                  <Video className="w-4 h-4" /> TikTok
                </a>
              </div>

              <div className="pt-4">
                <a href="tel:+306999999999" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white px-6 py-3 rounded-md font-semibold transition">
                  Κλείσε Ραντεβού
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="aspect-[4/3] rounded-xl overflow-hidden border border-white/10 shadow-2xl">
              <iframe
                title="Blade Barbershop Map"
                src="https://www.google.com/maps?q=28ης%20Οκτωβρίου%2011,%20Ευκαρπία%20564%2029,%20Ελλάδα&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
