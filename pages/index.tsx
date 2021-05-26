import Layout from "../components/layout";
import TitleCA from "../components/title";
import { SocialMediaLinks } from "../components/socialMediaLinks";
import { Footer } from "../components/footer";
export default function Home() {
  return (
    <Layout>
      <section className="flex-1 text-white text-2xl flex justify-center items-center">
        <TitleCA>
          <span className={"px-3 text-yellow-400 font-serif text-6xl"}>
            Nothing{" "}
            <span className={"line-through text-gray-500 text-5xl"}>here</span>{" "}
            <span className={"italic underline"}>yet!</span>
          </span>
          <Footer />
        </TitleCA>
      </section>
      <SocialMediaLinks />
    </Layout>
  );
}
