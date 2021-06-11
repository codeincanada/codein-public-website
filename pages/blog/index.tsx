import Head from "next/head";
import Layout from "../../components/layout";

export default function Blog() {
  return (
    <Layout>
      <Head>
        <title>I am the blog landing page</title>
      </Head>

      <main>{/* <TitleCA isTopLevel>TODO: list items here</TitleCA>*/}</main>
    </Layout>
  );
}
