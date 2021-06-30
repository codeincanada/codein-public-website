import React from "react";
import { Box, useMediaQuery } from "@material-ui/core";
import theme from "../styles/theme";
import MyLink from "./myLink";

export function Header() {
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Box
      component="nav"
      display="flex"
      flexDirection={matches ? "column" : "row"}
      flex={"1"}
      alignItems="center"
      justifyContent="space-around"
      padding={theme.spacing()}
      textAlign="center"
      bgcolor={"#fff"}
    >
      <MyLink href={"/"} icon={<i className="fas fa-home" />} text="Home" />
      <MyLink
        href={"/posts/first-post"}
        icon={<i className="fas fa-pencil-alt" />}
        text="Blog"
      />
      <MyLink
        href={
          "https://join.slack.com/t/dieppe-ca/shared_invite/zt-rweiadad-D_2MIdIggWyoQOIRzX5fnw"
        }
        target="_blank"
        rel="noreferrer"
        icon={<i className="fab fa-slack" />}
        text="Slack"
      />
      <MyLink
        target="_blank"
        rel="noreferrer"
        href={"https://ca.linkedin.com/in/brasileiro"}
        icon={<i className="fab fa-linkedin" />}
        text="LinkedIn"
      />
      <MyLink
        target="_blank"
        rel="noreferrer"
        href={"https://github.com/w-b-dev"}
        icon={<i className="fab fa-github" />}
        text="Github"
      />
      <MyLink
        target="_blank"
        rel="noreferrer"
        href={"https://mobile.twitter.com/brasileiro_ca"}
        icon={<i className="fab fa-twitter" />}
        text="Twitter"
      />
    </Box>
  );
}
