import React from "react";
import { PostProps } from "../../types/PostInterface";

const PostItem:React.FunctionComponent<PostProps> = ( {post} ) => {  
  return (
    <div className="container">
      <h5>Post ID: {post.id}</h5>
      <br />
      <h3 className="centered capitalized">{post.title}</h3>
      <br /><br />
      <p className="capitalized">{post.body}</p>
    </div>
  )
}
export default PostItem;