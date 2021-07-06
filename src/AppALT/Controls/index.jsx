import React from "react";

const Controls = ({
  sizeValue,
  setSizeValue,
  controlsHidden,
  setControlsHidden,
  color,
  setColor,
  lightsColor,
  setLightsColor,
  vertices,
  setVertices,
  topBulbSpeed,
  setTopBulbSpeed,
  middleBulbSpeed,
  setMiddleBulbSpeed,
  bottomBulbSpeed,
  setBottomBulbSpeed,
  topBulbLum,
  setTopBulbBlum,
  middleBulbLum,
  setMiddleBulbBlum,
  bottomBulbLum,
  setBottomBulbBlum,
}) => {
  return (
    <form
      className={`controlsForm ${controlsHidden ? "controlsHidden" : ""}`}
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
            onChange={(e) => setSizeValue(e.target.value)}
            className="slider"
            type="range"
            min="1"
            max="10"
            value={sizeValue}
          />
        </div>

        <div className="sliderDiv">
          <div className="labelDiv">
            <label className="sliderLabel">Shape Vertices</label>
          </div>

          <input
            onChange={(e) => setVertices(e.target.value)}
            className="slider"
            type="range"
            min="0"
            max="5"
            value={vertices}
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
                onChange={topBulbSpeedChange}
                className="numberInput"
                step={0.001}
                max={1}
                min={-1}
                value={topBulbSpeed}
              /> */}
              {/* <input type="number" onChange={topBulbSpeedChange} className="numberInput" step={0.001} max={1} min={-1} value={topBulbSpeed} /> */}
            </div>
          </div>

          <div className="bulbControl__wrapper">
            <div className="labelDiv">
              <label htmlFor="">Middle Bulb</label>
            </div>
            <div>
              {/* <NumericInput
                onChange={middleBulbSpeedChange}
                className="numberInput"
                step={0.001}
                max={1}
                min={-1}
                value={middleBulbSpeed}
              /> */}
            </div>
          </div>

          <div className="bulbControl__wrapper">
            <div className="labelDiv">
              <label htmlFor="">Bottom Bulb</label>
            </div>
            <div>
              {/* <NumericInput
                onChange={bottomBulbSpeedChange}
                className="numberInput"
                step={0.001}
                max={1}
                min={-1}
                value={bottomBulbSpeed}
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
                onChange={topBulbLumChange}
                className="numberInput"
                step={50}
                max={2000}
                min={1}
                value={topBulbLum}
              /> */}
            </div>
          </div>

          <div className="bulbControl__wrapper">
            <div className="labelDiv">
              <label htmlFor="">Middle Bulb</label>
            </div>
            <div>
              {/* <NumericInput
                onChange={middleBulbLumChange}
                className="numberInput"
                step={50}
                max={2000}
                min={1}
                value={middleBulbLum}
              /> */}
            </div>
          </div>

          <div className="bulbControl__wrapper">
            <div className="labelDiv">
              <label htmlFor="">Bottom Bulb</label>
            </div>
            <div>
              {/* <NumericInput
                onChange={bottomBulbLumChange}
                className="numberInput"
                step={50}
                max={2000}
                min={1}
                value={bottomBulbLum}
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
              {/* <input
                onClick={getRandomColor}
                className="randomColorButton"
                type="button"
                value="Change SHAPE color"
              /> */}
            </div>
            <p>
              Currently: <span style={{ color }}>{color}</span>
            </p>
          </div>

          <div className="colorButton__wrapper">
            <div className="colorButtonDiv">
              {/* <input
                onClick={getRandomLightsColor}
                className="randomColorButton"
                type="button"
                value="Change LIGHTS color"
              /> */}
            </div>
            <p>
              Currently:{" "}
              <span style={{ color: lightsColor }}>{lightsColor}</span>
            </p>
          </div>
        </div>

        <button
          onClick={(e) => setControlsHidden(!controlsHidden)}
          className="showControlsButton"
          href=""
        >
          <i className="far fa-times-circle"></i>
        </button>
      </div>
      <div className="nameSocials">
        <span>by: Aaron Janke </span>
        <span className="socials">
          <a href="https://www.aaronjanke.com" target="_blank" rel="noreferrer">
            <i className="fas fa-mouse-pointer"></i>
          </a>
          <a
            href="https://twitter.com/aaronjanke"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </span>
      </div>
    </form>
  );
};

export default Controls;
