import React from "react";
// import NumericInput from "react-numeric-input";

const Controls = (props: any) => {
  let shapeColor = {
    color: props.color,
  };
  let lightsColor = {
    color: props.lightsColor,
  };

  return (
    <form
      className={`controlsForm ${props.controlsHidden ? "controlsHidden" : ""}`}
      action=""
    >
      <h1>react and three.js experiment</h1>

      <div className="sectionWrapper">
        <h2>Central Shape Adjustment</h2>
        <div className="sliderDiv">
          <div className="labelDiv">
            <label className="sliderLabel">Shape Size</label>
          </div>
          <input
            onChange={props.sizeChange}
            className="slider"
            type="range"
            min="1"
            max="10"
            value={props.sizeValue}
          />
        </div>

        <div className="sliderDiv">
          <div className="labelDiv">
            <label className="sliderLabel">Shape Vertices</label>
          </div>

          <input
            onChange={(e) => props.verticesChange(e)}
            className="slider"
            type="range"
            min="0"
            max="5"
            value={props.vertices}
          />
        </div>
      </div>

      {/* BULB ADJUSTMENT ZONE */}

      <div className="sectionWrapper">
        <div className="bulbTitle">
          <h2>Floating Bulb Rotation Speed/Direction</h2>
          <h2>max: 1 min: -1 </h2>
        </div>
        <div className="bulbSpeed__wrapper">
          <div className="bulbControl__wrapper">
            <div className="labelDiv">
              <label htmlFor="">Top Bulb</label>
            </div>
            <div>
              {/* <NumericInput
                  onChange={props.topBulbSpeedChange}
                  className="numberInput"
                  step={0.001}
                  max={1}
                  min={-1}
                  value={props.topBulbSpeed}
                /> */}
              {/* <input type="number" onChange={props.topBulbSpeedChange} className="numberInput" step={0.001} max={1} min={-1} value={props.topBulbSpeed} /> */}
            </div>
          </div>

          <div className="bulbControl__wrapper">
            <div className="labelDiv">
              <label htmlFor="">Middle Bulb</label>
            </div>
            <div>
              {/* <NumericInput
                  onChange={props.middleBulbSpeedChange}
                  className="numberInput"
                  step={0.001}
                  max={1}
                  min={-1}
                  value={props.middleBulbSpeed}
                /> */}
            </div>
          </div>

          <div className="bulbControl__wrapper">
            <div className="labelDiv">
              <label htmlFor="">Bottom Bulb</label>
            </div>
            <div>
              {/* <NumericInput
                  onChange={props.bottomBulbSpeedChange}
                  className="numberInput"
                  step={0.001}
                  max={1}
                  min={-1}
                  value={props.bottomBulbSpeed}
                /> */}
            </div>
          </div>
        </div>
      </div>

      <div className="sectionWrapper">
        <div className="bulbTitle">
          <h2>Floating Bulb Luminosity</h2>
          <h2> max: 2000 min: 1 </h2>
        </div>
        <div className="bulbSpeed__wrapper">
          <div className="bulbControl__wrapper">
            <div className="labelDiv">
              <label htmlFor="">Top Bulb</label>
            </div>
            <div>
              {/* <NumericInput
                  onChange={props.topBulbLumChange}
                  className="numberInput"
                  step={50}
                  max={2000}
                  min={1}
                  value={props.topBulbLum}
                /> */}
            </div>
          </div>

          <div className="bulbControl__wrapper">
            <div className="labelDiv">
              <label htmlFor="">Middle Bulb</label>
            </div>
            <div>
              {/* <NumericInput
                  onChange={props.middleBulbLumChange}
                  className="numberInput"
                  step={50}
                  max={2000}
                  min={1}
                  value={props.middleBulbLum}
                /> */}
            </div>
          </div>

          <div className="bulbControl__wrapper">
            <div className="labelDiv">
              <label htmlFor="">Bottom Bulb</label>
            </div>
            <div>
              {/* <NumericInput
                  onChange={props.bottomBulbLumChange}
                  className="numberInput"
                  step={50}
                  max={2000}
                  min={1}
                  value={props.bottomBulbLum}
                /> */}
            </div>
          </div>
        </div>
      </div>

      {/* COLOR BUTTON ZONE */}
      <div className="sectionWrapper">
        <h2>Random color API (allow 3-5 seconds for response)</h2>
        <div className="colorButtons">
          <div className="colorButton__wrapper">
            <div className="colorButtonDiv">
              <input
                onClick={props.getRandomColor}
                className="randomColorButton"
                type="button"
                value="Change SHAPE color"
              />
            </div>
            <p>
              Currently: <span style={shapeColor}>{props.color}</span>
            </p>
          </div>

          <div className="colorButton__wrapper">
            <div className="colorButtonDiv">
              <input
                onClick={props.getRandomLightsColor}
                className="randomColorButton"
                type="button"
                value="Change LIGHTS color"
              />
            </div>
            <p>
              Currently: <span style={lightsColor}>{props.lightsColor}</span>
            </p>
          </div>
        </div>

        <button onClick={props.toggleControls} className="showControlsButton">
          <i className="far fa-times-circle"></i>
        </button>
      </div>
      <div className="nameSocials">
        <span>by: Aaron Janke </span>
        <span className="socials">
          <a href="https://www.aaronjanke.com" target="_blank">
            <i className="fas fa-mouse-pointer"></i>
          </a>
          <a href="https://twitter.com/aaronjanke" target="_blank">
            <i className="fab fa-twitter"></i>
          </a>
        </span>
      </div>
    </form>
  );
};

export default Controls;
