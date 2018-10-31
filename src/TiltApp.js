import React, { useState } from "react";
import Tilt from "./tilt";

function useToggle(init = false) {
  const [on, setOn] = useState(init);
  const toggle = () => setOn(!on);
  return [on, toggle];
}

function App() {
  const [showTilt, toggleTilt] = useToggle();
  return (
    <div>
      <label>
        Show Tilt
        <input type="checkbox" checked={showTilt} onChange={toggleTilt} />
      </label>
      <div style={{ height: 150, width: 200 }} className="totally-centered">
        {showTilt ? (
          <Tilt>
            <div className="totally-centered">vanilla-tilt.js</div>
          </Tilt>
        ) : null}
      </div>
    </div>
  );
}

export default App;
