import Post from "../post/Post";
import "./posts.css";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../Redux/actions/postAction";
import { useEffect } from "react";

export default function Posts() {
  const posts = useSelector((state) => state.postsReducer.posts);
console.log('posts',posts)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div className="posts">
      
       {posts &&
        posts.posts.map(post=>
        <Post post={post}/> )}
        
    </div>
  );
}
