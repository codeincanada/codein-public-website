import React from "react";
import NextLink from "next/link";
import MuiLink from "@material-ui/core/Link";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
  },
});

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link
function MyLink(props: any) {
  const { href, className, innerRef, icon, text, component, ...other } = props;
  const classes = styles();
  return (
    <NextLink href={href} passHref>
      <MuiLink
        className={className}
        ref={innerRef}
        href={href}
        component={component}
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
      </MuiLink>
    </NextLink>
  );
}
export default MyLink;
