import Link from "next/link";
import Image from "next/image";
import postStyle from "../styles/Post.module.css";

const PostItem = ({ post }) => {


  return (
    <>
      {post.id === 1 ? (
        <div className={postStyle.firstpost}>
         
            <Image
              src={`/pic${post.id}.jpg`}
              alt="Picture of the author"
              width={700}
              height={383.41}
              className={postStyle.firstImage_2}
              layout="intrinsic"
            />
        
          <div className={postStyle.firstMessage}> 
            <div className={postStyle.firstDate}>
              <p className={postStyle.firstProduct} > Product - </p>
              <p > {post.date}</p>
            </div>
            <Link href="/post/[id]" as={`/post/${post.id}`}>
              <a className={postStyle.firstLink}>{post.Title}</a>
            </Link>

            <div className={postStyle.firstText}>{post.Text}</div>
            <div className={postStyle.firstNameCard}>
              <Image
                src="/placeholder.png"
                alt="Picture of the author"
                width={63}
                height={63}
                layout="intrinsic"
              />
              <div className={postStyle.firstInfo}>
                <div className={postStyle.firstInfo_1}>{post.Name}</div>
                <div className={postStyle.firstOccupation}>
                  {post.ocuppation}
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={postStyle.total}>
          <div className={postStyle.post}>
            <Image
              src={`/pic${post.id}.jpg`}
              alt="Picture of the author"
              width={409}
              height={251}
              className={postStyle.image_2}
              layout="intrinsic"
            />
            <div className={postStyle.firstDate}>
              <p className={postStyle.product}> Product - </p>
              <p> {post.date}</p>
            </div>
            <Link href="/post/[id]" as={`/post/${post.id}`}>
              <a className={postStyle.link}>{post.Title}</a>
            </Link>

            <div className={postStyle.text}>{post.Text}</div>
            <div className={postStyle.nameCard}>
              <Image
                src="/placeholder.png"
                alt="Picture of the author"
                width={75}
                height={75}
                layout="intrinsic"
              />
              <div className={postStyle.firstInfo}>
                <div className={postStyle.firstInfo_1}>{post.Name}</div>
                <div className={postStyle.firstOccupation}>{post.ocuppation}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PostItem;
