import Link from "next/link";
import React from "react";
import { SocialMediaLinks } from "./socialMediaLinks";
import Title from "./title";

export function Header() {
  return (
    <header className="w-full md:w-2/3 m-auto flex text-gray-200">
      <span
        className={
          "font-serif bg-red-400 bg-opacity-70 hover:bg-opacity-90 hover:text-white px-8 rounded-sm cursor-pointer flex justify-center items-center"
        }
      >
        <Link href={"/posts/second-post"}>
          <Title isTopLevel>Blog</Title>
        </Link>
      </span>
      <SocialMediaLinks />
    </header>
  );
}
