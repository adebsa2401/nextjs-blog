import Header from "@/components/header";
import Footer from "@/components/footer";
import React from "react";
import '@/styles/global.css';

export default function Layout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <main className="container mx-auto px-5">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}