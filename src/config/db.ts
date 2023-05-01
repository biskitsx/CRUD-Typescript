import mongoose from "mongoose";

async function connectDB(): Promise <void> {
    try {
        const mongoURI: string | undefined = process.env.MONGO_URI
        if (!mongoURI) {
            console.log(`mongoURI not found in env`);
        } else {
            const db = await mongoose.connect(mongoURI)
            console.log(`Connected to Database Successfully`);
        }   
    } catch(err) {
        console.log(err);
    }
}

export default connectDB