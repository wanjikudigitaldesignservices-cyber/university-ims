import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "University of Nexus | Shape the Future",
  description: "A world-class institution dedicated to academic excellence and research.",
};

import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
