import { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLList } from 'graphql';
import * as API from '../helper';

const PostType = new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    title: { type: GraphQLString },
    author: { type: GraphQLString },
    post: { type: GraphQLString },
    description: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    post: {
      type: new GraphQLList(PostType),
      args: { title: { type: GraphQLString } },
      resolve(parent, args) {
        return API.find({ title: args.title })
          .then(data => data)
          .catch(error => console.log('ERROR::: ', error));
      }
    },
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
