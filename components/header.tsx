"use client"

import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#d4af37]/20 bg-[#0a0a0a]/95 backdrop-blur supports-[backdrop-filter]:bg-[#0a0a0a]/90 shadow-lg shadow-black/30">
      <div className="container mx-auto flex h-16 items-center justify-center px-4">
        <Link href="/" className="flex items-center space-x-2">
        <Image src="/favicon.ico" alt="Logo" width={40} height={40} />
          <span className="text-lg md:text-xl font-bold tracking-tight">
            <span className="text-[#d4af37]">Popularne</span>
            <span className="text-white">Igre</span>
          </span>
        </Link>
      </div>
    </header>
  )
}
