import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';

var schema = buildSchema(`
  type Query {
    hello: String
  }
`);
 
var root = {
  hello: () => {
    return 'Hello world!';
  },
};

const graphql = graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })

export default graphql;