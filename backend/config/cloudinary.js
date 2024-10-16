import { v2 as cloudinary } from "cloudinary";
import dotenv from 'dotenv'; // Ensure dotenv is imported to load environment variables

dotenv.config(); // Load environment variables

const connectCloudinary = async () => {
   cloudinary.config({
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_SECRET_KEY
   });

};

export default connectCloudinary;
