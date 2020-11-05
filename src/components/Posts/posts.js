import React from "react";
import Post from "./posts.js";
import "./posts.css";

const Posts = (props) => {
  //Set up the pass
  const { likePost, posts } = props;
  console.log(posts);

  //Export it out
  return (
    <div>
      {posts.map((item) => {
        return <Post post={item} likePost={likePost} />;
      })}
    </div>
  );
};
export default Posts;
