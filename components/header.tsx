import React from "react";
import Link from "next/link";
import { Title } from "./title";

export function Header() {
  return (
    <header
      className="w-full m-auto flex text-black p-2 shadow-lg"
      style={{ backgroundColor: "whitesmoke" }}
    >
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
            <Title>
              Blog <i className="fas fa-pencil-alt" />
            </Title>
          </Link>
        </span>

        <a
          target="_blank"
          rel="noreferrer"
          href={
            "https://join.slack.com/t/dieppe-ca/shared_invite/zt-rweiadad-D_2MIdIggWyoQOIRzX5fnw"
          }
        >
          <Title>
            <i className="fab fa-slack" />
            <span className="hidden md:inline pl-2">Slack</span>
          </Title>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={"https://ca.linkedin.com/in/brasileiro"}
        >
          <Title>
            <i className="fab fa-linkedin" />
            <span className="hidden md:inline pl-2">LinkedIn</span>
          </Title>
        </a>
        <a target="_blank" rel="noreferrer" href={"https://github.com/w-b-dev"}>
          <Title>
            <i className="fab fa-github" />
            <span className="hidden md:inline pl-2">Github</span>
          </Title>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={"https://mobile.twitter.com/brasileiro_ca"}
        >
          <Title>
            <i className="fab fa-twitter" />
            <span className="hidden md:inline pl-2">Twitter</span>
          </Title>
        </a>
      </nav>
    </header>
  );
}
