import Link from "next/link";
import { useRouter } from "next/router";

const post = ({ post }) => {
  return (
    <>
      <Link href="/">Return to article page</Link>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <br />
    </>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );

  const post = await res.json();

  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

  const posts = await res.json();
  console.log(posts);

  const ids = posts.map((post) => post.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default post;
