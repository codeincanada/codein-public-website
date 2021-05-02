import Head from "next/head";
import Link from "next/link";
import "tailwindcss/tailwind.css";
import Layout from "../components/layout";
// https://tailwindcss.com/docs/guides/nextjs
export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Homepage</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Roboto&display=swap"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <main className="container bg-gray-500 m-auto rounded-md shadow-md">
        {/* TODO #1: Export as a shared component */}
        <h1 className={"text-xl text-white p-6"}>
          Learn{" "}
          <Link href={"/posts/first-post"}>
            <span className={"text-black bg-white font-medium"}>
              with my posts
            </span>
          </Link>
        </h1>
      </main>

      {/* font-family: 'Roboto', sans-serif;*/}
      {/* font-family: 'Permanent Marker', cursive;*/}
    </Layout>
  );
}
