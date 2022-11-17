import React from "react";
import "./Currency.css";
import { storevalue } from "./action";
import { connect } from "react-redux";
class Input extends React.Component {
  constructor(props) {
    super(props);
  }
  handleInput=(event)=>{
    this.props.storevalue(event.target.value)

  }
  render() {
    return (
      <>
        <input
          type="text"
          name="value"
          id="input-style"
          onChange={this.handleInput}
        />
      </>
    );
  }
}

const mapStatetoprops=(state)=>{
  return {value:state.currency.value}
}


const mapDispatchToProps={
  storevalue:storevalue
}

export default connect (mapStatetoprops,mapDispatchToProps) (Input);
