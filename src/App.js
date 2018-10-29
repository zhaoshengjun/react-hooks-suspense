import React, { useState } from "react";

const useCounter = ({ initialState, step }) => {
  const [count, setCount] = useState(initialState);
  const increment = () => setCount(count + step);
  return { count, increment, stepCount };
};

const Counter = () => {
  const { count, increment } = useCounter({ initialState: 5, step: 3 });
  return (
    <div className="container">
      <button onClick={increment}>{count}</button>
    </div>
  );
};

export default Counter;
