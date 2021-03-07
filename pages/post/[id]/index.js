import { useRouter } from "next/router";
import PostLayout from "../../../components/PostLayout";
import PostId from "../../../components/PostId";

import Link from "next/link";

const post = ({ post }) => {
  return (
    <>
      <PostLayout>
        <PostId post={post} />
      </PostLayout>
    </>
  );
};

export const getServerSideProps = async (context) => {
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

export default post;
