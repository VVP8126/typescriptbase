import React from "react";
import { IPost } from "../../types/PostInterface";

interface PostListParam {
    posts: IPost[];
}

const PostList: React.FunctionComponent<PostListParam> = ( {posts} ) => {
    return (
        <div>
            { posts.map(
                post => 
                <div key={post.id}>
                    <p>{post.id}. {post.title}</p>
                </div>)
            }
        </div>
    )
}
export default PostList;
