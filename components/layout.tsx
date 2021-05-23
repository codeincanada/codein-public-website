import React, { ReactNode, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import TitleCA from "./title";

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
    <div className="subpixel-antialiased font-serif flex flex-col container m-auto w-screen h-screen">
      <Head>
        <meta name="referrer" content="origin" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Raleway:wght@300&display=swap"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <title>{url}</title>
      </Head>
      {/* {isHome ? (*/}
      <header className="w-full md:w-2/3 px-6 py-2 m-auto flex border-b-4 border-pink-400 border-opacity-20 uppercase">
        <nav className="flex-grow flex justify-between text-gray-400 text-xs md:text-base">
          <a
            target="_blank"
            rel="noreferrer"
            href={"https://ca.linkedin.com/in/brasileiro"}
          >
            <TitleCA>linkedin</TitleCA>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={"https://github.com/w-b-dev"}
          >
            <TitleCA>github</TitleCA>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={"https://mobile.twitter.com/brasileiro_ca"}
          >
            <TitleCA>twitter</TitleCA>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={"https://astra.datastax.com"}
          >
            <TitleCA>Serverless DB</TitleCA>
          </a>
        </nav>
      </header>
      <main className="flex-grow flex">{children}</main>
      <footer className="text-pink-400 p-3 flex justify-end align-center flex-wrap text-gray-800 text-xs">
        {url && (
          <Link href={"/"}>
            <span className="">{url}</span>
          </Link>
        )}
        <span>&nbsp;/&nbsp;</span>
        <a
          target="_blank"
          rel="noreferrer"
          href={"https://unsplash.com/photos/pUGRSh9dS9M"}
        >
          <span
            title={"This amazing photo is from Willian Justen"}
            className=""
          >
            Photo credits
          </span>
        </a>
      </footer>
    </div>
  );
}
