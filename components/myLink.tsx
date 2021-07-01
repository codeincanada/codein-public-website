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
  const classes = styles();
  const listClasses = listStyles();
  return (
    <NextLink href={href} passHref>
      <ListItem
        classes={listClasses}
        ref={innerRef}
        href={href}
        component={Link}
        {...other}
      >
        <Typography classes={classes}>
          <Box component={"span"} display={"inline-block"}>
            {icon}
          </Box>
          <Box component={"span"} display={{ xs: "none", sm: "inline" }}>
            {text}
          </Box>
        </Typography>
      </ListItem>
    </NextLink>
  );
}
export default MyLink;
