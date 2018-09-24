import {
  name,
  lorem,
  commerce,
  image,
  random,
  company,
  address
} from 'faker';

const generatePhotos = () => {
  const photos = [];
  for (let i = 0; i < 2; i++) {
    photos.push(image.imageUrl());
  }
  return photos;
}

const generateStores = () => {
  const stores = [];
  for (let i = 0; i < 1000; i++) {
    stores.push(company.companyName());
  }
  return stores;
}

const sortProvider = () => {
  const providers = ['5ba6e0e660624bbcfb426be4', '5ba6e1175b739cbd0465ff8e'];
  const number = random.number();
  if (number % 2 === 0) {
    return providers[0];
  } else {
    return providers[1];
  }
}

export const generateDatas = () => {
  const obj = {
    name: commerce.productName(),
    photos: generatePhotos(),
    description: lorem.sentences(),
    // registerNumber: random.number(),
    // color: commerce.color(),
    // valid: random.boolean(),
    category: commerce.department(),
    // lot: random.word(),
    price: commerce.price(),
    // brand: company.companyName(),
    // origin: address.country(),
    // plots: random.number(),
    // freight: commerce.price(),
    // evaluation: random.number(),
    // barCode: random.alphaNumeric(),
    // model: lorem.words(),
    // weight: random.number(),
    // warranty: random.number(),
    provider: sortProvider(),
    // code: random.alphaNumeric(),
    // stores: generateStores()
  }

  return obj;
};
