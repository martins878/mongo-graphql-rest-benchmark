import Posts from './model';

export const create = (body) => new Posts(body).save();
export const find = (body) => Posts.find(body).exec();
export const findOne = (_id) => Posts.findOne(_id);