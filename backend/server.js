import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import ConnectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';

const app = express();
const port = process.env.PORT || 4000;

ConnectDB();
connectCloudinary();

// Middlewares
app.use(express.json());
app.use(cors());

// API Endpoints
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);

app.get('/', (req, res) => {
   res.send("API Working");
});

// Start the server
app.listen(port, () => {
   console.log(`Server is running on http://localhost:${port}`);
});
