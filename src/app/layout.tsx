import type { Metadata } from "next";
import "./globals.css";

import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Bento GO !",
  description: "Bento Go - Webpage",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <footer className="w-full bg-red-dark text-white py-4 text-center">
          <p className="text-sm">© 2025 Bento Go. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
