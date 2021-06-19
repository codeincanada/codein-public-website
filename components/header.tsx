import React from "react";
import Link from "next/link";
import { TextTitle } from "./textComponents";

export function Header() {
  return (
    <header style={{ backgroundColor: "whitesmoke" }}>
      <nav
        className={
          "flex flex-1 justify-between items-center md:container md:m-auto"
        }
      >
        <span
          className={
            "bg-red-900 hover:bg-red-500 text-gray-100 hover:text-white px-4 py-1 shadow hover:shadow-xl rounded-sm cursor-pointer"
          }
        >
          <Link href={"/posts/second-post"}>
            <TextTitle>
              Blog <i className="fas fa-pencil-alt" />
            </TextTitle>
          </Link>
        </span>

        <a
          target="_blank"
          rel="noreferrer"
          href={
            "https://join.slack.com/t/dieppe-ca/shared_invite/zt-rweiadad-D_2MIdIggWyoQOIRzX5fnw"
          }
        >
          <TextTitle>
            <i className="fab fa-slack" />
            <span>Slack</span>
          </TextTitle>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={"https://ca.linkedin.com/in/brasileiro"}
        >
          <TextTitle>
            <i className="fab fa-linkedin" />
            <span>LinkedIn</span>
          </TextTitle>
        </a>
        <a target="_blank" rel="noreferrer" href={"https://github.com/w-b-dev"}>
          <TextTitle>
            <i className="fab fa-github" />
            <span>Github</span>
          </TextTitle>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={"https://mobile.twitter.com/brasileiro_ca"}
        >
          <TextTitle>
            <i className="fab fa-twitter" />
            <span>Twitter</span>
          </TextTitle>
        </a>
      </nav>
    </header>
  );
}
