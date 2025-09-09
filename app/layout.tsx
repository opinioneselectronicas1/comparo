import { TooltipProvider } from "@/components/ui/tooltip";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Comparaelprecio - Comparador de Precios con IA",
  description:
    "Compara precios en Amazon, Carrefour, MediaMarkt y más. Histórico de precios y análisis con IA para encontrar las mejores ofertas.",
  keywords: [
    "Comparaelprecio",
    "Comparador de precios",
    "Histórico de precios",
    "Amazon precios",
    "Carrefour ofertas",
    "MediaMarkt descuentos",
    "Análisis IA productos",
    "Mejor precio",
    "Ofertas online",
    "Comparar precios España",
    "Seguimiento precios",
    "Alertas precio",
  ],
  openGraph: {
    type: "website",
    siteName: "Comparaelprecio",
    locale: "en_US",
    url: "https://comparaelprecio.com",
    title: "Comparaelprecio - Comparador de Precios con IA",
    description:
      "Compara precios en Amazon, Carrefour, MediaMarkt y más. Histórico de precios y análisis con IA para encontrar las mejores ofertas.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Comparaelprecio Preview",
      },
    ],
  },
  authors: [
    {
      name: "Comparaelprecio",
      url: "https://comparaelprecio.com",
    },
  ],
  creator: "Comparaelprecio",
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon-32x32.png",
      sizes: "32x32",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon-16x16.png",
      sizes: "16x16",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/android-chrome-192x192.png",
      sizes: "192x192",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/android-chrome-512x512.png",
      sizes: "512x512",
    },
  ],
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
