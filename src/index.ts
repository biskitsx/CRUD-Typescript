// package import
import express from 'express'
import dotenv from  'dotenv'

// file import
import connectDB from './config/db'
import postRoutes from  './routes/postRoutes'

// dotenv config
dotenv.config()

// basic
const app = express()
const PORT = process.env.PORT || 6565

// mongoDB
connectDB()

// middleware
app.use(express.json())

// routes
app.get('/',(req, res)=>{res.send("hello")})
app.use(postRoutes)

// listen
app.listen(PORT,()=>{
    console.log(`NodeServer : http://localhost:${PORT}`);
})