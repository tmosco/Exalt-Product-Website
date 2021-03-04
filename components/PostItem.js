import Link from "next/link";
import Image from "next/image";
import postStyle from "../styles/Post.module.css";


const PostItem = ({ post }) => {
  return (
    <>
      <div className={postStyle.total}>
       
        <div className= {postStyle.post}>
          
          <Image
            src={`/pic${post.id}.jpg`}
            alt="Picture of the author"
            width={400}
            height={350}
            className={postStyle.image_2}
            layout="intrinsic"
          />
          <div className ={postStyle.date}><p className={postStyle.product}> Product - </p><p> {post.date}</p></div>
          <Link href="/post/[id]" as={`/post/${post.id}`}>
            <a className={postStyle.link}>
              {post.Title}
            </a>
          </Link>

         

          <div className = {postStyle.text}>{post.Text}</div>
          <div className={postStyle.nameCard}>
            <Image
              src="/placeholder.png"
              alt="Picture of the author"
              width={75}
              height={75}
              layout="intrinsic"
            />
            <div className={postStyle.info}>
              <div className={postStyle.info_1}>{post.Name}</div>
              <div className={postStyle.occupation}>{post.occupation}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostItem;
