import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { CookieBanner } from "@/components/cookie-banner"
import PromotionalModal from "@/components/promotional-modal"
import "./globals.css"

export const metadata: Metadata = {
  title: "Popularne Igre u Hrvatskoj | PopularneIgre.com",
  description:
    "Stručne recenzije najboljih hrvatskih online kasina. Otkrijte licencirane kasine s atraktivnim bonusima i sigurnom igrom u Hrvatskoj 2025.",
  metadataBase: new URL("https://popularneigre.com"),
  openGraph: {
    title: "Popularne Igre u Hrvatskoj 2025 | Najbolji Online Kasina",
    description: "Stručne recenzije i analize najboljih hrvatskih online kasina",
    url: "https://popularneigre.com",
    siteName: "PopularneIgre",
    locale: "hr_HR",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hr">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <CookieBanner />
        <PromotionalModal />
        <Analytics />
      </body>
    </html>
  )
}
