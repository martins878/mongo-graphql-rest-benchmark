import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  title: String,
  author: String,
  post: String,
  description: String
})

export default mongoose.model('Post', PostSchema);
