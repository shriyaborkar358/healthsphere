import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT
const MONGO_URL = process.env.MONGO_URL

const connectDB = async () =>{
    const conn = await mongoose.connect(MONGO_URL)

    if(conn){
        console.log('MongoDB connected successfully✅');   
    }
}
connectDB()

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})