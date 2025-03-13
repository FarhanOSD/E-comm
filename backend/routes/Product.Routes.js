import express from 'express';

import { addProduct, removeProduct, singleProduct, listProducts } from '../controllers/Product.controller.js'
import upload from '../middleware/Multer.js';
import adminAuth from '../middleware/AdminAuth.js';

const productRouter = express.Router();

productRouter.post(
  '/add',adminAuth,
  upload.fields([
    { name: 'image1', maxCount: 1 },
    { name: 'image2', maxCount: 1 },
    { name: 'image3', maxCount: 1 },
    { name: 'image4', maxCount: 1 },
  ]),
  addProduct
);

productRouter.get('/list', listProducts);

productRouter.post('/remove',adminAuth, removeProduct);

productRouter.get('/single', singleProduct);

export default productRouter;