import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema(
    {   
        _id: false,
        logradouro: {type: String, required: true},
        numero: {type: String, required: true},
        complemento: {type: String},
        bairro: {type: String},
        cep: {type: String},
        cidade: {type: String, required: true},
        uf: {type: String, required: true},
    }
)

const orderSchema = new mongoose.Schema(
    {   
        createdDate: {type: Date},
        cliente: {type: String, required: true},
        enderecoDeEntrega: {type: addressSchema, required: true},
        itens: {type:Array, required: true},
        status: {type: String, required: true}
    }
)

const orders = mongoose.model('orders', orderSchema);

export default orders;