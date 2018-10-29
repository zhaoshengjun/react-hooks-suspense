import React, { useState, useEffect } from "react";

const useCounter = ({ initialState, step }) => {
  const [count, setCount] = useState(initialState);
  const increment = () => setCount(count + step);
  return { count, increment, setCount };
};

const Counter = () => {
  const initialState = () =>
    parseInt(window.localStorage.getItem("count")) || 5;
  const { count, increment } = useCounter({ initialState, step: 3 });
  useEffect(
    () => {
      window.localStorage.setItem("count", count);
    },
    [count]
  );
  return (
    <div className="container">
      <button onClick={increment}>{count}</button>
    </div>
  );
};

export default Counter;
