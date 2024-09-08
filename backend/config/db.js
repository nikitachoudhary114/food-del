import mongoose from "mongoose";
export const connectDb = async () => {
    await mongoose.connect('mongodb+srv://nikitac8383:jekZLt1EVulE1sSo@food-del.pcaix.mongodb.net/food-del').then(() => console.log("db connected"));
}