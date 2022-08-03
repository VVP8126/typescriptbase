import React from "react";
import { PostProps } from "../../types/PostInterface";
import { Link } from 'react-router-dom'

const SimplifiedPostItem:React.FunctionComponent<PostProps> = ( {post} ) => {  
  return <Link to={`${post.id}`} className="postLink">{post.id}. {post.title}</Link>
}

export default SimplifiedPostItem;