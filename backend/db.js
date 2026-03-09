import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('MongoDB connected successfully')
    } catch(err) {
        console.log('MongoDB connection failed, retrying in 5 seconds...')
        setTimeout(connectDB, 5000)
    }
}
export default connectDB