import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createPost } from "../../Redux/actions/postAction";
import "./write.css";

export default function Write() {
    const history=useHistory()
    const dispatch = useDispatch();
    const user = useSelector((state) => state.userReducer.user);
    const [post, setPost] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPost(post, user._id));
        history.push('/')
    };
    const handleChange = (e) => {
        setPost({
            ...post,
            [e.target.name]: e.target.value,
        });
    };
    const handleUpload = (e) => {
        setPost({
            ...post,
            [e.target.name]: e.target.files[0],
        });
    };

    return (
        <div className="write">
            {post.picture && (
                <img
                    className="writeImg"
                    src={URL.createObjectURL(post.picture)}
                    alt=""
                />
            )}
            <form
                className="writeForm"
                onSubmit={handleSubmit}
                encType="multipart/form-data"
                action={"http://localhost:5000/api/post/createpost"}
            >
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i class="fas fa-plus"></i>
                    </label>
                    <input
                        onChange={handleUpload}
                        type="file"
                        id="fileInput"
                        style={{ display: "none" }}
                        name="picture"
                    />
                    <input
                        type="text"
                        placeholder="Title"
                        name="title"
                        className="writeInput"
                        autoFocus={true}
                        onChange={handleChange}
                    />
                </div>
                <div className="writeFormGroup">
                    <textarea
                        placeholder="Tell your story..."
                        type="text"
                        name="description"
                        className="writeInput writeText"
                        onChange={handleChange}
                    ></textarea>
                </div>
                <button
                    className="writeSubmit"
                    type="submit"
                    onClick={handleSubmit}
                >
                    Publish
                </button>
            </form>
        </div>
    );
}
