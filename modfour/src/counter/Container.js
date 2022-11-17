import React from "react";
//import CounterUI from "./CounterUI";
import ClassCounter from "./ClassCounter";
class Container extends React.Component {
  constructor() {
    console.log("constructor");
    super();
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
  }
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return true;
  }
  shouldComponentUpdate() {
    console.log("calling shouldComponentUpdate...");
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("calling getSnapshotBeforeUpdate...");
  }

  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  render() {
    console.log("render");
    return (
      //<CounterUI count={this.state.count} increment={this.increment} decrement={this.decrement}/>
      <ClassCounter
        count={this.state.count}
        increment={this.increment}
        decrement={this.decrement}
      />
    );
  }
  componentDidMount() {
    console.log("calling componentDidMount...");
  }
  componentDidUpdate() {
    console.log("calling   componentDidUpdate...");
  }
}

export default Container;
