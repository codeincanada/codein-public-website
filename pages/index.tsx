import Layout from "../components/layout";
import ArticleList from "../components/articleList";

export default function Home() {
  /* const [url, setUrl] = useState("");
  useEffect(() => {
    setUrl(window?.location.hostname);
  }, []);*/
  return (
    <Layout>
      <ArticleList />
    </Layout>
  );
}
