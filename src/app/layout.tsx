import type { Metadata } from "next";
import './globals.css';
import { Providers } from "@/components/store/Provider";

import { Inter } from "next/font/google"
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const inter = Inter({ subsets: ["vietnamese"] });

export const metadata: Metadata = {
  title: "App Write NextJs App",
  description: "app write learning with backend as a service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
