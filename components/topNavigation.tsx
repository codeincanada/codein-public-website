import TitleCA from "./title";
import React from "react";

export function TopNavigation() {
  return (
    <nav className="flex-grow flex justify-between text-white text-xs md:text-base">
      {/* <span>logo here</span>*/}
      <a target="_blank" rel="noreferrer" href={"https://codein.ca"}>
        <TitleCA isTopLevel={true}>codein.ca</TitleCA>
      </a>
      <button className={"uppercase font-bold"}>Contact us</button>
    </nav>
  );
}
