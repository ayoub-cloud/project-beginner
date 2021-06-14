// import Post from "../../components/header/post/Post"
import SideBar from "../../components/sidebar/SideBar";
import SinglePost from "../../components/singlePost/SinglePost";
import "./single.css";

export default function Single() {
    return (
        <div className="single">
            <SinglePost />
            <SideBar />
        </div>
    );
}
