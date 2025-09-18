import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Soltice Energy PR - Energía Solar y Baterías en Puerto Rico",
  description: "Líder en soluciones de energía solar en Puerto Rico. Sistemas residenciales, comerciales y portátiles. Independencia energética garantizada. ¡Cotización gratis!",
  keywords: "energía solar, baterías, Puerto Rico, sistemas solares, independencia energética, apagones, sostenible",
  authors: [{ name: "Soltice Energy PR" }],
  openGraph: {
    title: "Soltice Energy PR - Energía Solar en Puerto Rico",
    description: "Soluciones de energía solar confiables para hogares y negocios en Puerto Rico. Libérate de los apagones con nuestros sistemas avanzados.",
    url: "https://solticeenergypr.org",
    siteName: "Soltice Energy PR",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Soltice Energy - Energía Solar Puerto Rico",
      },
    ],
    locale: "es_PR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soltice Energy PR - Energía Solar",
    description: "Independencia energética para Puerto Rico",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
