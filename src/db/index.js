import mongoose from "mongoose";
import { DB_Name } from "../constants.js";

const connectDB = async () => {
    try {
     const connectInstance= await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`);
        console.log(`MongoDB connected ${connectInstance.connection.host}`);

    } catch (error) {
        console.log("Error connecting to MongoDB:", error.message);
        process.exit(1);
    }
}

export default connectDB;