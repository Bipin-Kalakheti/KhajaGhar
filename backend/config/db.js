import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect("mongodb+srv://bipin:bipin@cluster0.scqgwzc.mongodb.net/food-dell")
    .then(() => console.log("DB connected"));
};
