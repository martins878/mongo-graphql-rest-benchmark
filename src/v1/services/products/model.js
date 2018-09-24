import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  name: String,
  photos: [String],
  description: String,
  registerNumber: Number,
  color: String,
  valid: Boolean,
  category: String,
  lot: String,
  price: Number,
  brand: String,
  origin: String,
  plots: Number,
  freight: Number,
  evaluation: Number,
  barCode: String,
  model: String,
  weight: Number,
  warranty: Number,
  provider: { type: mongoose.Schema.Types.ObjectId, ref: 'Provider' },
  code: String,
  stores: [String]
})

export default mongoose.model('Product', ProductSchema);