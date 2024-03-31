const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const connectDB = async () => {
    try{
        const connection = await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongodb connected");
    }catch(err){
        console.log(`Error: ${err.message}`);
        process.exit(1);
    }
}

module.exports = connectDB