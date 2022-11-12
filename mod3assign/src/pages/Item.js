import React from "react";
import { Link } from "react-router-dom";
import "./item.css";
const ItemNmes = (props) => {
  console.log("props", props);
  return (
    <div id="item-prop">
      <Link to="#">{props.courses.name}</Link> <br></br>
      <input type="submit" value="Enquire" />
    </div>
  );
};

export default ItemNmes;
