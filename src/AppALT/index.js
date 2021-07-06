import React, { useState, useRef } from "react";
import ShapeGenerator from "./ShapeGenerator";
import Controls from "./Controls";
import { useFrame } from "@react-three/fiber";

const GreaterApp = () => {
  return <App />;
};

const App = () => {
  const [sizeValue, setSizeValue] = useState(5);
  const [controlsHidden, setControlsHidden] = useState(false);
  const [color, setColor] = useState("red");
  const [lightsColor, setLightsColor] = useState("white");
  const [vertices, setVertices] = useState(0);
  const [topBulbSpeed, setTopBulbSpeed] = useState(0.003);
  const [middleBulbSpeed, setMiddleBulbSpeed] = useState(0.004);
  const [bottomBulbSpeed, setBottomBulbSpeed] = useState(0.005);
  const [topBulbLum, setTopBulbBlum] = useState(300);
  const [middleBulbLum, setMiddleBulbBlum] = useState(300);
  const [bottomBulbLum, setBottomBulbBlum] = useState(300);

  // Set up state for the hovered and active state
  const [box1Hovered, setBox1Hoverred] = useState(false);
  const [box2Hovered, setBox2Hoverred] = useState(false);
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [box1Rotation, setBox1Rotation] = useState(0);
  const [box2Rotation, setBox2Rotation] = useState(0);

  // This reference will give us direct access to the THREE.Mesh object
  const box1Mesh = useRef();
  const box2Mesh = useRef();

  // Subscribe this component to the render-loop, rotate the mesh every frame

  // useFrame((state, delta) => setBox1Rotation(box1Rotation + 0.01));
  // useFrame((state, delta) => setBox1Rotation(box1Rotation + 0.01));

  // set rotation?
  if (box1Mesh?.current?.rotation?.x) {
    box1Mesh.current.rotation.x = box1Rotation;
  }
  if (box2Mesh?.current?.rotation?.x) {
    box2Mesh.current.rotation.x = box2Rotation;
  }

  // console.log("box1Mesh", box1Mesh);

  const shapeActivity = {
    box1Hovered,
    setBox1Hoverred,
    box2Hovered,
    setBox2Hoverred,
    active1,
    setActive1,
    active2,
    setActive2,
    box1Mesh,
    box2Mesh,
    setBox1Rotation,
    setBox2Rotation,
    box1Rotation,
    box2Rotation,
  };

  const shapeProps = {
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
  };

  return (
    <div className="App">
      <Controls
        {...{
          ...shapeActivity,
          ...shapeProps,
        }}
      />
      <ShapeGenerator
        {...{
          ...shapeActivity,
          ...shapeProps,
        }}
      />
    </div>
  );
};

export default GreaterApp;
