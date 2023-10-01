import express from "express";
import { getPosts } from "../controllers/post_controllers.js";

const postRouter = express.Router();

postRouter.get('/', getPosts)

export default postRouter;