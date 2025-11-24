import Link from "next/link"
import Image from "next/image"
import { Mail, Shield, Clock, Award } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gradient-to-b from-[#0a0a0a] to-[#050505] border-t border-[#d4af37]/30">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#d4af37_1px,_transparent_1px)] bg-[length:24px_24px]" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          {/* Brand section - spans more columns */}
          <div className="col-span-1 md:col-span-5">
            <Link href="/" className="inline-block mb-6 group">
              <span className="text-3xl font-bold tracking-tight">
                <span className="text-[#d4af37] group-hover:text-[#f4cf57] transition-colors">Popularne</span>
                <span className="text-white">Igre</span>
                <span className="text-gray-500 text-lg ml-2">.com</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-md">
              Vodeći hrvatski portal za recenzije online kasina. Pružamo transparentne, detaljne i profesionalne analize
              kako biste mogli donijeti najbolje odluke za sigurnu zabavu.
            </p>

            <div className="flex items-start gap-3 text-sm text-gray-400 mb-3">
              <Mail className="h-5 w-5 text-[#d4af37] mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-white mb-1">Kontakt</p>
                <a href="mailto:info@popularneigre.com" className="hover:text-[#d4af37] transition-colors">
                  info@popularneigre.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-semibold text-white mb-4 text-lg flex items-center gap-2">
              <span className="w-1 h-6 bg-[#d4af37] rounded-full" />
              Navigacija
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/#rankings"
                  className="text-sm text-gray-400 hover:text-[#d4af37] transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-[#d4af37] transition-colors" />
                  Najbolji Kasina
                </Link>
              </li>
              <li>
                <Link
                  href="/#guide"
                  className="text-sm text-gray-400 hover:text-[#d4af37] transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-[#d4af37] transition-colors" />
                  Vodič za Igrače
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="text-sm text-gray-400 hover:text-[#d4af37] transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-[#d4af37] transition-colors" />O
                  Nama
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-semibold text-white mb-4 text-lg flex items-center gap-2">
              <span className="w-1 h-6 bg-[#d4af37] rounded-full" />
              Pravne Info
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/cookie-politika"
                  className="text-sm text-gray-400 hover:text-[#d4af37] transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-[#d4af37] transition-colors" />
                  Politika Kolačića
                </Link>
              </li>
              <li>
                <Link
                  href="/politika-privatnosti"
                  className="text-sm text-gray-400 hover:text-[#d4af37] transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-[#d4af37] transition-colors" />
                  Politika Privatnosti
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-3">
            <h3 className="font-semibold text-white mb-4 text-lg flex items-center gap-2">
              <span className="w-1 h-6 bg-[#d4af37] rounded-full" />
              Zašto Mi?
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <Shield className="h-5 w-5 text-[#d4af37] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium mb-0.5">100% Sigurno</p>
                  <p className="text-gray-400 text-xs">Samo licencirani operatori</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Clock className="h-5 w-5 text-[#d4af37] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium mb-0.5">Redovito Ažurirano</p>
                  <p className="text-gray-400 text-xs">Svakodnevne provjere</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Award className="h-5 w-5 text-[#d4af37] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium mb-0.5">Stručni Tim</p>
                  <p className="text-gray-400 text-xs">12+ godina iskustva</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#d4af37]/20 pt-10 mb-10">
          <div className="flex items-center gap-2 mb-6">
            <h3 className="font-semibold text-white text-lg">Odgovorno Kockanje</h3>
          </div>
          <div className="grid grid-cols-2 md:flex md:flex-wrap gap-4 items-center mb-6">
            <a
              href="https://www.hupis.hr/klok"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1a1a1a] backdrop-blur-sm p-3 rounded-lg hover:bg-[#1a1a1a]/80 transition-all duration-300 flex items-center justify-center border border-[#d4af37]/20 hover:border-[#d4af37]/40 group"
            >
              <Image
                src="/hupis.png"
                alt="HUPIS"
                width={120}
                height={60}
                className="h-12 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity"
              />
            </a>
            <a
              href="https://www.pbsvi.hr/strucni-programi-i-klub/kocka-terapijsko-rehabilitacijski-program-za-ovisnost-o-kockanju/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1a1a1a] backdrop-blur-sm p-3 rounded-lg hover:bg-[#1a1a1a]/80 transition-all duration-300 flex items-center justify-center border border-[#d4af37]/20 hover:border-[#d4af37]/40 group"
            >
              <Image
                src="/pbsvi.svg"
                alt="PBSVI"
                width={100}
                height={40}
                className="h-10 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity"
              />
            </a>
            <a
              href="https://www.gambleaware.org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1a1a1a] backdrop-blur-sm p-3 rounded-lg hover:bg-[#1a1a1a]/80 transition-all duration-300 flex items-center justify-center border border-[#d4af37]/20 hover:border-[#d4af37]/40 group"
            >
              <Image
                src="/gamble-aware.webp"
                alt="GambleAware"
                width={100}
                height={40}
                className="h-10 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity"
              />
            </a>
            <a
              href="https://www.gamstop.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1a1a1a] backdrop-blur-sm p-3 rounded-lg hover:bg-[#1a1a1a]/80 transition-all duration-300 flex items-center justify-center border border-[#d4af37]/20 hover:border-[#d4af37]/40 group"
            >
              <Image
                src="/gamstop.svg"
                alt="GamStop"
                width={120}
                height={60}
                className="h-12 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity"
              />
            </a>
            <a
              href="https://www.gamcare.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1a1a1a] backdrop-blur-sm p-3 rounded-lg hover:bg-[#1a1a1a]/80 transition-all duration-300 flex items-center justify-center border border-[#d4af37]/20 hover:border-[#d4af37]/40 group"
            >
              <Image
                src="/gamecare-new.svg"
                alt="GamCare"
                width={120}
                height={60}
                className="h-12 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity"
              />
            </a>
          </div>
          <div className="bg-[#1a1a1a] border border-[#d4af37]/20 rounded-lg p-4">
            <p className="text-xs text-gray-400 leading-relaxed">
              <strong className="text-white">Upozorenje:</strong> Kockanje može izazvati ovisnost. Igrajte odgovorno i
              samo ako imate 18+ godina. Ova web stranica sadrži affiliate linkove - možemo primiti proviziju za
              registracije putem naših linkova, no to ne utječe na objektivnost naših recenzija. Sve preporuke su
              temeljene na rigoroznim testiranjima i objektivnim kriterijima.
            </p>
          </div>
        </div>

        <div className="border-t border-[#d4af37]/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="flex items-center gap-2 text-gray-400">
            <span>© {currentYear}</span>
            <span className="text-[#d4af37] font-semibold">PopularneIgre.com</span>
            <span>· Sva prava pridržana</span>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/politika-privatnosti"
              className="hover:text-[#d4af37] transition-colors text-gray-400 text-xs md:text-sm"
            >
              Politika Privatnosti
            </Link>
            <span className="text-gray-600">·</span>
            <Link
              href="/cookie-politika"
              className="hover:text-[#d4af37] transition-colors text-gray-400 text-xs md:text-sm"
            >
              Politika Kolačića
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
