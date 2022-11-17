import React from "react";

class ClassCounter extends React.Component {
  render() {
    return (
      <>
        <h1>counter:{this.props.count}</h1>
        <button onClick={this.props.increment}>+</button>
        <button onClick={this.props.decrement}>-</button>
      </>
    );
  }
}

export default ClassCounter
