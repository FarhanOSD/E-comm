import { v2 as cloudinary } from 'cloudinary';
import productModel from '../models/Product.Model.js';

// Function to add a product
const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller,
    } = req.body;

    // Extracting images from request files
    const image1 = req.files?.image1?.[0];
    const image2 = req.files?.image2?.[0];
    const image3 = req.files?.image3?.[0];
    const image4 = req.files?.image4?.[0];

    // Filtering out undefined images
    const images = [image1, image2, image3, image4].filter(
      item => item !== undefined
    );

    // Uploading images to Cloudinary and getting their URLs
    const imagesUrl = await Promise.all(
      images.map(async item => {
        const result = await cloudinary.uploader.upload(item.path, {
          resource_type: 'image',
        });
        return result.secure_url;
      })
    );

    // Creating product data
    const productData = {
      name,
      description,
      price: Number(price),
      category,
      subCategory,
      sizes: JSON.parse(sizes),
      bestseller: bestseller === 'true',
      image: imagesUrl,
      date: Date.now(),
    };

    // Saving the product to the database
    const product = new productModel(productData);
    await product.save();

    res.json({ success: true, message: 'Product saved successfully' });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

// Function to list all products
const listProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({ success: true, products });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

// Function to remove a product
const removeProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: 'Product removed successfully' });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

// Function to get a single product's info
const singleProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    const product = await productModel.findById(productId);

    if (!product) {
      return res.json({ success: false, message: 'Product not found' });
    }

    res.json({ success: true, product });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

export { addProduct, removeProduct, singleProduct, listProducts };
