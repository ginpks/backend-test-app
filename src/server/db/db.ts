import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const MONGO_URI = process.env.MONGO_URI;

const connectDB = async(): Promise<void> => {
    try {
        if (!MONGO_URI) {
            throw new Error('MONGO_URI is not defined in environment');
        }
        await mongoose.connect(MONGO_URI);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error)
        process.exit(1);
    }
}

export { connectDB }