import React from "react";
import Link from "next/link";
import { Box, Link as LinkMUI } from "@material-ui/core";
import theme from "../styles/theme";

export function Header() {
  return (
    <Box
      component="nav"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding={theme.spacing()}
    >
      <Link href={"/"}>
        <LinkMUI>
          <>
            <i className="fas fa-home" />
            Home
          </>
        </LinkMUI>
      </Link>

      <Link href={"/posts"}>
        <LinkMUI>
          <i className="fas fa-pencil-alt" />
          Blog
        </LinkMUI>
      </Link>
      <LinkMUI>
        <a
          target="_blank"
          rel="noreferrer"
          href={
            "https://join.slack.com/t/dieppe-ca/shared_invite/zt-rweiadad-D_2MIdIggWyoQOIRzX5fnw"
          }
        >
          <i className="fab fa-slack" />
          <span>Slack</span>
        </a>
      </LinkMUI>
      <LinkMUI>
        <a
          target="_blank"
          rel="noreferrer"
          href={"https://ca.linkedin.com/in/brasileiro"}
        >
          <i className="fab fa-linkedin" />
          <span>LinkedIn</span>
        </a>
      </LinkMUI>
      <LinkMUI>
        <a target="_blank" rel="noreferrer" href={"https://github.com/w-b-dev"}>
          <i className="fab fa-github" />
          <span>Github</span>
        </a>
      </LinkMUI>
      <LinkMUI>
        <a
          target="_blank"
          rel="noreferrer"
          href={"https://mobile.twitter.com/brasileiro_ca"}
        >
          <i className="fab fa-twitter" />
          <span>Twitter</span>
        </a>
      </LinkMUI>
    </Box>
  );
}
