import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCountValue } from "../Toolkitfeature/CounterSlice";
import { increment, decrement } from "../Toolkitfeature/CounterSlice";
import "./Counter.css";
const Counter = () => {
  const count = useSelector(getCountValue);
  const dispatch = useDispatch();

  console.log("Count", count);
  return (
    <div>
      <div className="container">
        {count > 0 ? (
          <h1>
            Count: <span style={{ backgroundColor: "green" }}>{count}</span>
          </h1>
        ) : (
          <h1>
            Count: <span style={{ backgroundColor: "red" }}>{count}</span>
          </h1>
        )}
        <input
          type="submit"
          value="Increment"
          id="increment-count"
          onClick={() => dispatch(increment())}
        />
        <input
          type="submit"
          id="decrement-count"
          value="decrement"
          onClick={() => dispatch(decrement())}
        />
      </div>
    </div>
  );
};

export default Counter;
