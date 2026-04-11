import express from 'express'
import cors from 'cors'
import 'dotenv/config'

import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRoutes.js'
import doctorRouter from './routes/doctorRoutes.js'
import userRouter from './routes/userRouter.js'

// app config
const app= express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()



// middlewares
app.use(express.json())
app.use(cors())         // use to connect frontend to backend

// api endpoint
app.use('/api/admin',adminRouter)
// localhost:4000/api/admin
app.use('/api/doctor',doctorRouter)

app.use('/api/user',userRouter)

app.get('/',(req,res)=>{
    res.send('API WORKING ')
})

app.listen(port,(req,res)=>{
    console.log("Server started at PORT ",port)
})

