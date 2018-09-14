export default `
  type Post {
    _id: String
    title: String
    author: String
    post: String
    description: String
  }

  input PostInput {
    title: String
    author: String
    post: String
    description: String
  }

  type Query {
    post(_id: String): Post
    posts: [Post]
  }

  type Mutation {
    createPost(input: PostInput) : Post
  }
`;
