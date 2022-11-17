import React from "react";

function CounterUI(props){
    return (
    <>
    <h1>counter:{props.count}</h1>
    <button onClick={props.increment}>+</button>
    <button onClick={props.decrement}>-</button>
    </>)
}

export default CounterUI