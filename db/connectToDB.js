import mongoose from "mongoose";

const connectToDB = async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connected to Mongo DB`);
  } catch (error) {
    console.log(`Failed to connect to Mongo DB`);
  }
};
export default connectToDB;
