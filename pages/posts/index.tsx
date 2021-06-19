import ListItemCA from "../../components/listItem";
import React from "react";
import Head from "next/head";
import Layout from "../../components/layout";

export function ArticleList() {
  return (
    <Layout>
      <Head>
        <title>I am a post</title>
      </Head>
      <section>
        <h2>Posts and links:</h2>
        <ol>
          <ListItemCA>
            <a
              href={"https://twitter.com/iamakulov/status/1385230664648253443"}
              target="_blank"
              rel="noreferrer"
            >
              <span>Memo and Context issues</span>
            </a>
          </ListItemCA>
          <ListItemCA>
            <a
              href={
                "https://overreacted.io/a-complete-guide-to-useeffect/#tldr"
              }
              target="_blank"
              rel="noreferrer"
            >
              <span>useEffect as a pro</span>
            </a>
          </ListItemCA>
          <ListItemCA>
            <a
              href={
                "https://kentcdodds.com/blog/use-state-lazy-initialization-and-function-updates"
              }
              target="_blank"
              rel="noreferrer"
            >
              <span>useState Lazy Initialization</span>
            </a>
          </ListItemCA>
          <ListItemCA>
            <a
              href={
                "https://kentcdodds.com/blog/how-to-write-a-react-component-in-typescript"
              }
              target="_blank"
              rel="noreferrer"
            >
              <span>React➕️Typescript best practices</span>
            </a>
          </ListItemCA>
          <ListItemCA>
            <a
              href={"https://www.robinwieruch.de/react-hooks-fetch-data"}
              target="_blank"
              rel="noreferrer"
            >
              <span>An extensive guide on how to fetch data with Hooks</span>
            </a>
          </ListItemCA>
          <ListItemCA>
            <a
              href={"https://reactjs.org/docs/optimizing-performance.html"}
              target="_blank"
              rel="noreferrer"
            >
              <span>Optimize your React app</span>
            </a>
          </ListItemCA>
          <ListItemCA>
            <a
              href={"https://tailwindcss.com/docs/cursor"}
              target="_blank"
              rel="noreferrer"
            >
              <span>Tailwind docs 📌</span>
            </a>
          </ListItemCA>
          <ListItemCA>
            <a
              href={"https://nextjs.org/blog/incremental-adoption"}
              target="_blank"
              rel="noreferrer"
            >
              <span>How to incrementally start using Next.js</span>
            </a>
          </ListItemCA>

          <ListItemCA>
            <a
              href={"https://nodejs.org/dist/latest/docs/api/"}
              target="_blank"
              rel="noreferrer"
            >
              <span>Node.js official docs</span>
            </a>
          </ListItemCA>
          <ListItemCA>
            <a
              href={
                "https://docs.microsoft.com/en-us/azure/cosmos-db/create-cassandra-nodejs"
              }
              target="_blank"
              rel="noreferrer"
            >
              <span>Cassandra with Node (Azure)</span>
            </a>
          </ListItemCA>

          <ListItemCA>
            <a
              href={
                "https://epicreact.dev/one-react-mistake-thats-slowing-you-down"
              }
              target="_blank"
              rel="noreferrer"
            >
              <span>Composition with React ✅</span>
            </a>
          </ListItemCA>
        </ol>
      </section>
    </Layout>
  );
}

export default ArticleList;
