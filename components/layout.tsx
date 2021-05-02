import { ReactNode } from "react";
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
    <div className="flex bg-gray-700 w-screen h-screen">
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Roboto:wght@700&display=swap"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      {isHome ? (
        <header>Home nav menu here</header>
      ) : (
        <>
          <header>I am a header</header>
          <hr />
        </>
      )}
      <main>{children}</main>
      {!isHome && (
        <>
          <hr />
          <Link href={"/"}>Back home</Link>
        </>
      )}
    </div>
  );
}
