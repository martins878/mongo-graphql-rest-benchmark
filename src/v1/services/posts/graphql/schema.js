import { GraphQLObjectType, GraphQLString, GraphQLSchema } from 'graphql';
import { find } from 'lodash';
import * as API from '../helper';

// DUMMY
const posts = [
  {
    title: 'Teste 1',
    author: 'Vitor',
    post: 'Testando',
    description: 'Qualquer coisa'
  },
  {
    title: 'Teste 2',
    author: 'Jéssica',
    post: 'Testando 2',
    description: 'Qualquer coisa 2'
  },
  {
    title: 'Teste 3',
    author: 'Murilo',
    post: 'Testando 3',
    description: 'Qualquer coisa 3'
  }
]

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
      type: PostType,
      args: { title: { type: GraphQLString } },
      resolve(parent, args) {
        // console.log('>>>>> ', posts.find(title => title === args.title));
        // console.log('>>>>> ', posts.find());
        // return find(posts, { title: args.title });
        return API.find({ title: args.title })
          .then(data => data[0])
          .catch(error => console.log('ERROR::: ', error));
      }
    },
    posts: {
      type: PostType,
      // args: { title: { type: GraphQLString } },
      resolve(parent, args) {
        // console.log('>>>>> ', posts.find(title => title === args.title));
        // console.log('>>>>> ', posts.find());
        return API.find()
          .then(data => console.log(data))
          .catch(error => console.log('ERROR::: ', error));
      }
    }

  }
});

export default new GraphQLSchema({
  query: RootQuery
});
