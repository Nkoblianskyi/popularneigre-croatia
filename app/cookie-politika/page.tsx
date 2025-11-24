import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CookiePolitikPage() {
  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 -z-10">
        <img src="/casino-background-pattern.jpg" alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-[#0a0a0a]/90" />
      </div>
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-3">Politika Kolačića</h1>
            <p className="text-gray-400 text-center text-lg">Kako koristimo kolačiće na našoj platformi</p>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-[#d4af37]/30 rounded-lg p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-[#d4af37] mb-4">Što su kolačići?</h2>
              <p className="text-gray-300 leading-relaxed">
                Kolačići (cookies) su male tekstualne datoteke koje se automatski pohranjuju na vašem računalu, pametnom
                telefonu ili tabletu kada posjetite našu web stranicu. Oni nam pomažu značajno poboljšati vaše
                korisničko iskustvo pamćenjem vaših osobnih preferencija i omogućavanjem naprednih funkcionalnosti
                platforme.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-[#d4af37]/30 rounded-lg p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-[#d4af37] mb-6">Vrste kolačića koje koristimo</h2>

              <div className="space-y-6">
                <div className="border-l-4 border-[#d4af37] pl-6">
                  <h3 className="text-xl font-bold text-white mb-2">Nužni (esencijalni) kolačići</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Ovi kolačići su apsolutno neophodni za pravilno i sigurno funkcioniranje web stranice i ne mogu se
                    deaktivirati u našim sustavima. Oni spremaju vašu preferenciju vezanu uz kolačiće i omogućavaju
                    osnovne sigurnosne i tehničke funkcije platforme.
                  </p>
                </div>

                <div className="border-l-4 border-[#d4af37] pl-6">
                  <h3 className="text-xl font-bold text-white mb-2">Analitički kolačići</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Koristimo vrhunsku Vercel Analytics platformu kako bismo detaljno razumjeli kako posjetitelji
                    koriste i doživljavaju našu web stranicu. Ovo nam omogućava kontinuirano poboljšanje sadržaja,
                    navigacije i cjelokupnog korisničkog iskustva. Svi prikupljeni podaci su potpuno anonimizirani i
                    agregirani.
                  </p>
                </div>

                <div className="border-l-4 border-[#d4af37] pl-6">
                  <h3 className="text-xl font-bold text-white mb-2">Marketing kolačići</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Ovi kolačići se koriste za prikazivanje maksimalno relevantnih i personaliziranih preporuka kasina
                    na temelju vaših individualnih interesa, preferencija i prethodnih interakcija s našom web
                    stranicom. Pomažu nam pružiti vam sadržaj koji vas zaista zanima.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-[#d4af37]/30 rounded-lg p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-[#d4af37] mb-4">Upravljanje postavkama kolačića</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                U bilo kojem trenutku možete jednostavno promijeniti ili potpuno onemogućiti postavke kolačića direktno
                u svom web pregledniku. Molimo vas imajte na umu da potpuna deaktivacija kolačića može značajno utjecati
                na funkcionalnost i korisničko iskustvo naše web stranice.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Također možete ponovno otvoriti naš banner za upravljanje kolačićima jednostavnim brisanjem svih
                kolačića vezanih uz našu web stranicu direktno u postavkama vašeg preglednika.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-[#d4af37] rounded-lg p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-white mb-4">Kontaktirajte nas</h2>
              <p className="text-gray-300 leading-relaxed">
                Ako imate bilo kakva pitanja ili nedoumice vezane uz našu politiku kolačića, slobodno nas kontaktirajte
                na: <span className="text-[#d4af37] font-semibold">info@popularneigre.com</span>
              </p>
            </div>

            <div className="text-center pt-6">
              <p className="text-sm text-gray-500">Posljednje ažurirano: Siječanj 2025</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
