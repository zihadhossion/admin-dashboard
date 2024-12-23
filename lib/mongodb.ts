import mongoose from "mongoose";

export const connectToDB = async () => {
    // if (mongoose.connections[0].readyState) {
    //     return true;
    // }
    try {
        const connec = await mongoose.connect(process.env.MONGO as string);
        return connec;
        // return true;
    } catch (error) {
        console.error(error);
    }
}