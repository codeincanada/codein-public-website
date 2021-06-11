import TitleCA from "./title";
import React from "react";

export function SocialMediaLinks() {
  return (
    <section className={"flex flex-1 justify-around"}>
      <a
        target="_blank"
        rel="noreferrer"
        href={"https://ca.linkedin.com/in/brasileiro"}
        className="hover:text-white"
      >
        <TitleCA>linkedin</TitleCA>
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={"https://github.com/w-b-dev"}
        className="hover:text-white"
      >
        <TitleCA>github</TitleCA>
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={"https://mobile.twitter.com/brasileiro_ca"}
        className="hover:text-white"
      >
        <TitleCA>twitter</TitleCA>
      </a>
    </section>
  );
}
