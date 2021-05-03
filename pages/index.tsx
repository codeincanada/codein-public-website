import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import Layout from "../components/layout";
// https://tailwindcss.com/docs/guides/nextjs
export default function Home() {
  const [url, setUrl] = useState("");
  useEffect(() => {
    setUrl(window?.location.hostname);
  }, []);
  return (
    <Layout isHome>
      <Head>
        <title>Homepage</title>
      </Head>
      <section className="h-full flex flex-col md:flex-row md:justify-space-between md:flex-grow">
        <main className="text-white m-auto">
          {url && (
            <div className="text-6xl md:text-9xl underline md:leading-loose">
              {url}
            </div>
          )}
          <div className="text-2xl md:text-6xl text-right italic leading-loose">
            🐠 keep swimming
          </div>
        </main>
        <aside
          className={
            "pt-1 pl-4 pr-4 pb-1 md:px-10 lg:p-10 max-h-80 md:max-h-96 overscroll-auto overflow-auto md:w-80 lg:w-96 m-3 md:m-auto mb-auto rounded-xl text-gray-300 bg-gray-700 bg-opacity-20 hover:bg-opacity-80 border border-black border-opacity-20 shadow-lg"
          }
        >
          <h2 className="font-sans text-md underline leading-loose">
            some recent posts:
          </h2>
          <ol className="md:list-decimal text-lg cursor-pointer">
            <li className="hover:text-pink-400 hover:font-bold">
              <Link
                href={"https://reactjs.org/docs/optimizing-performance.html"}
              >
                <span>Optimize your React app</span>
              </Link>
            </li>
            <li className="hover:text-pink-400 hover:font-bold">
              <Link href={"https://www.robinwieruch.de/react-hooks-fetch-data"}>
                <span>An extensive guide on how to fetch data with Hooks</span>
              </Link>
            </li>
            <li className="hover:text-pink-400 hover:font-bold">
              <Link
                href={
                  "https://epicreact.dev/one-react-mistake-thats-slowing-you-down"
                }
              >
                <span>Composition with React</span>
              </Link>
            </li>
            <li className="hover:text-pink-400 hover:font-bold">
              <Link href={"https://nextjs.org/blog/incremental-adoption"}>
                <span>How to incrementally start using Next.js</span>
              </Link>
            </li>
            <li className="hover:text-pink-400 hover:font-bold">
              <Link href={"https://tailwindcss.com/docs/cursor"}>
                <span>📌Tailwind docs</span>
              </Link>
            </li>
            <li className="hover:text-pink-400 hover:font-bold">
              <Link href={"https://nodejs.org/dist/latest/docs/api/"}>
                <span>Node.js official docs</span>
              </Link>
            </li>
            <li className="hover:text-pink-400 hover:font-bold">
              <Link
                href={
                  "https://docs.microsoft.com/en-us/azure/cosmos-db/create-cassandra-nodejs"
                }
              >
                <span>Cassandra with Node (Azure)</span>
              </Link>
            </li>
          </ol>
        </aside>
      </section>
    </Layout>
  );
}
