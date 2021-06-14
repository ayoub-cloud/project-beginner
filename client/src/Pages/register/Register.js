import "./register.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register, videErrors } from "../../Redux/actions/userAction";

const Register = ({ history }) => {
    const [user, setUser] = useState({});
    const errors = useSelector((state) => state.userReducer.errors);
    console.log("user", user);
    const dispatch = useDispatch();

    const handleRegister = (e) => {
        e.preventDefault();
        dispatch(register(user));
        history.push("/settinges");
    };

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    useEffect(() => {
        return () => {
            dispatch(videErrors());
        };
    }, []);
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm" onSubmit={(e) => handleRegister(e)}>
                <label>Username</label>
                <input
                    type="text"
                    name="name"
                    className="registerInput"
                    placeholder="Enter your username..."
                    onChange={handleChange}
                />
                <label>Email</label>
                <input
                    type="text"
                    className="registerInput"
                    placeholder="Enter your email..."
                    onChange={handleChange}
                    name="email"
                />
                <label>Password</label>
                <input
                    type="password"
                    className="registerInput"
                    placeholder="Enter your password..."
                    onChange={handleChange}
                    name="password"
                />
                <button className="registerButton" onClick={handleRegister}>
                    Register
                </button>
            </form>
            <button className="registerLoginButton">
                <Link className="link" to="/login">
                    Login{" "}
                </Link>
            </button>
        </div>
    );
};

export default Register;
