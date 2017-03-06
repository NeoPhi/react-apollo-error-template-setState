import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import Person from './Person';

function Friend(props) {
  if (props.data.loading) {
    return null;
  }
  return <Person id={props.data.person.friend} />;
}

const query = gql`
  query friendData($id: ID!) {
    person(id: $id) {
      id
      friend
    }
  }
`;

const FriendWithData = graphql(query, {
  options({ id }) {
    return {
      variables: {
        id,
      },
    };
  },
})(Friend);

export default connect()(FriendWithData);
