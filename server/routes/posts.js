import express from "express";
import { getPosts, createPost, updatePost } from "../controllers/post_controllers.js";

const postRouter = express.Router();

postRouter.get('/', getPosts)
postRouter.post('/', createPost)
postRouter.patch('/:id', updatePost)

export default postRouter;