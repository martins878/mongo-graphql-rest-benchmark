// export default `
//   type Post {
//     _id: String
//     title: String
//     author: String
//     post: String
//     description: String
//   }

//   input PostInput {
//     title: String
//     author: String
//     post: String
//     description: String
//   }

//   type Query {
//     post(_id: String): Post
//     posts: [Post]
//   }

//   type Mutation {
//     createPost(input: PostInput) : Post
//   }
// `;

export default `
  type Post {
    _id: String
    name: String
    photos: [String]
    description: String
    registerNumber: Int
    color: String
    valid: Boolean
    category: String
    lot: String
    price: Int
    brand: String
    origin: String
    plots: Int
    freight: Int
    evaluation: Int
    barCode: String
    model: String
    weight: Int
    warranty: Int
    provider: String
    code: String
    stores: [String]
  }

  input PostInput {
    name: String
    photos: [String]
    description: String
    registerNumber: Int
    color: String
    valid: Boolean
    category: String
    lot: String
    price: Int
    brand: String
    origin: String
    plots: Int
    freight: Int
    evaluation: Int
    barCode: String
    model: String
    weight: Int
    warranty: Int
    provider: String
    code: String
    stores: [String]
  }

  type Query {
    post(_id: String): Post
    posts: [Post]
  }

  type Mutation {
    createPost(input: PostInput) : Post
  }
`;
