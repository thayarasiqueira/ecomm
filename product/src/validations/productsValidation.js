import Joi from 'joi';
import categories from '../models/Category.js';

const validateProduct = (req, res, next) => {
  const nestedSchema = Joi.object().keys({
    nome: Joi.string(),
    categoria_id: Joi.string(),
  });
  const schema = Joi.object({
    _id: Joi.string(),
    nome: Joi.string()
      .min(4)
      .pattern(/^[^0-9]/)
      .required(),
    descricao: Joi.string(),
    slug: Joi.string()
      .pattern(/^[a-zA-Z0-9-]+$/),
    preco: Joi.number()
      .min(0),
    quantidade: Joi.number()
      .min(0)
      .max(1000),
    categoria: nestedSchema
      .required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(422).json({ message: error.message });
  }
  next();
  return true;
};

const validateCategoryId = (req, res, next) => {
  const { categoria: { categoria_id: categoriaId } } = req.body;
  categories.findById(categoriaId, (err) => {
    if (err) {
      return res.status(500).send({ message: err.message });
    }
    return true;
  });

  next();
};

export { validateProduct, validateCategoryId };
