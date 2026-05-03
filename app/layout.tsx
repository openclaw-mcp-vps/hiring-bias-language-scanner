import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "BiasCheck — Scan Job Posts for Biased Language",
  description: "Instantly analyze job descriptions for gender, age, and cultural bias. Get neutral alternatives and write more inclusive job posts."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="3f69c5f9-c916-4c26-9ccf-eb6d792580a5"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
