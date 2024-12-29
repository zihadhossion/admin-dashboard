import mongoose from "mongoose";

export const connectToDB = async () => {
    try {
        const connec = await mongoose.connect(process.env.MONGO as string);
        return connec;
    } catch (error) {
        console.error(error);
    }
}