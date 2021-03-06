import Link from "next/link";
import Image from "next/image";
import postStyle from "../styles/Post.module.css";


const FirstPost = ({ post }) => {
  return (
    <>

       
        <div className= {postStyle.firstPost}>
          
          <Image
            src={`/pic${post.id}.jpg`}
            alt="Picture of the author"
            width={623}
            height={383.41}
            className={postStyle.firstimage_2}
            layout="intrinsic"
          />
          <div className ={postStyle.firstdate}><p className={postStyle.firstproduct}> Product - </p><p> {post.date}</p></div>
          <Link href="/post/[id]" as={`/post/${post.id}`}>
            <a className={postStyle.firstlink}>
              {post.Title}
            </a>
          </Link>

         

          <div className = {postStyle.firsttext}>{post.Text}</div>
          <div className={postStyle.firstnameCard}>
            <Image
              src="/placeholder.png"
              alt="Picture of the author"
              width={75}
              height={75}
              layout="intrinsic"
            />
            <div className={postStyle.firstinfo}>
              <div className={postStyle.firstinfo_1}>{post.Name}</div>
              <div className={postStyle.firstoccupation}>{post.occupation}</div>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default FirstPost;
