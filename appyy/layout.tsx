import Footer from "@/components/Footer";
import HeaderArea from "@/components/Menu/HeaderArea";
import MobileMenu from "@/components/Menu/MobileMenu";
import SideMenu from "@/components/Menu/SideMenu";
import TemplateScripts from "@/components/TemplateScripts";
import "@/styles/globals.css";
import "@assets/css/fontawesome.min.css";
import "@assets/css/magnific-popup.min.css";
import '@assets/css/slick.min.css';
import { faFont, leagueSpartan, poppins } from "@assets/fonts";
import "@assets/sass/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: {
    absolute: "Tnews - News & Magazine HTML Template - Blog Masonary",
    default: "Tnews - News & Magazine HTML Template - Blog Masonary",
    template: "Tnews - %s",
  },
  description: "Tnews - News & Magazine HTML Template - Blog Masonary",
  keywords: "Tnews - News & Magazine HTML Template - Blog Masonary",
  applicationName: 'Revista Prestígio',
  authors: [{
    name: "Arlindo Boa",
    url: "https://www.linkedin.com/in/bboa3/"
  }],
  robots: "index, follow",
};

const newsCategories = [
  {
    name: 'Política',
    slug: 'politica',
  },
  {
    name: 'Negócios',
    slug: 'negocios',
  },
  {
    name: 'Saúde',
    slug: 'saude',
  },
  {
    name: 'Tecnologia',
    slug: 'tecnologia',
  },
  {
    name: 'Desporto',
    slug: 'desporto',
  },
  {
    name: 'Entretenimento',
    slug: 'entretenimento',
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html className="no-js" data-theme="light" lang="pt">
        <body className={`${faFont.variable} ${leagueSpartan.className} ${poppins.className}`}>
          <main>
            {/* <PopupSubscribeArea /> */}
            <SideMenu />
            <MobileMenu categories={newsCategories} />
            <HeaderArea categories={newsCategories} />
            {children}
            <Footer />
          </main>
          <TemplateScripts />
        </body>
      </html>
    </>
  );
}
