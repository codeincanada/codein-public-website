import React, { useContext } from "react";
import { Box, useMediaQuery } from "@material-ui/core";
import theme from "../styles/theme";
import MyLink from "./myLink";
import { makeStyles } from "@material-ui/core/styles";
import { SplitContext, useTreatments } from "@splitsoftware/splitio-react";
import { EXPERIMENTS } from "../pages";

const styles = makeStyles({
  headerRoot: {
    overflow: "auto",
    maxHeight: "100vh",
    display: "flex",
    flex: "1",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(),
    textAlign: "center",
    backgroundColor: "white",
    flexDirection: "row",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "column",
    },
  },
});

export function Header() {
  // Avoid useMediaQuery for rendering layout since it takes a bit to kick in
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const classes = styles();
  // FEATURE FLAG: Login_form
  const { isReadyFromCache, isReady } = useContext(SplitContext);
  const treatments = useTreatments([EXPERIMENTS.SOCIAL_MEDIA_LINKS]);
  const treatmentConfig = treatments[EXPERIMENTS.SOCIAL_MEDIA_LINKS];
  return (
    <Box component="nav" className={classes.headerRoot}>
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
        showLabelInMobile="Join now"
      />
      {(isReadyFromCache || isReady) &&
      (!!matches || treatmentConfig.treatment === "on") ? (
        <>
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
        </>
      ) : null}
    </Box>
  );
}
