import mongoose from 'mongoose';

export const connectDB = async () => {
  await mongoose
    .connect(
      'mongodb+srv://muhasin:muhasinDci@cluster0.pjndh.mongodb.net/food-del?retryWrites=true&w=majority&appName=Cluster0'
    )
    .then(() => console.log('DB connected'));
};
