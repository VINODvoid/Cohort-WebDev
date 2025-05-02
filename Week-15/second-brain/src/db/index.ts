import mongoose from "mongoose";

export const ConnectDB = async()=> {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}second-brain`)
        console.log("\nMongodb is connected !!");
    } catch (error) {
        console.log("\n Connection Error",error);
    }
}