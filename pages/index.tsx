import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
// https://tailwindcss.com/docs/guides/nextjs
export default function Home() {
  return (
    <Layout isHome>
      <Head>
        <title>Homepage</title>
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
    </Layout>
  );
}
