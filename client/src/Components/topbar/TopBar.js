import "./topbar.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../Redux/actions/userAction";

export default function TopBar() {
    const dispatch = useDispatch();
    const isAuth = useSelector((state) => state.userReducer.isAuth);
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">
                            HOME
                        </Link>{" "}
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/">
                            ABOUT
                        </Link>{" "}
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/">
                            CONTACT
                        </Link>
                    </li>

                    <li className="topListItem">
                        {""}
                        <Link className="link" to="/write">
                            WRITE
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {isAuth ? (
                    <ul className="topList">
                        <Link className="link" to="/">
                            <li
                                className="topListItem"
                                onClick={() => dispatch(logout())}
                            >
                                LOGOUT
                            </li>
                        </Link>
                        <Link to="/settinges">
                            {" "}
                            <img src="https://img.icons8.com/windows/32/000000/contract-job.png" />{" "}
                        </Link>
                    </ul>
                ) : (
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" to="/login">
                                LOGIN
                            </Link>
                        </li>
                        <li className="topListItem">
                            <Link className="link" to="/register">
                                REGISTER
                            </Link>
                        </li>
                    </ul>
                )}

                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    );
}
