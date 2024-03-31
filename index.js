const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const path = require('path')
const connectDB = require('./configs/db')
const productRoutes = require("./routes/productRoutes")

dotenv.config()

connectDB()

const app = express()

const corsOptions = {
    origin: "*",
    optionSuccessStatus: 200
}

app.use(cors(corsOptions))

app.use('/api/products', productRoutes)



const port = process.env.PORT
app.listen(port, console.log(`running on port ${port}`))