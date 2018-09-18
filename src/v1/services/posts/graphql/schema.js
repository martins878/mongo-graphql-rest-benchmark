import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLInt,
  GraphQLBoolean
} from 'graphql';
import * as API from '../helper';

const PostType = new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    name: { type: GraphQLString },
    photos: { type: new GraphQLList(GraphQLString) },
    description: { type: GraphQLString },
    registerNumber: { type: GraphQLInt },
    color: { type: GraphQLString },
    valid: { type: GraphQLBoolean },
    category: { type: GraphQLString },
    lot: { type: GraphQLString },
    price: { type: GraphQLInt },
    brand: { type: GraphQLString },
    origin: { type: GraphQLString },
    plots: { type: GraphQLInt },
    freight: { type: GraphQLInt },
    evaluation: { type: GraphQLInt },
    barCode: { type: GraphQLString },
    model: { type: GraphQLString },
    weight: { type: GraphQLInt },
    warranty: { type: GraphQLInt },
    provider: { type: GraphQLString },
    code: { type: GraphQLString },
    stores: { type: new GraphQLList(GraphQLString) }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    // post: {
    //   type: new GraphQLList(PostType),
    //   args: { title: { type: GraphQLString } },
    //   resolve(parent, args) {
    //     return API.find({ title: args.title })
    //       .then(data => data)
    //       .catch(error => console.log('ERROR::: ', error));
    //   }
    // },
    posts: {
      type: new GraphQLList(PostType),
      resolve(parent, args) {
        return API.find()
          .then(data => data)
          .catch(error => console.log('ERROR::: ', error));
      }
    }
  }
});

export default new GraphQLSchema({
  query: RootQuery
});
