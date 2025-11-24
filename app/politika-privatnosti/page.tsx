import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivatlivspolitikPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-3">Politika Privatnosti</h1>
            <p className="text-gray-400 text-center text-lg">Kako štitimo i koristimo vaše osobne podatke</p>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-[#d4af37]/30 rounded-lg p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-[#d4af37] mb-4">Prikupljanje osobnih podataka</h2>
              <p className="text-gray-300 leading-relaxed">
                Poštujemo vašu privatnost i obvezujemo se maksimalno zaštititi vaše osobne podatke. Ova politika
                detaljno objašnjava kako prikupljamo, koristimo i štitimo vaše podatke u potpunoj skladu s GDPR-om i
                važećim hrvatskim zakonodavstvom o zaštiti podataka.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-[#d4af37]/30 rounded-lg p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-[#d4af37] mb-6">Koje podatke prikupljamo?</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-[#d4af37] font-bold mt-1">•</span>
                  <span>IP adresa i detaljne informacije o pregledniku (potpuno anonimizirane)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#d4af37] font-bold mt-1">•</span>
                  <span>Statistike posjeta i analiza ponašanja korisnika na web stranici</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#d4af37] font-bold mt-1">•</span>
                  <span>Kolačići i slične moderne tehnologije za praćenje</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#d4af37] font-bold mt-1">•</span>
                  <span>Informacije koje dobrovoljno dijelite s nama putem kontakt obrazaca ili upita</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-[#d4af37]/30 rounded-lg p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-[#d4af37] mb-6">Kako koristimo vaše podatke?</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-[#d4af37] font-bold mt-1">•</span>
                  <span>Za kontinuirano poboljšanje naše web stranice i pruženih usluga</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#d4af37] font-bold mt-1">•</span>
                  <span>Za detaljnu analizu ponašanja i preferencija korisnika radi preciznijih preporuka</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#d4af37] font-bold mt-1">•</span>
                  <span>Za prikazivanje maksimalno relevantnih preporuka kasina i personaliziranih ponuda</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#d4af37] font-bold mt-1">•</span>
                  <span>Za ispunjavanje svih pravnih obveza i naprednu zaštitu od prijevare</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-[#d4af37]/30 rounded-lg p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-[#d4af37] mb-4">Dijeljenje podataka s trećim stranama</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Nikada i ni pod kojim uvjetima ne prodajemo, trgujemo niti iznajmljujemo vaše osobne podatke trećim
                stranama.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Možemo dijeliti potpuno anonimizirane i agregirane podatke s našim partnerskim kasino platformama
                isključivo kako bismo kontinuirano poboljšavali naše preporuke i kvalitetu pruženih usluga. Nikakve
                osobno identificirajuće informacije se ne dijele bez vašeg pristanka.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-[#d4af37]/30 rounded-lg p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-[#d4af37] mb-4">Vaša zakonska prava (GDPR)</h2>
              <p className="text-gray-300 mb-4">U skladu s GDPR zakonodavstvom, imate sljedeća neograničena prava:</p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-[#d4af37] font-bold mt-1">•</span>
                  <span>
                    <strong className="font-bold text-white">Pravo na pristup:</strong> Možete u bilo kojem trenutku
                    zatražiti potpunu kopiju svih vaših osobnih podataka
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#d4af37] font-bold mt-1">•</span>
                  <span>
                    <strong className="font-bold text-white">Pravo na ispravak:</strong> Možete ispraviti bilo koje
                    netočne ili zastarjele podatke
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#d4af37] font-bold mt-1">•</span>
                  <span>
                    <strong className="font-bold text-white">Pravo na brisanje:</strong> Možete zatražiti potpuno trajno
                    brisanje svih vaših podataka
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#d4af37] font-bold mt-1">•</span>
                  <span>
                    <strong className="font-bold text-white">Pravo na ograničenje:</strong> Možete ograničiti način
                    obrade vaših podataka
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#d4af37] font-bold mt-1">•</span>
                  <span>
                    <strong className="font-bold text-white">Pravo na prenosivost:</strong> Možete dobiti sve svoje
                    podatke u strukturiranom formatu
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-[#d4af37]/30 rounded-lg p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-[#d4af37] mb-4">Napredna sigurnost podataka</h2>
              <p className="text-gray-300 leading-relaxed">
                Provodimo najmodernij e tehničke i organizacijske sigurnosne mjere kako bismo maksimalno zaštitili vaše
                osobne podatke od bilo kakvog neovlaštenog pristupa, gubitka, oštećenja ili uništenja. Naša web stranica
                koristi najnoviju SSL enkripcijsku tehnologiju, a svi prikupljeni podaci pohranjuju se na sigurnim
                serverima s višeslojnom zaštitom.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-[#d4af37] rounded-lg p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-white mb-4">Kontaktirajte nas</h2>
              <p className="text-gray-300 leading-relaxed mb-3">
                Ako imate bilo kakva pitanja o našoj politici privatnosti ili želite ostvariti neko od svojih zakonskih
                prava, slobodno nas kontaktirajte:
              </p>
              <p className="text-gray-300 mb-2">
                <strong className="font-bold text-white">Email za privatnost:</strong>{" "}
                <span className="text-[#d4af37] font-semibold">privacy@popularneigre.com</span>
              </p>
              <p className="text-gray-300">
                <strong className="font-bold text-white">Opći kontakt:</strong>{" "}
                <span className="text-[#d4af37] font-semibold">info@popularneigre.com</span>
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
