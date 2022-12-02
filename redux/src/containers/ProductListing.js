import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import ProductComponent from "./ProductComponent";

import { setProduct } from "../redux/actions/productActions";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  const fetchApis = async () => {
    const resp = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });

    dispatch(setProduct(resp.data));
  };
  useEffect(() => {
    fetchApis();
  }, []);

  return (
    <div className="ui <grid container">
      <ProductComponent/>
     
    </div>
  );
};

export default ProductListing;
