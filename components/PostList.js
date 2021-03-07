import { useState } from "react";
import postStyle from "../styles/Post.module.css";
import PostItem from "./PostItem";

var _ = require("lodash");

const PostList = ({ posts }) => {
  const Limit = 9;

  const [showMore, setShowMore] = useState(true);
  const [list, setList] = useState(_.slice(posts, 0, Limit));
  const [index, setIndex] = useState(Limit);

  const loadMore = () => {
    const newIndex = index + Limit;
    const newShowMore = newIndex < posts.length - 1;
    const newList = _.concat(list, _.slice(posts, index, newIndex));
    setIndex(newIndex);
    setList(newList);
    setShowMore(newShowMore);
  };


  return (
    <>
      <div className={postStyle.wrapper}>
        {list.map((postDetails) => (
          <>
  
          <PostItem key={postDetails.id} post={postDetails}/>
          </>
        ))}
      </div>

      {showMore && <button className={postStyle.loadButton} onClick={loadMore}> Load More </button>}
    </>
  );
};

export default PostList;
