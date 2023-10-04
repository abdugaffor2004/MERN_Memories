import axios from "axios";



export let postsApi = {
    getPosts: () => axios.get(`http://localhost:5000/posts`).then( (response) =>  response.data ),

    createPost: (formData) => axios.post(`http://localhost:5000/posts`, formData).then( (response) => response.data )
}