import React, { useState, useEffect } from "react";

const useCounter = ({ initialState, step }) => {
  const [count, setCount] = useState(initialState);
  const increment = () => setCount(count + step);
  return { count, increment, setCount };
};

const Counter = () => {
  const initialVal = () => parseInt(window.localStorage.getItem("count")) || 0;

  const { count, increment } = useCounter({
    initialState: initialVal(),
    step: 1
  });

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
