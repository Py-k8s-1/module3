import React from "react";
import List from "./List";
class Details extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      courses: [],
    };
  }

  async componentDidMount() {
    const res = await fetch("http://localhost:8900/language", {
      method: "GET",
    });

    const result = await res.json();
    this.setState({
      ...this.state,
      courses: result,
    });
  }

  render() 
  {

    return (
      <List courses={this.state.courses}/>
  )}
}

export default Details;
