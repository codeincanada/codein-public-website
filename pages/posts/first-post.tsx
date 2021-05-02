import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>I am a post</title>
      </Head>
      <main>
        {/* TODO #1: Export as a shared component */}
        <h1 className={"text-xl text-white p-6"}>First Post</h1>
        <Image
          src={"/images/profile-pic.jpeg"}
          width={200}
          height={200}
          alt="LinkedIn default photo"
        />
        <hr />
        <Link href={"/"}>Back home</Link>
      </main>
    </Layout>
  );
}
