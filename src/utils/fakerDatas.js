import { name, lorem } from 'faker';

export const generateDatas = () => {
  const obj = {
    title: name.title(),
    author: name.findName(),
    post: lorem.words(),
    description: lorem.sentences()
  }

  return obj;
};
