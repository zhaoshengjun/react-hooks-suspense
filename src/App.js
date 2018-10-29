import React, { useState, useEffect } from "react";

const useCounter = ({ initialState, step }) => {
  const [count, setCount] = useState(initialState);
  const increment = () => setCount(count + step);
  return { count, increment, setCount };
};

const Counter = () => {
  const { count, increment } = useCounter({ initialState: 5, step: 3 });
  useEffect(() => {
    window.localStorage.setItem("count", count);
  });
  return (
    <div className="container">
      <button onClick={increment}>{count}</button>
    </div>
  );
};

export default Counter;
