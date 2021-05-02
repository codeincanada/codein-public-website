import { AppProps } from "next/app";
import "../styles/global.css";
import "tailwindcss/tailwind.css";
/* Global imports should be here -- not in the Layout partial */
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
