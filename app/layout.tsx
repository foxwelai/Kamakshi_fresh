import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Kamakshi Fresh — Farm-Fresh Vegetables for Hotels & Restaurants",
  description:
    "Kamakshi Fresh delivers the freshest vegetables directly from the market to hotels and restaurants at market rates. Subscription-based supply with WhatsApp ordering, daily price updates and direct door delivery.",
  keywords: [
    "Kamakshi Fresh",
    "vegetable supply",
    "hotels",
    "restaurants",
    "WhatsApp ordering",
    "fresh vegetables",
    "Kamakshi Catering",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
