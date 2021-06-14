import { Link } from "react-router-dom";
import "./post.css";

export default function Post({ post }) {
    return (
        <div className="post">
            <img className="postImg" src={} alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">
                        <Link className="link" to="/posts?cat=">
                       {post && post.type}
                        </Link>
                    </span>
                </div>
                <span className="postTitle">
                    <Link to="/post/abc" className="link">
                        {post && post.title}
           
                    </Link>
                </span>
                <hr />
                <span className="postDate">{post && post. timestamps}</span>
            </div>
            <p className="postDesc">
               {post && post.description}
            </p>
        </div>
    );
}
