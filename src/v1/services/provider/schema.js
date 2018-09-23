import { Joi } from 'celebrate';

const provider = {
  name: Joi.string().required(),
  address: Joi.string().required(),
  cep: Joi.string().required(),
  phone: Joi.string().required()
}

export const create = {
  body: Joi.object().keys(provider)
};

export const find = {
  body: Joi.object().keys({
    _id: Joi.string(),
    registerNumber: Joi.number()
  })
};
