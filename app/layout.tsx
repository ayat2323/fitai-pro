import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FitAI Pro - Wissenschaftlich perfekte Trainingspläne",
  description:
    "KI-Präzision trifft auf menschliche Expertise. Erhalte deinen personalisierten Trainingsplan, der auf tausenden Studien basiert.",
  keywords: "Trainingsplan, KI, Fitness, Muskelaufbau, Abnehmen, Personal Trainer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
