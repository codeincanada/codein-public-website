/* eslint-disable no-undef */
import { AppProps } from "next/app";
import "../styles/global.css";
import * as gtag from "../lib/gtag";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { ThemeProvider } from "@material-ui/core";
import theme from "../styles/theme";
import Head from "next/head";
import { SplitFactory } from "@splitsoftware/splitio-react";
/* Global imports should be here -- not in the Layout partial */
const isProduction =
  process.env.NODE_ENV === "production" ||
  process.env.NEXT_PUBLIC_VERCEL_ENV === "production";

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

  /* Split client keys are not secret
   * https://help.split.io/hc/en-us/articles/360019916211-API-keys */
  const splitConfig = {
    core: {
      authorizationKey: isProduction
        ? "2sbbs6b2r41rcqcm083r36j2ddna5i310v6u"
        : "1uhc1hs0805h9q8er62smamhpvoo0br6a8dc",
      key: isProduction ? "foo" : "bar",
    },
    storage: {
      type: "LOCALSTORAGE",
    },
  };

  return (
    <>
      <Head>
        <title>_App.tsx</title>
      </Head>
      <SplitFactory config={splitConfig}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          {/* <CssBaseline />*/}
          <Component {...pageProps} />
        </ThemeProvider>
      </SplitFactory>
    </>
  );
}
