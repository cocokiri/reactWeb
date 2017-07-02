import React, { Component } from 'react';
import logo from './logo.svg';
import Button from './Button';
import HypLink from './HypLink'

class App extends Component {
  render() {
    return (
      <div>TURN
        <Button> HEY</Button>
        <HypLink />
        <HypLink text="JASDSD" link="./asdasd" />
      </div>
    );
  }
}

export default App;
