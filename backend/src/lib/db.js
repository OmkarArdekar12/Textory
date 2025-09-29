import mongoose from "mongoose";

export const connectDB = async () => {
  const MONGODB_URI = process.env.MONGODB_URI;
  try {
    const dbConnection = await mongoose.connect(MONGODB_URI);
    // console.log(`MongoDB Connected: ${dbConnection.connection.host}`);
    console.log("MongoDB Connected Successfully");
  } catch (err) {
    console.log("MongoDB Connection Error: ", err);
  }
};
