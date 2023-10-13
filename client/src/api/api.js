import axios from "axios";



export let postsApi = {
    getPosts: () => axios.get(`http://localhost:5000/posts`).then( (response) =>  response.data ),
    createPost: (formData) => axios.post(`http://localhost:5000/posts`, formData).then( (response) => response.data ),
    updatePost: (id, updatedPostData) => axios.patch(`http://localhost:5000/posts/${id}`, updatedPostData).then( (response) => response.data ), 
    deletePost: (id) => axios.delete(`http://localhost:5000/posts/${id}`)
}