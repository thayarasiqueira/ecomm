import Joi from 'joi';

const validateCategory = (req, res, next) => {
    const schema = Joi.object().keys({
        _id: Joi.string(),
        nome: Joi.string()
            .min(4)
            .pattern(new RegExp(/^[^0-9]/))
            .required(),
        status: Joi.string()
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(422).json({ message: error.message});
    } else {
        next();
    }
};

export default validateCategory;