import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostItem from "../component/item/PostItem";
import { IPost } from "../types/PostInterface";

type PostIdParam = {
  id: string;
}

const PostExample: React.FunctionComponent = () => {
  
  const defaultPost = {id:101, title:"Default post", body:"Some post text"};
  const [post, setPost] = useState<IPost>(defaultPost); // <| null> - can be null 
  const {id} = useParams<PostIdParam>();
  
  useEffect( () => { downloadPost() }, []);

  async function downloadPost() {
    try {
      const resp = await axios.get<IPost>("http://jsonplaceholder.typicode.com/posts/" + id);
      setPost(resp.data);
    } catch {
      alert("Error while users dounload from https://jsonplaceholder.typicode.com");
    } finally {
      console.log("Data loaded from jsonplaceholder.typicode.com");
    }
  }

  return (
    <div className="container">
      <h2 className='centered'>Post data</h2>
      <br/>
      <PostItem post={post} />
    </div>
  );
}
export default PostExample;
