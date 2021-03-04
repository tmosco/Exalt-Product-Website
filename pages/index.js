import Head from "next/head";


import PostList from "../components/PostList";




export default function Home({ posts}) {
 
  return (
    <>
      <div>
        <title>Elite Deteevvvv</title>
        <div>
         
          <PostList posts ={posts}/>
          
        </div>


      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:3000/api/posts`)
  const posts = await res.json()

  return {
    props:{
      posts
    }
  }
};