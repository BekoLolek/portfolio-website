import type { Metadata } from "next";
import { JetBrains_Mono, Schibsted_Grotesk } from "next/font/google";
import { portfolioData } from "@/data/portfolio";
import "./globals.css";

const sans = Schibsted_Grotesk({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "800"],
  variable: "--font-schibsted",
});

const mono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
});

const title = `${portfolioData.name} · ${portfolioData.role}`;
const description =
  "Full-stack and backend engineer in Denmark building production SaaS with TypeScript, React, Java/Spring Boot and PostgreSQL.";

export const metadata: Metadata = {
  metadataBase: new URL("https://bekololek.vercel.app"),
  title,
  description,
  authors: [{ name: portfolioData.name }],
  openGraph: {
    title,
    description,
    type: "profile",
    url: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
