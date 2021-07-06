import React, { useState, useEffect } from "react";
import Shape from "./shape.js";
import Controls from "./controls.js";

const App = () => {
  const [sizeValue, setSizeValue] = useState(5);
  const [controlsHidden, setControlsHidden] = useState(false);
  const [color, setColor] = useState("red");
  const [lightsColor, setLightsColor] = useState("white");
  const [vertices, setVertices] = useState(0);
  const [topBulbSpeed, setTopBulbSpeed] = useState(0.004);
  const [middleBulbSpeed, setMiddleBulbSpeed] = useState(0.003);
  const [bottomBulbSpeed, setBottomBulbSpeed] = useState(0.005);
  const [topBulbBlum, setTopBulbBlum] = useState(300);
  const [middleBulbBlum, setMiddleBulbBlum] = useState(300);
  const [bottomBulbBlum, setBottomBulbBlum] = useState(300);

  //FUNCTION FOR TOGGLING THE VISIBILITY OF THE CONTROL BOX
  const toggleControls = (e) => {
    e.preventDefault();
    setControlsHidden(!controlsHidden);
  };

  return (
    <div className="mainDiv">
      {controlsHidden ? (
        <button className="hamburgerIcon" onClick={this.toggleControls} href="">
          <i className="fas fa-bars fa-2x"></i>
        </button>
      ) : null}
      <Controls
        {...{
          vertices,
          controlsHidden,
          toggleControls,
          sizeValue,
          color,
          lightsColor,
          topBulbSpeed,
          middleBulbSpeed,
          bottomBulbSpeed,
          topBulbBlum,
          middleBulbBlum,
          bottomBulbBlum,
          verticesChange: (e) => setVertices(e.target.value),
          sizeChange: (e) => setSizeValue(e.target.value),
          topBulbSpeedChange: (e) => setTopBulbSpeed(e),
          topBulbBlumChange: (e) => setTopBulbBlum(e),
          middleBulbSpeedChange: (e) => setMiddleBulbSpeed(e),
          middleBulbBlumChange: (e) => setMiddleBulbBlum(e),
          bottomBulbSpeedChange: (e) => setBottomBulbSpeed(e),
          bottomBulbBlumChange: (e) => setBottomBulbBlum(e),
        }}
      />
      <Shape
        {...{
          vertices,
          controlsHidden,
          toggleControls,
          sizeValue,
          color,
          lightsColor,
          topBulbSpeed,
          middleBulbSpeed,
          bottomBulbSpeed,
          topBulbBlum,
          middleBulbBlum,
          bottomBulbBlum,
        }}
      />
    </div>
  );
};

export default App;
// ReactDOM.render(<App />, document.getElementById("threeDiv"));
