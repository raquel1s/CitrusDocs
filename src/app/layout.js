import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header"
import Footer from "./components/Footer"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Citrus Docs",
  description: "Plataforma de Documentação de Sistemas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <main className="pt-32">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
