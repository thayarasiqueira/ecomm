import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema(
  {
    _id: false,
    logradouro: { type: String, required: true },
    numero: { type: String, required: true },
    complemento: { type: String },
    bairro: { type: String },
    cep: { type: String },
    cidade: { type: String, required: true },
    uf: { type: String, required: true },
  },
);

const accountSchema = new mongoose.Schema(
  {
    nome: { type: String, required: true },
    email: { type: String, required: true },
    senha: { type: String },
    createdDate: { type: Date },
    cpf: { type: String },
    telefone: { type: String },
    endereco: { type: addressSchema, required: true },
  },
);

const Accounts = mongoose.model('accounts', accountSchema);

export default Accounts;
