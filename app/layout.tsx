import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PhytoNatural | Physician-Founded Botanical Therapeutics",
  description:
    "PhytoNatural is the physician-founded standard for botanical therapeutics. Integrating nature and evidence-based medicine with clinical research partnerships.",
  keywords: [
    "botanical therapeutics",
    "physician-led",
    "evidence-based medicine",
    "Vireo Growth",
    "clinical research",
  ],
  openGraph: {
    title: "PhytoNatural | Physician-Founded Botanical Therapeutics",
    description:
      "The physician-founded standard for botanical therapeutics. Strategic alliance with Vireo Growth Inc.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${merriweather.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
