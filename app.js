import mongoose from "mongoose";
import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import { test } from "./Parcial1_Lalo/MVC/controller/alumno.controller.js";

dotenv.config()
mongoose.connect(process.env.urlbase)
.then(()=>{
    console.log("la bd funciona")
})
.catch((error)=>{
    console.log("la bd no funciona", error)
})

const app = express()
app.use(cors())
app.listen(4000, ()=>{
    console.log("se escucha")
})

test()