import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import postRouter from "./routes/posts.js";
import dotenv from 'dotenv';


const app = express();
dotenv.config();

app.use(bodyParser.json({limit: '30mb', extended: true})) // Limit for sending imgs
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}))
app.use(cors()) // for cross origin requests to anotherbrowser url


app.use("/posts", postRouter) // added posts prefix to all routes in postRouter

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true})
.then( () => app.listen(PORT, () => console.log( `Server is running on ${PORT}` )) ) // if connection to database is successful
.catch( (error) => console.log(error.message) )

