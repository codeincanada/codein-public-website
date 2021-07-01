import React, { ReactNode, useState } from "react";
import Head from "next/head";
import { Header } from "./header";
import { Footer } from "./footer";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import theme from "../styles/theme";

const styles = makeStyles({
  root: {
    display: "flex",
    height: "100vh",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
    },
  },
  header: {
    display: "flex",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  main: {
    maxHeight: "100vh",
    overflow: "auto",
    flex: 1,
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
      alignItems: "center",
    },
  },
  footer: {
    position: "sticky",
    bottom: 0,
    zIndex: 1000,
  },
});

export default function Layout({ children }: { children: ReactNode }) {
  const classes = styles();

  const [url] = useState(() =>
    typeof window !== "undefined" ? window.location.hostname : ""
  );
  return (
    <Box className={classes.root}>
      <Head>
        <meta name="referrer" content="origin" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <title>{url}</title>
      </Head>

      <Box component="header" className={classes.header}>
        <Header />
      </Box>

      <Box component="main" className={classes.main}>
        {children}
      </Box>

      <Box component="footer" className={classes.footer}>
        <Footer />
      </Box>
    </Box>
  );
}
