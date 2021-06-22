import React from "react";
import NextLink from "next/link";
import MuiLink from "@material-ui/core/Link";
import { Box, Typography } from "@material-ui/core";

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link
function MyLink(props: any) {
  const { href, className, innerRef, icon, text, component, ...other } = props;
  return (
    <NextLink href={href} passHref>
      <MuiLink
        className={className}
        ref={innerRef}
        href={href}
        component={component}
        {...other}
      >
        <Typography color="primary">
          <Box
            component={"span"}
            display={"inline-block"}
            paddingRight={{ xs: 0, sm: 2 }}
          >
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
