import mongoose from 'mongoose';

// const PostSchema = new mongoose.Schema({
//   title: String,
//   author: String,
//   post: String,
//   description: String
// })

const PostSchema = new mongoose.Schema({
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
  provider: String,
  code: String,
  stores: [String]
})

export default mongoose.model('Post', PostSchema);