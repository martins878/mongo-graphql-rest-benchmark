import mongoose from 'mongoose';

const ProviderSchema = new mongoose.Schema({
  name: String,
  address: String,
  cep: String,
  phone: String,
  // products: 
})

export default mongoose.model('Provider', ProviderSchema);