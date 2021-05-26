import React, { ReactNode, useState } from "react";
import Head from "next/head";
import Sidebar from "./sidebar";
import { ArticleList } from "./articleList";
import { Services } from "./services";
import { TopNavigation } from "./topNavigation";
import { SocialMediaLinks } from "./socialMediaLinks";
import { Footer } from "./footer";

// https://tailwindcss.com/docs/guides/nextjs

export default function Layout({ children }: { children: ReactNode }) {
  const [url] = useState(() =>
    typeof window !== "undefined" ? window.location.hostname : ""
  );
  const [isCollapsed, setCollapsed] = useState<boolean>(true);
  const [isFirstClick, setIsFirstClick] = useState<boolean>(true);

  function handleCollapse() {
    setIsFirstClick(false);
    setCollapsed(!isCollapsed);
  }

  return (
    <div className="subpixel-antialiased transition duration-200 ease-out md:container m-auto w-screen h-screen flex flex-col">
      <Head>
        <meta name="referrer" content="origin" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Caveat&display=swap"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <title>{url}</title>
      </Head>
      <header className="w-full md:w-2/3 px-6 py-2 m-auto flex border-b-4 border-pink-400 border-opacity-20 uppercase">
        <TopNavigation />
      </header>
      <Sidebar
        footer={<Footer url={url} />}
        isCollapsed={isCollapsed}
        isFirstClick={isFirstClick}
        topSection={<Services />}
        bottomSection={<ArticleList />}
        collapseSlot={
          <button className={"button w-full"} onClick={handleCollapse}>
            {isCollapsed
              ? isFirstClick
                ? " ⬇️ Get started here ⬇️"
                : "Expand for more"
              : "Close"}
          </button>
        }
        socialMediaLinks={<SocialMediaLinks />}
      />
      <main className={"flex-1 flex flex-col"}>{children}</main>
    </div>
  );
}
