import React, { useState } from "react";
import SideBar from "../../Components/sidebar/SideBar";
import "./settings.css";
import { useSelector, useDispatch } from "react-redux";
import { update } from "../../Redux/actions/userAction";
export default function Settings() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.userReducer.user);
    const [editUser, setEditUser] = useState({});
    const handlChange = (e) => {
        setEditUser({ ...editUser, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(update(user._id, editUser));
    };
    return !user ? (
        <h1>Loading</h1>
    ) : (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img src="" alt="" />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon far fa-user-circle"></i>
                        </label>
                        <input
                            type="file"
                            id="fileInput"
                            style={{ display: "none" }}
                        />
                    </div>
                    <label>Username</label>
                    <input
                        type="text"
                        name="name"
                        defaultValue={user.name}
                        placeholder="name"
                        onChange={handlChange}
                    />
                    <label>Email</label>
                    <input
                        autoFocus={true}
                        type="email"
                        name="email"
                        defaultValue={user.email}
                        placeholder="email@gmail.com"
                        onChange={handlChange}
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        defaultValue={user.password}
                        onChange={handlChange}
                    />
                    <button className="settingsSubmit" onClick={handleSubmit}>
                        Update
                    </button>
                </form>
            </div>
            <SideBar />
        </div>
    );
}
