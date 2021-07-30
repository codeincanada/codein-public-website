import React from "react";
import NextLink from "next/link";
import { Box, Link, ListItem, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
  },
});

const listStyles = makeStyles({
  root: {
    justifyContent: "center",
    textAlign: "center",
  },
});

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link
function MyLink(props: any) {
  const { href, innerRef, icon, text, ...other } = props;
  const { showLabelInMobile } = other;
  const classes = styles();
  const listClasses = listStyles();
  return (
    <NextLink href={href} passHref>
      <ListItem
        classes={listClasses}
        ref={innerRef}
        href={href}
        component={Link}
      >
        <Typography classes={classes}>
          <Box
            color={showLabelInMobile ? "crimson" : "black"}
            component={"span"}
            display={"inline-block"}
          >
            {icon}
          </Box>
          <Box
            color={showLabelInMobile ? "crimson" : "black"}
            component={"span"}
            display={{
              xs: showLabelInMobile ? "inline" : "none",
              sm: "inline",
            }}
          >
            {showLabelInMobile ? showLabelInMobile : text}
          </Box>
        </Typography>
      </ListItem>
    </NextLink>
  );
}
export default MyLink;
