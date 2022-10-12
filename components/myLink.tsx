import React from "react";
import { Box, Typography, Link } from "@mui/material";
import NextLink from "next/link";

// const styles = makeStyles({
//   root: {
//     display: "flex",
//     flexDirection: "column",
//   },
// });

// const listStyles = makeStyles({
//   root: {
//     justifyContent: "center",
//     textAlign: "center",
//   },
// });

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link
function MyLink(props: any) {
  const { href, icon, text, ...other } = props;
  const { showLabelInMobile } = other;
  // const classes = styles();
  // const listClasses = listStyles();
  return (
    <Link href={href} passHref component={NextLink}>
      <Typography>
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
    </Link>
  );
}
export default MyLink;
