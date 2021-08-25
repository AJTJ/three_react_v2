import React, { useState, useEffect } from "react";
import Shape from "./shape";
import Controls from "./controls";

const App = () => {
  // shape
  const [sizeValue, setSizeValue] = useState(5);
  const [color, setColor] = useState("red");
  const [lightsColor, setLightsColor] = useState("white");
  const [vertices, setVertices] = useState(0);
  // controls
  const [controlsHidden, setControlsHidden] = useState(false);
  // bulb speed and blum
  const [topBulbSpeed, setTopBulbSpeed] = useState(0.004);
  const [middleBulbSpeed, setMiddleBulbSpeed] = useState(0.003);
  const [bottomBulbSpeed, setBottomBulbSpeed] = useState(0.005);
  const [topBulbBlum, setTopBulbBlum] = useState(300);
  const [middleBulbBlum, setMiddleBulbBlum] = useState(300);
  const [bottomBulbBlum, setBottomBulbBlum] = useState(300);

  //FUNCTION FOR TOGGLING THE VISIBILITY OF THE CONTROL BOX
  const toggleControls = (e: any) => {
    e.preventDefault();
    setControlsHidden(!controlsHidden);
  };

  return (
    <div className="mainDiv">
      {controlsHidden ? (
        <button className="hamburgerIcon" onClick={toggleControls}>
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
          verticesChange: (e: React.ChangeEvent<HTMLInputElement>) =>
            setVertices(parseInt(e.target.value, 10)),
          sizeChange: (e: React.ChangeEvent<HTMLInputElement>) =>
            setSizeValue(parseInt(e.target.value, 10)),
          topBulbSpeedChange: (e: any) => setTopBulbSpeed(e),
          topBulbBlumChange: (e: any) => setTopBulbBlum(e),
          middleBulbSpeedChange: (e: any) => setMiddleBulbSpeed(e),
          middleBulbBlumChange: (e: any) => setMiddleBulbBlum(e),
          bottomBulbSpeedChange: (e: any) => setBottomBulbSpeed(e),
          bottomBulbBlumChange: (e: any) => setBottomBulbBlum(e),
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
