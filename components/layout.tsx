import React, { ReactNode, useState } from "react";
import Head from "next/head";
import Link from "next/link";

export default function Layout({
  children,
  isHome,
}: {
  children: ReactNode;
  isHome?: boolean;
}) {
  const [url] = useState(() =>
    typeof window !== "undefined" ? window.location.hostname : ""
  );
  return (
    <div className="subpixel-antialiased  flex flex-col container m-auto w-screen h-screen">
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto&display=swap"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <title>{url}</title>
      </Head>
      {isHome ? (
        <header className="p-4 flex">
          <nav className="flex-grow flex justify-between text-gray-400 text-xs cursor-pointer">
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
              <h2 className="text-red-600">🔙</h2>
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
      <main className="flex-grow flex">{children}</main>
      <footer className=" p-3 flex justify-between align-between flex-wrap text-gray-800 text-xs">
        {url && (
          <Link href={"/"}>
            <span className="">{url}</span>
          </Link>
        )}
        <Link href={"https://unsplash.com/photos/pUGRSh9dS9M"}>
          <span
            title={"This amazing photo is from Willian Justen"}
            className=""
          >
            Photo credits
          </span>
        </Link>
      </footer>
    </div>
  );
}
