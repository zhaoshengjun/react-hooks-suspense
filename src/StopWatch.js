import React, { useReducer, useRef, useEffect } from "react";

const reducer = (currentState, newState) => {
  return { ...currentState, ...newState };
};

function StopWatch() {
  const [{ lapse, running }, setState] = useReducer(reducer, {
    lapse: 0,
    running: false
  });
  const intervalRef = useRef(null);

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleRunClick = () => {
    if (running) {
      clearInterval(intervalRef.current);
    } else {
      const startTime = Date.now() - lapse;
      intervalRef.current = setInterval(() => {
        setState({ lapese: Date.now() - startTime });
      }, 0);
    }
    setState({ running: !running });
  };

  const handleClearClick = () => {
    clearInterval(intervalRef.current);
    setState({ lapse: 0, running: false });
  };
  return (
    <div style={{ textAlign: "center" }}>
      <label style={{ fontSize: "5em", display: "block" }}>
        {lapse}
        ms
      </label>
      <button onClick={handleRunClick}>{running ? "Stop" : "Start"}</button>
      <button onClick={handleClearClick}>Clear</button>
    </div>
  );
}

export default StopWatch;
