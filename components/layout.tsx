import React, { ReactNode, useState } from "react";
import Head from "next/head";
import { Header } from "./header";

// https://tailwindcss.com/docs/guides/nextjs

export default function Layout({ children }: { children: ReactNode }) {
  const [url] = useState(() =>
    typeof window !== "undefined" ? window.location.hostname : ""
  );

  return (
    <div className="subpixel-antialiased transition duration-200 ease-out m-auto w-screen h-screen flex flex-col">
      <Head>
        <meta name="referrer" content="origin" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <title>{url}</title>
      </Head>

      <Header />

      <main className={"flex-1 flex flex-col md:container m-auto"}>
        {children}
      </main>
    </div>
  );
}
