import Layout from "../components/layout";
import { Footer } from "../components/footer";
import { Services } from "../components/services";

export default function Home() {
  /* const [url, setUrl] = useState("");
  useEffect(() => {
    setUrl(window?.location.hostname);
  }, []);*/
  return (
    <Layout>
      <section>
        <section>
          <Services />
        </section>
        <Footer />
      </section>
    </Layout>
  );
}
