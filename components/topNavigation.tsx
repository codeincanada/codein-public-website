import Link from "next/link";
import React from "react";
import { SocialMediaLinks } from "./socialMediaLinks";
import TitleCA from "./title";

export function TopNavigation() {
  return (
    <nav className="flex-1 flex justify-between text-gray-200 hover:text-gray-400">
      <span
        className={
          "font-serif bg-red-400 bg-opacity-70 hover:bg-opacity-90 hover:text-white px-8 rounded-sm cursor-pointer"
        }
      >
        <Link href="/blog/first-post">
          <TitleCA isTopLevel>Blog</TitleCA>
        </Link>
      </span>
      <SocialMediaLinks />
    </nav>
  );
}
