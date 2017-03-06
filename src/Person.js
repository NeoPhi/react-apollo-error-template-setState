import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import Friend from './Friend';

function Person(props) {
  if (props.data.loading) {
    return null;
  }
  if (props.showFriend) {
    return (<div>{props.data.person.name} => Friend <Friend id={props.data.person.friend}/></div>);
  }
  return (<div>{props.data.person.name}</div>);
}

const query = gql`
  query personData($id: ID!) {
    person(id: $id) {
      id
      name
      friend
    }
  }
`;

export default graphql(query, {
  options({ id }) {
    return {
      variables: {
        id,
      },
    };
  },
})(Person);
