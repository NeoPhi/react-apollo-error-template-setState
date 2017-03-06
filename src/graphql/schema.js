import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
} from 'graphql';
import createId from '../id';

const PersonType = new GraphQLObjectType({
  name: 'Person',
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    friend: { type: GraphQLID },
  },
});

const peopleData = [
  { id: '1', name: 'John Smith', friend: '3' },
  { id: '2', name: 'Sara Smith', friend: '5' },
  { id: '3', name: 'Budd Deey', friend: '7' },
  { id: '4', name: 'Charlie Deey', friend: '9' },
  { id: '5', name: 'David Deey', friend: '1' },
  { id: '6', name: 'Eden Deey', friend: '2' },
  { id: '7', name: 'Freddy Deey', friend: '4' },
  { id: '8', name: 'Ginger Deey', friend: '6' },
  { id: '9', name: 'Harry Deey', friend: '8' },
];

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    people: {
      type: new GraphQLList(PersonType),
      resolve: () => peopleData,
    },
    person: {
      type: PersonType,
      args: {
        id: {
          type: GraphQLID,
        },
      },
      resolve: (model, args) => {
        return {
          id: args.id,
          name: `User ${args.id}`,
          friend: createId(),
        };
      },
    }
  },
});

export const schema = new GraphQLSchema({ query: QueryType });
