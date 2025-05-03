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
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { slug: string | undefined };
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>{params?.slug ? `${params.slug} - Yumiere` : 'Yumiere - Find your crystal'}</title>
        <meta name="description" content="Discover handcrafted crystal bracelets designed to support your energy needs. Each piece is carefully curated with specific intentions and healing properties." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo.png" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Yumiere - Find your crystal" />
        <meta property="og:description" content="Discover handcrafted crystal bracelets designed to support your energy needs. Each piece is carefully curated with specific intentions and healing properties." />
        <meta property="og:image" content="/images/crystal-bracelet.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Yumiere - Find your crystal" />
        <meta name="twitter:description" content="Discover handcrafted crystal bracelets designed to support your energy needs. Each piece is carefully curated with specific intentions and healing properties." />
        <meta name="twitter:image" content="/images/crystal-bracelet.png" />
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
