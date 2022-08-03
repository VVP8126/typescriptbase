import axios from "axios";
import { useEffect, useState } from "react";
import PostItemLink from "../component/item/PostItemLink";
import CommonList from "../component/list/CommonList";
import { IPost } from "../types/PostInterface";

const Routes = () => {
  
  const [posts, setPosts] = useState<IPost[]>([]);
  
  useEffect( () => { downloadPosts() }, []);

  async function downloadPosts() {
    try {
      const resp = await axios.get<IPost[]>("http://jsonplaceholder.typicode.com/posts");
      setPosts(resp.data);
    } catch {
      alert("Error while users dounload from https://jsonplaceholder.typicode.com");
    } finally {
      console.log("Data loaded from jsonplaceholder.typicode.com");
    }
  }

  return (
    <div className="container">
      <h2 className='centered'>Route Example</h2>
      <br/>
      <div className="row">
        <div className="col">
          <h3>TS supports Routes. See App.ts</h3>
          <br />
          <p>It's possible to pass parameter to other component:</p>
          <br/>
          <p>1. Create new type:</p>
          <p className="marginLeft20">type PostIdParam = &#123;</p>
          <p className="marginLeft40">id: string;</p>
          <p className="marginLeft20">&#125;</p>
          <br />
          <p>2. Get passed parameter:</p>
          <p className="marginLeft20">const &#123;id&#125; = useParams&lt;PostIdParam&gt;()</p>
          <br />
          <p><b><i>Select one post to see full information about it</i></b></p>
        </div>
        <div className="col leftBorder">
          <div className="container">
            <h4 className="centered">Post list</h4>
            <br/>
            <CommonList items={posts} 
                        renderItem={
                          (post: IPost) => 
                          <PostItemLink key={post.id} post={post} />
                        }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
  
export default Routes;
