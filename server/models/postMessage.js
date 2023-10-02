import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String, // each post should have title
    message: String, // each post should have message
    creator: String, // ...
    tags: [String], // each post should have an array of strings
    selectedFile: String,

    likeCount:{
        type: Number,
        default: 0 // additional info
    },

    createdAt: {
        type: Date,
        default: new Date
    }
})

const postMessage = mongoose.model("postMessage", postSchema)
// created mongoose model, then on this model later we will be able to run CRUD commands

export default postMessage;

// with mongoDB we can create documents that absolutely look different without any strict unoformity,
// however mongoose allows us to do it by creting schema