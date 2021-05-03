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
      <section className="flex flex-col flex-grow p-1 md:p-10">
        {/* <main className="text-white">*/}
        {/*  <div*/}
        {/*    title="keep swimming"*/}
        {/*    className="text-6xl leading-loose text-center w-full"*/}
        {/*  >*/}
        {/*    🐠*/}
        {/*  </div>*/}
        {/* </main>*/}
        <aside
          className={
            "transition delay-150 duration-300 ease-in-out pt-1 pl-4 pr-4 pb-1 md:px-10 lg:p-10 m-auto md:rounded-xl text-gray-300 bg-opacity-10 hover:bg-opacity-50 bg-black hover:bg-black border border-black border-opacity-20 shadow-lg"
          }
        >
          {/* <h2 className="underline leading-loose">suggested posts:</h2>*/}
          <ol className="md:list-decimal md:text-xl cursor-pointer space-y-4 divide-y divide-pink-400 divide-dotted leading-loose">
            <li className="hover:text-pink-400 filter drop-shadow transition delay-50 duration-200 ease-in-out">
              <Link
                href={"https://reactjs.org/docs/optimizing-performance.html"}
              >
                <span>Optimize your React app</span>
              </Link>
            </li>
            <li className="hover:text-pink-400 filter drop-shadow transition delay-50 duration-200 ease-in-out">
              <Link href={"https://www.robinwieruch.de/react-hooks-fetch-data"}>
                <span>An extensive guide on how to fetch data with Hooks</span>
              </Link>
            </li>
            <li className="hover:text-pink-400 filter drop-shadow transition delay-50 duration-200 ease-in-out">
              <Link
                href={
                  "https://epicreact.dev/one-react-mistake-thats-slowing-you-down"
                }
              >
                <span>Composition with React</span>
              </Link>
            </li>
            <li className="hover:text-pink-400 filter drop-shadow transition delay-50 duration-200 ease-in-out">
              <Link href={"https://nextjs.org/blog/incremental-adoption"}>
                <span>How to incrementally start using Next.js</span>
              </Link>
            </li>
            <li className="hover:text-pink-400 filter drop-shadow transition delay-50 duration-200 ease-in-out">
              <Link href={"https://tailwindcss.com/docs/cursor"}>
                <span>Tailwind docs 📌</span>
              </Link>
            </li>
            <li className="hover:text-pink-400 filter drop-shadow transition delay-50 duration-200 ease-in-out">
              <Link href={"https://nodejs.org/dist/latest/docs/api/"}>
                <span>Node.js official docs</span>
              </Link>
            </li>
            <li className="hover:text-pink-400 filter drop-shadow transition delay-50 duration-200 ease-in-out">
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
