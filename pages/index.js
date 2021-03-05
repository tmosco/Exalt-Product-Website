import Head from "next/head";
import posts from "../data/data";
import PostList from "../components/PostList";





export default function Home({ posts }) {
  return (
    <>
      <div>
        <title>Exalt Product Website</title>
        <div>
          <PostList posts={posts} />
        </div>
      </div>
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


