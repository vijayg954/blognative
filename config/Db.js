import mongoose from "mongoose";

const DbConnect = async () => {
  try {
    await mongoose.connect("mongodb+srv://vijayg:loveu@cluster0.uqejsbk.mongodb.net/?appName=Cluster0");
    console.log("MongoDB connected");
  } catch (err) {
    console.log("MongoDB not connected. Internal server error:", err);
  }
};

export default DbConnect;
