import { Joi } from 'celebrate';

const post = {
  title: Joi.string().required(),
  author: Joi.string().required(),
  post: Joi.string().required(),
  description: Joi.string().required()
}

export const create = {
  body: Joi.object().keys(post)
};

export const find = {
  body: Joi.object().keys({
    _id: Joi.string(),
    author: Joi.string()
  })
};