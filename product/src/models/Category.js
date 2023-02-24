import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
  {
    nome: { type: String, required: true },
    status: { type: String },
  },
);

const Categories = mongoose.model('categories', categorySchema);

export default Categories;
