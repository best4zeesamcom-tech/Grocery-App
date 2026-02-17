import mongoose from 'mongoose';

export interface IProduct {
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  description?: string;
  rating: number;
  reviews: number;
  isOrganic: boolean;
  inStock: boolean;
  createdAt: Date;
}

const ProductSchema = new mongoose.Schema<IProduct>({
  name: {
    type: String,
    required: [true, 'Please provide a product name'],
    maxlength: [100, 'Name cannot be more than 100 characters'],
  },
  price: {
    type: Number,
    required: [true, 'Please provide a price'],
  },
  originalPrice: {
    type: Number,
  },
  image: {
    type: String,
    required: [true, 'Please provide an image URL'],
  },
  category: {
    type: String,
    required: [true, 'Please provide a category'],
  },
  description: {
    type: String,
    maxlength: [500, 'Description cannot be more than 500 characters'],
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  reviews: {
    type: Number,
    default: 0,
  },
  isOrganic: {
    type: Boolean,
    default: false,
  },
  inStock: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);
export default Product;