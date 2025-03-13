import express from 'express';  
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/Mongodb.js';
import connectCloudinary from './config/Cloudinary.js';
import userRouter from './routes/User.Routes.js';
import productRouter from './routes/Product.Routes.js';
import cartRouter from './routes/Cart.Routes.js';
import orderRouter from './routes/Order.Routes.js';

dotenv.config()

//App config
const app = express();

//Port
let port = process.env.PORT || 3000


// Connect to MongoDB
connectDB() 
// Connect to Cloudinary
connectCloudinary()


// Middlewares
app.use(express.json())
app.use(cors())

//Api endpoints
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter)

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
})