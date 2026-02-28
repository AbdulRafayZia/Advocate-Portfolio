import type { Metadata } from "next";
import { Playfair_Display, Inter, Noto_Nastaliq_Urdu } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const notoUrdu = Noto_Nastaliq_Urdu({
  variable: "--font-urdu",
  subsets: ["arabic"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Noori Legal Advisor | Advocate Hafiz Ahmad Raza — Legal & Tax Consultancy",
  description: "Trusted legal and tax consultancy firm in Sheikhupura, Punjab. Specialized services in Criminal Cases, Civil Cases, Tax Matters, Property Law, and Overseas Pakistani Services.",
  keywords: ["legal advisor", "tax consultancy", "advocate", "Punjab Bar Council", "property law", "overseas Pakistani services", "Sheikhupura"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} ${notoUrdu.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
