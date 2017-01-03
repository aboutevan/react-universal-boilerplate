import React, { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  increment() {
    this.setState({ counter: this.state.counter + 1 });
  }
  decrement() {
    this.setState({ counter: this.state.counter - 1 });
  }
  render() {
    return (
      <div className="Counter">
        <p>Hi, I am a <code>Counter</code> component.</p>
        <h2>{this.state.counter}</h2>
        <button className="button Counter__decrement" onClick={this.decrement}>Decrement</button>
        <button className="button Counter__increment" onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
