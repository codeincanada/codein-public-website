import React from "react";

export function Footer({ url }: { url?: string }) {
  return (
    <footer className="text-pink-400 text-xs text-center flex justify-around">
      <div
        className={
          "text-red-400 font-bold select-none pointer-events-none whitespace-nowrap"
        }
      >
        Proudly made in Canada 🇨🇦 in 2021
      </div>
      <a
        target="_blank"
        rel="noreferrer"
        href={"https://unsplash.com/photos/pUGRSh9dS9M"}
      >
        <div
          title={"This background photo is from Unsplash/Willian Justen"}
          className="px-3 italic text-gray-200 whitespace-nowrap"
        >
          Credits for the photo.
        </div>
      </a>
      {/* {url && (
        <>
          <span>🔥</span>
          <Link href={url}>
            <span className="font-serif pl-1 text-gray-200 uppercase">
              {url}
            </span>
          </Link>
        </>
      )}*/}
    </footer>
  );
}
