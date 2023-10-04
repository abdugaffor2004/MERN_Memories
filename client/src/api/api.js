import axios from "axios";

export const instance = axios.create({
    baseURL: 'http://localhost:5000/',
})

export let postsApi = {
    getPosts: () =>{
        return instance.get(`posts`).then( (response) => response.data )
    },

    createPost: (formData) => instance.post(`posts`, formData).then( (response) => response.data )
}