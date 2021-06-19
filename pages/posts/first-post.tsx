import Head from "next/head";
import Layout from "../../components/layout";
import ProTip from "../../components/proTip";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>I am a post</title>
      </Head>

      <ProTip />
    </Layout>
  );
}
