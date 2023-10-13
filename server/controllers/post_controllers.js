import mongoose from "mongoose"
import postMessage from "../models/postMessage.js"

export const getPosts = async (req, res) =>{
    
    try {
        const postsDB = await postMessage.find() // finding posts in DB

        res.status(200).json(postsDB)
        console.log(postsDB)
    } 
    catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const createPost = async(req, res) =>{
    const reqBody = req.body; // extracting info from request body that came from frontend
    const newPost = new postMessage(reqBody) // creating new post using schema

    try {
        await newPost.save()
        res.status(201).json(newPost)
    } 
    catch (error) {
        res.status(409).json({message: error.message})
    }
}

export const updatePost = async(req, res) =>{
    try {
        const { id: _id} = req.params
        const updatedPostData = req.body

        if(!mongoose.Types.ObjectId.isValid(_id)){
            return res.status(404).send("no post with this id")
        }
        else{
            const updatedPost = await postMessage.findByIdAndUpdate(_id, updatedPostData, {new: true});

            res.json(updatedPost);
        }

    } catch (error) {
        res.status(404).json({message: error.message})
    }
}



export const deletePost = async(req, res) =>{
    try {

        const {id: _id} = req.params;
        
        if(!mongoose.Types.ObjectId.isValid(_id)){
            return res.status(404).send("no post with this id")
        }
        else{
            const deletedPost = await postMessage.findByIdAndDelete(_id);

            res.json(deletedPost);
        }
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}