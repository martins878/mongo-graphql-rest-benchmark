import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLID,
} from 'graphql';
import mongoose from 'mongoose';
import * as API from '../helper';
import * as APIProvider from '../../provider/helper';

const ProductType = new GraphQLObjectType({
  name: 'Product',
  fields: () => ({
    name: { type: GraphQLString },
    photos: { type: new GraphQLList(GraphQLString) },
    description: { type: GraphQLString },
    // registerNumber: { type: GraphQLInt },
    // color: { type: GraphQLString },
    // valid: { type: GraphQLBoolean },
    category: { type: GraphQLString },
    // lot: { type: GraphQLString },
    price: { type: GraphQLInt },
    // brand: { type: GraphQLString },
    // origin: { type: GraphQLString },
    // plots: { type: GraphQLInt },
    // freight: { type: GraphQLInt },
    // evaluation: { type: GraphQLInt },
    // barCode: { type: GraphQLString },
    // model: { type: GraphQLString },
    // weight: { type: GraphQLInt },
    // warranty: { type: GraphQLInt },
    provider: {
      type: new GraphQLList(ProviderType),
      resolve(parent, args) {
        return APIProvider.find({ _id: parent.provider })
          .then(data => data);
      }
    },
    // code: { type: GraphQLString },
    // stores: { type: new GraphQLList(GraphQLString) }
  })
});

const ProviderType = new GraphQLObjectType({
  name: 'Provider',
  fields: () => ({
    _id: { type: GraphQLID },
    name: { type: GraphQLString },
    address: { type: GraphQLString },
    cep: { type: GraphQLString },
    phone: { type: GraphQLString },
    products: {
      type: new GraphQLList(ProductType),
      resolve(parent, args) {
        return API.find({ provider: parent._id })
          .then(data => data);
      }
    }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    provider: {
      type: new GraphQLList(ProviderType),
      args: { _id: { type: GraphQLString } },
      resolve(parent, args) {
        return APIProvider.find({ _id: mongoose.Types.ObjectId(args._id) })
          .then(data => data)
          .catch(error => console.log('ERROR::: ', error));
      }
    },
    // product: {
    //   type: new GraphQLList(ProductType),
    //   args: { title: { type: GraphQLString } },
    //   resolve(parent, args) {
    //     return API.find({ title: args.title })
    //       .then(data => data)
    //       .catch(error => console.log('ERROR::: ', error));
    //   }
    // },
    products: {
      type: new GraphQLList(ProductType),
      resolve(parent, args) {
        return API.find()
          .then(data => {
            // const newData = data.map(d => {
            //   return {...d._doc, provider: d.provider.toString()};
            // });
            // console.log('>>> ', newData);
            // const newb = [];
            // newData.forEach(d => {
              // console.log('>>>>>>>>>>> ', typeof d.provider.toString(), d.provider.toString());
              // console.log('>>>>>>>>>>> ', typeof d.provider, d.provider);
            // });
            // console.log('data: ', newb);
            // return newData;
            return data;
          })
          .catch(error => console.log('ERROR::: ', error));
      }
    }
  }
});

export default new GraphQLSchema({
  query: RootQuery
});
