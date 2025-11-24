export function AboutSection() {
  return (
    <section id="about" className="py-16 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#141414]">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          <span className="text-white">O </span>
          <span className="text-[#d4af37]">Platformi</span>
        </h2>

        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-[#d4af37]/30 rounded-lg p-8 space-y-6 shadow-xl">
          <div>
            <h3 className="text-xl font-semibold text-[#d4af37] mb-4">Tko Smo Mi</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              PopularneIgre.com je vodeća hrvatska platforma za profesionalne recenzije i analize online kasina. Naš tim
              stručnjaka sa više od 12 godina iskustva u industriji igara na sreću posvećen je pružanju najkvalitetnijih
              i najobjektivnijih informacija hrvatskim igračima.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Svakodnevno testiramo i analiziramo brojne kasino platforme kako bismo vam predstavili samo najbolje
              opcije koje udovoljavaju najstrožim standardima sigurnosti, licenciranja, poštenja i kvalitete usluge. Naš
              cilj je jednostavan - omogućiti vam da donesite informiranu odluku i uživate u sigurnoj i odgovornoj igri.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#d4af37] mb-4">Naša Metodologija Ocjenjivanja</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Svako kasino prolazi kroz rigorozan i detaljan proces provjere koji provodi naš ekspertni tim. Testiramo
              sve ključne aspekte poslovanja - od procesa registracije i verifikacije, preko raznolikosti igara i
              kvalitete softvera, do brzine i jednostavnosti isplate dobitaka te dostupnosti i stručnosti korisničke
              podrške.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Ocjenjujemo kasina prema višedimenzionalnim kriterijima: validnost licence i regulacija, napredne mjere
              sigurnosti i zaštite podataka, transparentnost i pravičnost bonus uvjeta, širina izbora igara i kvaliteta
              softvera, raznolikost metoda plaćanja, optimizacija mobilnog iskustva, te dostupnost i kompetencija
              korisničke podrške. Samo kasina koja zadovolje naše visoke standarde dobivaju našu preporuku.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#d4af37] mb-4">Naša Misija i Vrijednosti</h3>
            <p className="text-gray-300 leading-relaxed">
              Vjerujemo da svaki igrač zaslužuje transparentan pristup pouzdanim informacijama i sigurnim platformama za
              igru. Naša misija je promovirati kulturu odgovornog kockanja, zaštititi igrače od sumnjivih i nepoštenih
              operatera, te podizati standarde cijele industrije. Kontinuirano pratimo sve promjene u industriji i
              redovito ažuriramo naše recenzije kako biste uvijek imali pristup najnovijim i najrelevantnijim
              informacijama.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
