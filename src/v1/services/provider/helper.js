import Provider from './model';

export const create = (body) => new Provider(body).save();
export const find = (body) => Provider.find(body).exec();