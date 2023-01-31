import Joi from 'joi';

const validateCategory = (category) => {
    const schema = Joi.object().keys({
        _id: Joi.string(),
        nome: Joi.string()
            .min(4)
            .required(),
        status: Joi.string()
    })

    const result = schema.validate(category);
    return result;
}

export default validateCategory;