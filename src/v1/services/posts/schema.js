import { Joi } from 'celebrate';

// const post = {
//   title: Joi.string().required(),
//   author: Joi.string().required(),
//   post: Joi.string().required(),
//   description: Joi.string().required()
// }

const post = {
  name: Joi.string().required(),
  photos: Joi.array().required(),
  description: Joi.string().required(),
  registerNumber: Joi.number().required(),
  color: Joi.string().required(),
  valid: Joi.boolean().required(),
  category: Joi.string().required(),
  lot: Joi.string().required(),
  price: Joi.number().required(),
  brand: Joi.string().required(),
  origin: Joi.string().required(),
  plots: Joi.number().required(),
  freight: Joi.number().required(),
  evaluation: Joi.number().required(),
  barCode: Joi.string().required(),
  model: Joi.string().required(),
  weight: Joi.number().required(),
  warranty: Joi.number().required(),
  provider: Joi.string().required(),
  code: Joi.string().required(),
  stores: Joi.array().required()
}

export const create = {
  body: Joi.object().keys(post)
};

// export const find = {
//   body: Joi.object().keys({
//     _id: Joi.string(),
//     author: Joi.string()
//   })
// };

export const find = {
  body: Joi.object().keys({
    _id: Joi.string(),
    registerNumber: Joi.number()
  })
};