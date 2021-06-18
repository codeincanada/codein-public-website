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
            "bg-red-400 bg-opacity-70 hover:bg-opacity-90 text-white hover:text-white px-4 py-1 shadow hover:shadow-xl rounded-sm cursor-pointer"
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
          href={"https://dieppe-ca.slack.com/"}
          className="hover:text-white"
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
          className="hover:text-white"
        >
          <Title>
            <i className="fab fa-linkedin" />
            <span className="hidden md:inline pl-2">LinkedIn</span>
          </Title>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={"https://github.com/w-b-dev"}
          className="hover:text-white"
        >
          <Title>
            <i className="fab fa-github" />
            <span className="hidden md:inline pl-2">Github</span>
          </Title>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={"https://mobile.twitter.com/brasileiro_ca"}
          className="hover:text-white"
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
