import "./singlePost.css";

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b1/Doja_Cat_-_Kiss_Me_More.png/220px-Doja_Cat_-_Kiss_Me_More.png"
                    alt=""
                    className="singlePostImg"
                />
                <h1 className="singlePostTitle">
                    Lorem ipsum, consectet!
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author: <b> safak</b>
                    </span>
                    <span className="singlePostDate"> 1 hour ago </span>
                </div>
                <p className="singlePostDesc">
                    Lorem ipsum dolor sit amet, consectetur elit. Eum provident
                    dolor tenetur , officia recusandae, ratione dignissimos
                    ipsum, obcaecati nulla est repudiandae! beatae tenetur
                    placeat debitis? Suscipit.
                </p>
            </div>
        </div>
    );
}
