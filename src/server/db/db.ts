import mongoose from 'mongoose';

const MONGO_URI = 'mongodb+srv://ginpks2:qyRo0OwJXWGXWmPG@cluster0.rki1tc0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';


const connectDB = async(): Promise<void> => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error)
        process.exit(1);
    }
}

export { connectDB }