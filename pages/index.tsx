import Layout from "../components/layout";
import { Footer } from "../components/footer";
import { Services } from "../components/services";
import { useEffect, useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  useEffect(() => {
    setUrl(window?.location.hostname);
  }, []);
  return (
    <Layout>
      <section className="flex-1 flex flex-col">
        <section className="flex-1 flex flex-col justify-center items-center">
          <Services />
        </section>
        <Footer url={url} />
      </section>
    </Layout>
  );
}
