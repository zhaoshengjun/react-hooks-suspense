import React, { useReducer, useRef, useEffect } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "LAPSE":
      return {
        ...state,
        lapse: action.now - action.startTime
      };
    case "TOGGLE_RUNNING":
      return {
        ...state,
        running: !running
      };
    case "CLEAR":
      return {
        ...state,
        lapse: 0,
        running: false
      };
    default:
      return state;
  }
};

function StopWatch() {
  const [{ lapse, running }, dispatch] = useReducer(reducer, {
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
        dispatch({ type: "LAPSE", now: Date.now(), startTime });
      }, 0);
    }
    dispatch({ type: "TOGGLE_RUNNING" });
  };

  const handleClearClick = () => {
    clearInterval(intervalRef.current);
    dispatch({ type: "CLEAR" });
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
