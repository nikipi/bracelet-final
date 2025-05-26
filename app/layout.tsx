"use client"
import type React from "react";
import { Inter, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Yumiere - Gemstone Jewelry | Luxury Handcrafted Jewelry | Healing Crystals</title>
        <link rel="icon" type="image/png" sizes="16x16" href="/logo.png" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <RootContext>
        <ManagedUIContext>
          <body className={`${inter.variable} ${playfair.variable} font-sans`}>
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </body>
        </ManagedUIContext>
      </RootContext>
    </html>
  );
}

import "./globals.css";
import { CustomizeizeContext } from "@/context/customize.context";
import RootContext from "@/components/RootContext";
import { ManagedUIContext } from "@/context/ui.context";

// export const metadata = {
//   generator: "v0.dev",
// };
