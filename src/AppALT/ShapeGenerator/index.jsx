import ReactDOM from "react-dom";
import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

const ShapeGenerator = (props) => {
  // console.log("setHover", setHover);

  const {
    // OTHER PROPS
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
    // mesh,
    // SHAPE PROPS
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
  } = props;

  // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame((state, delta) => (mesh.current.rotation.x += 0.01));

  const Box = (props) => {
    const {
      mesh,
      active,
      setActive,
      setHover,
      hovered,
      setRotation,
      boxRotation,
    } = props;
    // This reference will give us direct access to the THREE.Mesh object
    // const mesh = useRef();

    // Subscribe this component to the render-loop, rotate the mesh every frame
    // useFrame((state, delta) => (mesh.current.rotation.x += 0.01));

    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => {
      setRotation(boxRotation + 0.01);
    });

    // Return the view, these are regular Threejs elements expressed in JSX
    return (
      <mesh
        {...props}
        ref={props.mesh}
        scale={active ? 1.5 : 1}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
        background={"red"}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
      </mesh>
    );
  };

  // useEffect(() => {
  ReactDOM.render(
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box
        position={[-1.2, 0, 0]}
        mesh={box1Mesh}
        active={active1}
        setActive={setActive1}
        setHover={setBox1Hoverred}
        hovered={box1Hovered}
        setRotation={setBox1Rotation}
        boxRotation={box1Rotation}
      />
      <Box
        position={[1.2, 0, 0]}
        mesh={box2Mesh}
        active={active2}
        setActive={setActive2}
        setHover={setBox2Hoverred}
        hovered={box2Hovered}
        setRotation={setBox2Rotation}
        boxRotation={box2Rotation}
      />
    </Canvas>,
    document.getElementById("threeDiv")
  );
  // });

  return <div />;
};

export default ShapeGenerator;
