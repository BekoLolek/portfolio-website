import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio | Developer",
  description: "Personal portfolio showcasing my projects and skills as a developer",
  keywords: ["developer", "portfolio", "projects", "web development", "software engineer"],
  authors: [{ name: "Developer" }],
  openGraph: {
    title: "Portfolio | Developer",
    description: "Personal portfolio showcasing my projects and skills",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
