import React from "react";
import "./Currency.css";

const Item = (props) => {
  return (
    <div id="item">
      <p>
        {props.currency.symbol} {props.currency.name}
      </p>
      <p>{props.currency.rate}</p>
      <p>{(props.value * props.currency.rate).toFixed(2)}</p>
    </div>
  );
};

export default Item;
