import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
};

export default Counter;
