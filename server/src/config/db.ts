import mongoose from "mongoose";
// const MONGO_URI = process.env.MONGO_URI || "";

const uri = 'mongodb+srv://taipham:taipham@cluster0.zmysje9.mongodb.net/?retryWrites=true&w=majority'

const connectToDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("DB connected ...");
  } catch (error: any) {
    console.log(error.message);
    process.exit(1);
  }
};

export default connectToDB;