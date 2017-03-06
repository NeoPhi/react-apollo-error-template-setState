import React, { Component } from 'react';
import Person from './Person';
import createId from './id';

function randomize() {
  const ids = [];
  const include = Math.random() * 10;
  while (ids.length < include) {
    const id = createId();
    if (!ids.includes(id)) {
      ids.push(id);
    }
  }
  return ids;
}

export default class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      ids: randomize(),
    };
  }

  handleClick = () => {
    this.setState({
      ids: randomize(),
    });
  }

  render() {
    const people = this.state.ids.map((id) => <Person key={id} id={id} showFriend />);

    return (
      <main>
        <header>
          <button onClick={this.handleClick}>Randomize</button>
        </header>
        {people}
      </main>
    );
  }
}
