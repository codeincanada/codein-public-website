import Head from "next/head";
import Layout from "../components/layout";
// https://tailwindcss.com/docs/guides/nextjs
export default function Home() {
  return (
    <Layout isHome>
      <Head>
        <title>Homepage</title>
      </Head>
      <section className="flex flex-grow border border-black border-opacity-20 shadow-lg">
        <aside
          id={"article-list"}
          className={
            "m-auto transition delay-150 duration-300 ease-in-out p-10 md:rounded-xl text-gray-300 bg-opacity-10 hover:bg-opacity-50 bg-black hover:bg-black"
          }
        >
          {/* <h2 className="underline leading-loose">suggested posts:</h2>*/}
          <ol className="md:list-decimal list-inside md:text-xl cursor-pointer space-y-4 divide-y divide-pink-400 divide-dotted leading-loose">
            <li className="hover:text-pink-400 filter drop-shadow transition delay-50 duration-200 ease-in-out">
              <a href={"https://reactjs.org/docs/optimizing-performance.html"}>
                <span>Optimize your React app</span>
              </a>
            </li>
            <li className="hover:text-pink-400 filter drop-shadow transition delay-50 duration-200 ease-in-out">
              <a href={"https://www.robinwieruch.de/react-hooks-fetch-data"}>
                <span>An extensive guide on how to fetch data with Hooks</span>
              </a>
            </li>
            <li className="hover:text-pink-400 filter drop-shadow transition delay-50 duration-200 ease-in-out">
              <a
                href={
                  "https://epicreact.dev/one-react-mistake-thats-slowing-you-down"
                }
              >
                <span>Composition with React</span>
              </a>
            </li>
            <li className="hover:text-pink-400 filter drop-shadow transition delay-50 duration-200 ease-in-out">
              <a href={"https://nextjs.org/blog/incremental-adoption"}>
                <span>How to incrementally start using Next.js</span>
              </a>
            </li>
            <li className="hover:text-pink-400 filter drop-shadow transition delay-50 duration-200 ease-in-out">
              <a href={"https://tailwindcss.com/docs/cursor"}>
                <span>Tailwind docs 📌</span>
              </a>
            </li>
            <li className="hover:text-pink-400 filter drop-shadow transition delay-50 duration-200 ease-in-out">
              <a href={"https://nodejs.org/dist/latest/docs/api/"}>
                <span>Node.js official docs</span>
              </a>
            </li>
            <li className="hover:text-pink-400 filter drop-shadow transition delay-50 duration-200 ease-in-out">
              <a
                href={
                  "https://docs.microsoft.com/en-us/azure/cosmos-db/create-cassandra-nodejs"
                }
              >
                <span>Cassandra with Node (Azure)</span>
              </a>
            </li>
          </ol>
        </aside>
        {/* MAIN READING PANEL*/}
        {/* <main className="flex-1 bg-white bg-opacity-20">*/}
        {/*  <div*/}
        {/*    title="keep swimming"*/}
        {/*    className="text-6xl leading-loose text-center w-full"*/}
        {/*  >*/}
        {/*    🐠*/}
        {/*  </div>*/}
        {/* </main>*/}
      </section>
    </Layout>
  );
}
