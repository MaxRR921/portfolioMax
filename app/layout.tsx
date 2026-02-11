"use client";

import "../styles/globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "next-themes";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="site-shell">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
