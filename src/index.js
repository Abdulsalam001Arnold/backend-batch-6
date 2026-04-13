

import express from "express";
import userRoutes from "./routes/userRoutes.js"
import dotenv from "dotenv"
dotenv.config()
import { connectToDb } from "./config/dbConnect.js";
import cookieParser from "cookie-parser";

const app = express()

app.use(express.json())
app.use(cookieParser())

await connectToDb()

app.use("/api", userRoutes)


app.listen(3000, () => {
    console.log("Server is running on port 3000")
})