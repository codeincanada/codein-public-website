import Layout from "../components/layout";
import { Services } from "../components/services";

export default function Home() {
  /* const [url, setUrl] = useState("");
  useEffect(() => {
    setUrl(window?.location.hostname);
  }, []);*/
  return (
    <Layout>
      <Services />
    </Layout>
  );
}
