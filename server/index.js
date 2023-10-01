import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";


const app = express();

app.use(bodyParser.json({limit: '30mb', extended: true})) // Limit for sending imgs
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}))
app.use(cors()) // for cross origin requests to anotherbrowser url

const CONNECTION_URL = "mongodb+srv://guraba_01:guraba123@clustermemories.z0mwcgf.mongodb.net/?retryWrites=true&w=majority"; // from mongoDB atlas
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true})
.then( () => app.listen(PORT, () => console.log( `Server is running on ${PORT}` )) ) // if connection to database is successful
.catch( (error) => console.log(error.message) )

