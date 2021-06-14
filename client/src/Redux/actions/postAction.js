import axios from "axios";
import { CREATE, ERROR, SELECT } from "../constants/postActionTypes";



export const createPost = (post) => async (dispatch) => {
    const formData = new FormData();
    formData.append("title", post.title);

    formData.append("picture", post.picture);
    formData.append("description", post.description);
    const config = {
        headers: {
            authorization: localStorage.getItem("token"),
        },
    };
    try {
        const resulte = await axios.post(
            "/api/post/createpost",
            formData,
            config
        );

        dispatch({ type: CREATE, payload: resulte.data }); //{UpdateProduct,msg}
        //dispatch(getPosts());
    } catch (error) {
        dispatch({ type: ERROR, payload: error.data });
    }
};

export const getPosts = () => async (dispatch) => {
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };

        // console.log(axios.get("http://localhost:5000/api/post/allpost", config));

        const posts  = await axios.get("api/post/allpost", config);

        dispatch({ type: SELECT, payload: posts.data });
    }
    catch (error) {
        
        dispatch({ type: ERROR, payload: error.data });
    }
}

// export const updatePost = (id, post) => async (dispatch) => {
//     try {
//         const { data } = await api.post(`/api/post/${id}`, post);

//         dispatch({ type: "UPDATE", payload: data });
//     } catch (error) {
//         console.log(error.message);
//     }
// };

// export const likePost = (id) => async (dispatch) => {
//     try {
//         const { data } = await api.likePost(id);

//         dispatch({ type: LIKE, payload: data });
//     } catch (error) {
//         console.log(error.message);
//     }
// };

// export const deletePost = (id) => async (dispatch) => {
//     try {
//         await api.deletePost(id);

//         dispatch({ type: DELETE, payload: id });
//     } catch (error) {
//         console.log(error.message);
//     }
// };
