import React, { Component } from 'react';

class Sample extends Component {
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
      <div className="sample">
        <div className="sample__counter-container">
          <h2>{this.state.counter}</h2>
        </div>
        <p>Greetings, I am a <code>Sample</code> component.</p>
        <button className="button" onClick={this.increment}>Increment</button>
        <button className="button" onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default Sample;
