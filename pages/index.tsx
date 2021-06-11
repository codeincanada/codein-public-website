import Layout from "../components/layout";
import TitleCA from "../components/title";
import { SocialMediaLinks } from "../components/socialMediaLinks";
import { Footer } from "../components/footer";
import { Services } from "../components/services";
export default function Home() {
  return (
    <Layout>
      <section className="flex-1 text-white text-2xl flex justify-center items-center">
        <TitleCA>
          <Services />
          <Footer />
        </TitleCA>
      </section>
      <SocialMediaLinks />
    </Layout>
  );
}
