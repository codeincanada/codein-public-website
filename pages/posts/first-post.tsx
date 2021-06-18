import Image from "next/image";
import Head from "next/head";
import Layout from "../../components/layout";
import { Title } from "../../components/title";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>I am a post</title>
      </Head>

      <main>
        <Title isTopLevel>First Post</Title>
        <Image
          src={"/images/profile-pic.jpeg"}
          width={200}
          height={200}
          alt="LinkedIn default photo"
        />
      </main>
    </Layout>
  );
}
