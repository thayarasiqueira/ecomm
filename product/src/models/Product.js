import mongoose from 'mongoose';


const categorySchema = new mongoose.Schema(
    {
        _id: false,
        nome: {type: String, required: true},
        categoria_id: {type: String, required: true},
    }
);

const productSchema = new mongoose.Schema(
    {
        nome: {type: String, required: true},
        descricao: {type: String},
        slug: {type: String},
        preco: {type: Number},
        quantidade: {type: Number},
        categoria: {type: categorySchema, required: true}
    }
);

const products = mongoose.model('products', productSchema);

export default products;