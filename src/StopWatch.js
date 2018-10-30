import React, { useState, useRef } from "react";

function StopWatch() {
  const [lapse, setLapse] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  const handleRunClick = () => {
    if (running) {
      clearInterval(intervalRef.current);
    } else {
      const startTime = Date.now() - lapse;
      intervalRef.current = setInterval(() => {
        setLapse(Date.now() - startTime);
      }, 0);
    }
    setRunning(!running);
  };

  const handleClearClick = () => {};
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
