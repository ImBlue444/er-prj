import React from "react";
import Navbar from "./Navbar";
import Head from "next/head";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
