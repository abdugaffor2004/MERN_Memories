import express from "express";

const postRouter = express.Router();

postRouter.get('/', (req, res) =>{
    res.send('This works')
})

export default postRouter;