import TitleCA from "./title";
import React from "react";

export function SocialMediaLinks() {
  return (
    <section
      className={"flex font-serif text-pink-800 text-2xl justify-around"}
    >
      <a
        target="_blank"
        rel="noreferrer"
        href={"https://ca.linkedin.com/in/brasileiro"}
      >
        <TitleCA>linkedin</TitleCA>
      </a>
      <a target="_blank" rel="noreferrer" href={"https://github.com/w-b-dev"}>
        <TitleCA>github</TitleCA>
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={"https://mobile.twitter.com/brasileiro_ca"}
      >
        <TitleCA>twitter</TitleCA>
      </a>
    </section>
  );
}
