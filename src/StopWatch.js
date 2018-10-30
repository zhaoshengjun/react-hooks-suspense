import React from "react";

function StopWatch() {
  return (
    <div style={{ textAlign: "center" }}>
      <label style={{ fontSize: "5em", display: "block" }}>0ms</label>
      <button>Start</button>
      <button>Clear</button>
    </div>
  );
}

export default StopWatch;
