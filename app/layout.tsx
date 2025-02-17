"use client";

import "../styles/globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider, useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <ThemeProvider enableSystem={true} attribute="class">
          <Navbar />
          <DarkModeToggle /> {/* Add the toggle button */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

// Dark mode toggle button component
function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoid hydration mismatch

  return (
    <button
      className="fixed top-4 right-4 p-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded-md shadow-md"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? "🌞 Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}

