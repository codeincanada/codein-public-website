import { AppProps } from "next/app";
import "../styles/global.css";
import * as gtag from "../lib/gtag";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { ThemeProvider } from "@material-ui/core";
import theme from "../styles/theme";
import Head from "next/head";
/* Global imports should be here -- not in the Layout partial */
// eslint-disable-next-line no-undef
const isProduction = process.env.NODE_ENV === "production";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      if (isProduction) gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>_App.tsx</title>
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        {/* <CssBaseline />*/}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
