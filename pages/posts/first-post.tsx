import Image from "next/image";
import Head from "next/head";
import Layout from "../../components/layout";
import { TextTitle } from "../../components/textComponents";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>I am a post</title>
      </Head>

      <main>
        <TextTitle isTopLevel>First Post</TextTitle>
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
