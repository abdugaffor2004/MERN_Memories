import axios from "axios";

export const instance = axios.create({
    baseURL: 'http://localhost:5000/',
    withCredentials: true
})

export let postsApi = {
    getPosts: () =>{
        return instance.get(`posts`).then( (response) => response.data )
    }
}