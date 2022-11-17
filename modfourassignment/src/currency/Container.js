import React from "react";
import Input from "./Input";
import List from "./List";
import "./Currency.css";
import Cookies from "js-cookie";
class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      currencies: [],
    };
  }

  // handleInput = (e) => {
  //   this.setState({...this.state,value:e.target.value})
  // };
  async componentDidMount(){
    const res =  await fetch(
        "https://webmaster-fake-api.herokuapp.com/currencies",
        {
          method: "GET",
          headers: {
            "Authorization":`Bearer ${(Cookies.get("token"))}`
          },
         
          })
          const results= await res.json()
          console.log("LLL",results)
          this.setState({
            ...this.state,
            currencies: results,
          });

        }
  
  render() {

    return (
      <div id="wrapper">

        {/* <Input /> handleInput={this.handleInput} /> */}
        <Input /> 
        <List value={this.state.value} currencies={this.state.currencies} />
      </div>
    );
  }
}

export default Container;
