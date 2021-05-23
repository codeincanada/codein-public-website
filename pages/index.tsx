import Layout from "../components/layout";
import ListItemCA from "../components/listItem";
// https://tailwindcss.com/docs/guides/nextjs
export default function Home() {
  return (
    <Layout isHome>
      <section className="flex flex-grow">
        <aside
          id={"article-list"}
          className={
            "m-auto transition duration-200 ease-out p-10 md:rounded-xl text-gray-300 bg-opacity-10 hover:bg-opacity-50 bg-black hover:bg-black"
          }
        >
          <ol className="md:list-decimal list-inside leading-loose">
            <ListItemCA isHighlighted>
              <a
                href={
                  "https://twitter.com/iamakulov/status/1385230664648253443"
                }
                target="_blank"
                rel="noreferrer"
              >
                <span>[react] Memo and Context issues</span>
              </a>
            </ListItemCA>
            <ListItemCA isHighlighted>
              <a
                href={
                  "https://overreacted.io/a-complete-guide-to-useeffect/#tldr"
                }
                target="_blank"
                rel="noreferrer"
              >
                <span>[react] useEffect as a pro</span>
              </a>
            </ListItemCA>
            <ListItemCA isHighlighted>
              <a
                href={
                  "https://kentcdodds.com/blog/use-state-lazy-initialization-and-function-updates"
                }
                target="_blank"
                rel="noreferrer"
              >
                <span>[react] useState Lazy Initialization</span>
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
        </aside>
      </section>
    </Layout>
  );
}
