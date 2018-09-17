import { name, lorem, commerce, image, random, company, address } from 'faker';

export const generateDatas = () => {
  // const obj = {
  //   title: name.title(),
  //   author: name.findName(),
  //   post: lorem.words(),
  //   description: lorem.sentences()
  // }

  const obj = {
    name: commerce.productName(),
    photos: [image.imageUrl(), image.imageUrl(), image.imageUrl(), image.imageUrl()],
    description: lorem.sentences(),
    registerNumber: random.number(),
    color: commerce.color(),
    valid: random.boolean(),
    category: commerce.department(),
    lot: random.word(),
    price: commerce.price(),
    brand: company.companyName(),
    origin: address.country(),
    plots: random.number(),
    freight: commerce.price(),
    evaluation: random.number(),
    barCode: random.alphaNumeric(),
    model: lorem.words(),
    weight: random.number(),
    warranty: random.number(),
    provider: name.findName(),
    code: random.alphaNumeric(),
    stores: [company.companyName(), company.companyName()]
  }

  console.log('>>> ', obj);

  return obj;
};
