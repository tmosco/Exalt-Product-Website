import Head from "next/head";
import posts from "../data/data";
import PostList from "../components/PostList";
import Layout from "../components/Layout";

export default function Home({ posts }) {
  return (
    <>
      <Layout>
        <div>
          <title>Exalt Product Website</title>
          <div>
            <PostList posts={posts} />
          </div>
        </div>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`https://api.jsonbin.io/b/604243710866664b10895086`);
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};
