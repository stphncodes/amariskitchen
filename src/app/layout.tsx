import type { Metadata } from "next";
import { Lilita_One, DM_Sans } from "next/font/google";
import "./globals.css";

const display = Lilita_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Amari's Kitchen - Great Taste, Quality Service | Maiduguri",
  description:
    "Amari's Kitchen is a proudly Nigerian food & catering brand in Maiduguri, Borno State. Cakes, pastries, fast food, natural drinks, surprise packages, catering and delivery. Order via WhatsApp: +234 902 595 6773.",
  keywords: [
    "Amari's Kitchen",
    "Maiduguri catering",
    "Nigerian food",
    "cakes Maiduguri",
    "food delivery Borno",
  ],
  openGraph: {
    title: "Amari's Kitchen - Great Taste, Quality Service",
    description:
      "Nigerian food & catering in Maiduguri: cakes, pastries, fast food, natural drinks, surprise packages and delivery.",
    type: "website",
    locale: "en_NG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <script
          // Apply the saved theme before paint so there's no flash
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem("ak-theme")==="light")document.documentElement.classList.add("light")}catch(e){}`,
          }}
        />
        <noscript>
          <style>{`.gsap-reveal,.hero-fx,.wa-float{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
