import * as Posts from '../helper';

export default {
  Query: {
    post: async (_id) => await Posts.findOne(_id),
    posts: async () => await Posts.find({})
  },
  Mutation: {
    createPost: async (_root, { input }) => await Posts.create(input)
  }
};
