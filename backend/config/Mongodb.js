import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on('connected', () => { 
      console.log(`Connected to MongoDB successfully!`);
    })
    await mongoose.connect(`${process.env.MONGODB_URL}/e-commerce`);
  } catch (error) {
    
    console.error(`Error connecting to MongoDB: ${error.message}`);
  }
}

export default connectDB;