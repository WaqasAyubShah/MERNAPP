 import express from "express"    //for this we have to add "type": "module" in package
 import cors from "cors"
 import mongoose from "mongoose"

 const app = express()
 app.use(express.json())
 app.use(express.urlencoded())
 app.use(cors())


mongoose.connect("mongodb://127.0.0.1:27017/myLoginapp",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})