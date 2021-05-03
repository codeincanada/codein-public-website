import React, { ReactNode } from "react";
import Head from "next/head";
import Link from "next/link";

export default function Layout({
  children,
  isHome,
}: {
  children: ReactNode;
  isHome?: boolean;
}) {
  return (
    <div className="subpixel-antialiased flex flex-col container m-auto w-screen h-screen">
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto&display=swap"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      {isHome ? (
        <header className="p-4 flex">
          <nav className="flex-grow flex justify-between text-gray-400 text-sm font-serif cursor-pointer">
            <Link href={"https://ca.linkedin.com/in/brasileiro"}>
              <h2>LinkedIn</h2>
            </Link>
            <Link href={"https://github.com/w-b-dev"}>
              <h2>Github</h2>
            </Link>
            <Link href={"https://mobile.twitter.com/brasileiro_ca"}>
              <h2>🐦</h2>
            </Link>
            <Link href={"https://astra.datastax.com"}>
              <h2 className="text-white">also️ working on...</h2>
            </Link>
          </nav>
        </header>
      ) : (
        <>
          <header className="p-4 flex">
            <nav className="flex-grow flex justify-between text-gray-700">
              <Link href={"/"}>
                <h2>🔙 home</h2>
              </Link>
            </nav>
          </header>
          <hr />
        </>
      )}
      <main className="container flex-grow">{children}</main>
      <footer className="w-full text-right md:text-left">
        <Link href={"https://unsplash.com/photos/pUGRSh9dS9M"}>
          <span
            title={"This amazing photo is from Willian Justen"}
            className="text-gray-500 md:text-white text-xs md:text-md"
          >
            Photo credits
          </span>
        </Link>
      </footer>
    </div>
  );
}
