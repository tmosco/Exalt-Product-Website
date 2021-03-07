import Link from "next/link";
import { useRouter } from "next/router";
import PostId from './PostId'
import PostLayout from './components/PostLayout'




const post = ({ post }) => {
  return (
    <>
    <PostLayout>

    <PostId post={post}/>
    </PostLayout>
   
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


  const ids = posts.map((post) => post.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default post;
