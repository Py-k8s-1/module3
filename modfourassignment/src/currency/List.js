import React from "react";
import Item from "./Item";
import { fetchCurrencies } from "./action";
import { connect } from "react-redux";
import Cookies from "js-cookie";

class List extends React.Component {
  constructor() {
    super();
  }
  async componentDidMount() {
    const res = await fetch(
      // "https://webmaster-fake-api.herokuapp.com/currencies",
      // {
      //   method: "GET",
      //   headers: {
      //     "Authorization":`Bearer ${(Cookies.get("token"))}`
      //   },

      //   })
      //   const results= await res.json()
      //   console.log("LLL",results)
      this.props.fetchCurrencies()
    );
  }

  render() {
    return (
      <>
        {this.props.currencies.map((currency) => (
          <Item currency={currency} value={this.props.value} />
        ))}
      </>
    );
  }
}
const mapStatetoprops = (state) => {
  return {
    value: state.currency.value,
    currencies: state.currency.currencies,
  };
};

const mapDispatchToProps = {
  fetchCurrencies: fetchCurrencies,
};
export default connect(mapStatetoprops, mapDispatchToProps)(List);
