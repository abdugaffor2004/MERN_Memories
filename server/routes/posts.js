import express from "express";
import { getPosts, createPost } from "../controllers/post_controllers.js";

const postRouter = express.Router();

postRouter.get('/', getPosts)
postRouter.post('/', createPost)

export default postRouter;