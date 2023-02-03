import Joi from 'joi';

const validateAccount = (req, res, next) => {
    const addressSchema = Joi.object().keys({
        _id: false,
        logradouro: Joi.string()
            .required(),
        numero: Joi.string()
            .alphanum()
            .required(),
        complemento: Joi.string(),
        bairro: Joi.string(),
        cep: Joi.string()
            .min(8)
            .max(8)
            .pattern(new RegExp(/^[0-9]*$/)),
        cidade: Joi.string()
            .required(),
        uf: Joi.string()
            .pattern(new RegExp(/(A[CLMP]|BA|CE|DF|ES|GO|M[AGST]|P[ABEIR]|R[JNORS]|S[CEP]|TO)/))
            .required(),
    })

    const schema = Joi.object().keys({
        _id: Joi.string(),
        nome: Joi.string()
            .required(),
        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'br'] } })
            .required(),
        senha: Joi.string()
            .min(9)
            .pattern(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{9,20}$/)),
        cpf: Joi.string()
            .min(11)
            .max(11)
            .pattern(new RegExp(/^[0-9]*$/)),
        telefone: Joi.string()
            .min(10)
            .max(13)
            .pattern(new RegExp(/^[0-9]*$/)),
        endereco: addressSchema,
    })

    const { error } = schema.validate(req.body);
    if (error) return res.status(422).json({ message: error.message});

    next();
}

export default validateAccount;