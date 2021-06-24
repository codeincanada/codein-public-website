import React, { ReactNode, useState } from "react";
import Head from "next/head";
import { Header } from "./header";
import { Footer } from "./footer";
import { Box } from "@material-ui/core";

export default function Layout({ children }: { children: ReactNode }) {
  const [url] = useState(() =>
    typeof window !== "undefined" ? window.location.hostname : ""
  );

  return (
    <Box display="flex" flexDirection="column" height="100vh">
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

      <Box component="header">
        <Header />
      </Box>

      <Box
        component="main"
        flex="1"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        {children}
      </Box>

      <Box component="footer">
        <Footer />
      </Box>
    </Box>
  );
}
