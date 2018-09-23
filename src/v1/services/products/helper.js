import Products from './model';

export const create = (body) => new Products(body).save();
export const find = (body) => Products.find(body).exec();