import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { icrementVisitorCount } from "./lib/data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chuck Norris Quote",
  description: "Bewerberaufgabe Miriam Würtemberger",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  icrementVisitorCount(); // Update VisitorCount, when page is built

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
