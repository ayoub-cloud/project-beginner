import "./home.css";

import Header from "../../Components/header/Header";

import SideBar from "../../Components/sidebar/SideBar";
import Posts from "../../Components/posts/Posts";
import axios from "axios"
import { useEffect, useState } from "react";
import { getPosts } from "../../Redux/actions/postAction";
import { useDispatch } from "react-redux";
export default function Home() {
    // const [posts,setPosts] = useState([]);
    // const dispatch = useDispatch()
    // useEffect(() => {
    //   dispatch(getPosts()) 
      
    // }, [])
    return (
        <>
            <Header />
            <div className="home">
                <Posts />
                <SideBar />
            </div>
        </>
    );
}
