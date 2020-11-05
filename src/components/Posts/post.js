import React from "react";
import PostHeader from "./PostHeader";

const Post = (props) => {
  const { post } = props;

  return (
    <div className="post-border">
      <PostHeader username={post.title} thumbnailUrl={post.url} />
      <div className="post-image-wrapper">
        <img alt="Space" className="post-image" src={post.url} />
      </div>
      {/* Is LikeSection getting all the props it needs to work correctly? */}

      {/* <LikeSection likePost={() => likePost(post.id)} /> */}
      {/* Comments also wants its props! */}
      {/* <Comments comments={props.comments} /> */}
    </div>
  );
};

export default Post;
