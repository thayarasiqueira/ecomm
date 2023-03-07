import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
  {
    nome: { type: String, required: true },
    status: { type: String },
  },
);

const Category = mongoose.model('categories', categorySchema);

export default Category;
