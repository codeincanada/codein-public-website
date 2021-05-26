import Link from "next/link";
import React from "react";

export function Footer({ url }: { url?: string }) {
  return (
    <footer className="text-pink-400 text-xs text-center">
      {url && (
        <>
          <Link href={"/"}>
            <span className="">{url}</span>
          </Link>
          <span>&nbsp;/&nbsp;</span>
        </>
      )}
      <a
        target="_blank"
        rel="noreferrer"
        href={"https://unsplash.com/photos/pUGRSh9dS9M"}
      >
        <span
          title={"This background photo is from Unsplash/Willian Justen"}
          className="italic"
        >
          ( photo credits )
        </span>
      </a>
    </footer>
  );
}
