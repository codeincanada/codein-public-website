import Head from "next/head";
import Layout from "../../components/layout";
import ArticleList from "../../components/articleList";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Blog</title>
      </Head>

      <ArticleList />
    </Layout>
  );
}
