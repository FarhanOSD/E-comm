import express from "express"

import {
  placeOrder,
 
  allOrders,
  userOrders,
  updateStatus,
} from '../controllers/Order.controller.js';
import authUser from '../middleware/Auth.js'

import adminAuth from '../middleware/AdminAuth.js'
const orderRouter = express.Router()

// Admin Features
orderRouter.post('/list', adminAuth, allOrders)

orderRouter.post('/status', adminAuth, updateStatus)

// Payment Features

orderRouter.post('/place',authUser, placeOrder)

// orderRouter.post('/stripe', authUser, placeOrderStripe);
// orderRouter.post('/razorpay', authUser, placeOrderRezorpay);

// User Features

orderRouter.post('/userorders', authUser, userOrders)

export default orderRouter;