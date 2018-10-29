import React, { useState } from "react";

const useCounter = (initialState, step) => {
  const [count, setCount] = useState(initialState);
  const increment = () => setCount(count + step);
  return { count, increment };
};

const Counter = () => {
  const { count, increment } = useCounter(5, 3);
  return (
    <div className="container">
      <button onClick={increment}>{count}</button>
    </div>
  );
};

export default Counter;
