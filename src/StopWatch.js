import React, { useReducer, useRef, useEffect } from "react";

const reducer = (currentState, newState) => {
  return { ...currentState, ...newState };
};

const useStopWatch = () => {
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
        setState({ lapse: Date.now() - startTime });
      }, 0);
    }
    setState({ running: !running });
  };

  const handleClearClick = () => {
    clearInterval(intervalRef.current);
    setState({ lapse: 0, running: false });
  };

  return { handleRunClick, handleClearClick, lapse, running };
};

function StopWatch() {
  const watchOne = useStopWatch();
  const watchTwo = useStopWatch();
  return (
    <div style={{ textAlign: "center" }}>
      <label style={{ fontSize: "5em", display: "block" }}>
        {watchOne.lapse}
        ms
      </label>
      <button onClick={watchOne.handleRunClick}>
        {watchOne.running ? "Stop" : "Start"}
      </button>
      <button onClick={watchOne.handleClearClick}>Clear</button>
      <hr />
      <hr />
      <label style={{ fontSize: "5em", display: "block" }}>
        {watchTwo.lapse}
        ms
      </label>
      <button onClick={watchTwo.handleRunClick}>
        {watchTwo.running ? "Stop" : "Start"}
      </button>
      <button onClick={watchTwo.handleClearClick}>Clear</button>
    </div>
  );
}

export default StopWatch;
