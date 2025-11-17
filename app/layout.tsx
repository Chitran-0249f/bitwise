import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BIMWise Consultants - Building Information Modeling & Engineering Services",
  description: "BIMWise Consultants is an Engineering Consultancy providing Design and BIM Services, Value Engineering, Project Management, Sustainability, and CAFM Services.",
  keywords: "BIM, Building Information Modeling, Engineering Consultancy, 3D Laser Scanning, MEP Services, Project Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
