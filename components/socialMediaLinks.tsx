import Title from "./title";
import React from "react";

export function SocialMediaLinks() {
  return (
    // <section >
    <nav
      className={"flex flex-1 justify-around items-center underline font-serif"}
    >
      <a
        target="_blank"
        rel="noreferrer"
        href={"https://ca.linkedin.com/in/brasileiro"}
        className="hover:text-white"
      >
        <Title>LinkedIn</Title>
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={"https://github.com/w-b-dev"}
        className="hover:text-white"
      >
        <Title>Github</Title>
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={"https://mobile.twitter.com/brasileiro_ca"}
        className="hover:text-white"
      >
        <Title>Twitter</Title>
      </a>
    </nav>
    // </section>
  );
}
