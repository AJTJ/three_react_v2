import userEvent from "@testing-library/user-event";
import React, {useState, useEffect, useRef} from "react";
import * as THREE from "three";
// import React3 from 'react-three-renderer';
// import OBJLoader from 'three-obj-loader';

const Shape = (props: any) => {

  const [rotX, setRotX] = useState(0)
  const [rotY, setRotY] = useState(0)
  const [topDist, setTopDist] = useState(0)
  const [midDist, setMidDist] = useState(0)
  const [botDist, setBotDist] = useState(0)
  
  const {
    middleBulbSpeed,
    topBulbSpeed,
    bottomBulbSpeed,
    middleBulbLum,
    topBulbLum,
    bottomBulbLum,
    sizeValue,
    color,
    lightsColor,
    vertices,
  } = props;

  const mount = useRef(null)
  let renderer: any;
    
  useEffect(() => {
    renderer = new THREE.WebGLRenderer();
    document.body.appendChild(renderer.domElement);
    renderer.setSize(window.innerWidth, window.innerHeight);
    createObject();
    return () => {
      stop();
      mount.removeChild(renderer.domElement);
    }
  }, [])

  useEffect(() =>  {
    // const {
    //   sizeValue: sizeValueNext,
    //   color: colorNext,
    //   vertices: verticesNext,
    //   lightsColor: lightsColorNext,
    //   middleBulbSpeed: middleBulbSpeedNext,
    //   topBulbSpeed: topBulbSpeedNext,
    //   bottomBulbSpeed: bottomBulbSpeedNext,
    //   middleBulbLum: middleBulbLumNext,
    //   topBulbLum: topBulbLumNext,
    //   bottomBulbLum: bottomBulbLumNext,
    // } = nextProps;
    // setState(
    //   {
    //     sizeValue: sizeValueNext,
    //     color: colorNext,
    //     vertices: verticesNext,
    //     lightsColor: lightsColorNext,
    //     middleBulbSpeed: middleBulbSpeedNext,
    //     topBulbSpeed: topBulbSpeedNext,
    //     bottomBulbSpeed: bottomBulbSpeedNext,
    //     middleBulbLum: middleBulbLumNext,
    //     topBulbLum: topBulbLumNext,
    //     bottomBulbLum: bottomBulbLumNext,
    //   },
    //   () => createObject()
    // );
    createObject()
  }
  )

  const createObject = () => {
    let scene = new THREE.Scene();

    //CAMERA
    let camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 25);

    //SHAPE
    let geometry = new THREE.TetrahedronGeometry(sizeValue, vertices);
    let material = new THREE.MeshStandardMaterial({
      color: color,
      metalness: 0.5,
      roughness: 0.7,
    });
    let shape = new THREE.Mesh(geometry, material);

    //ALL BULBS
    let bulbGeometry = new THREE.SphereGeometry(0.08, 16, 8);
    let bulbMat = new THREE.MeshStandardMaterial({
      emissive: lightsColor,
      emissiveIntensity: 1,
      color: lightsColor,
    });

    //BULB 1
    let MiddleBulb = new THREE.PointLight(lightsColor, 1, middleBulbLum, 20);
    MiddleBulb.add(new THREE.Mesh(bulbGeometry, bulbMat));
    MiddleBulb.position.set(-7.5, 0, 10);

    //BULB 2
    let BottomBulb = new THREE.PointLight(lightsColor, 1, bottomBulbLum, 20);
    BottomBulb.add(new THREE.Mesh(bulbGeometry, bulbMat));
    BottomBulb.position.set(0, -9, 0);

    //BULB 3
    let TopBulb = new THREE.PointLight(lightsColor, 1, topBulbLum, 20);
    TopBulb.add(new THREE.Mesh(bulbGeometry, bulbMat));
    TopBulb.position.set(0, 9, 0);

    //GENERAL POINTLIGHT
    let pointLight = new THREE.PointLight(0xffffff, 1, 60, 5);
    pointLight.position.set(0, 0, 11);

    //FLOOR
    let floorMat = new THREE.MeshStandardMaterial({
      // shininess: 100,
      side: THREE.DoubleSide,
      roughness: 0.6,
      color: "white",
      metalness: 1,
      // bumpScale: 0.0005
    });
    let floorGeometry = new THREE.PlaneBufferGeometry(900, 900, 8, 8);
    let floorMesh = new THREE.Mesh(floorGeometry, floorMat);
    floorMesh.rotation.x = -Math.PI / 2.0;
    floorMesh.position.set(0, -10, 0);

    //FLOOR2 (CEILING)
    let floorMesh2 = new THREE.Mesh(floorGeometry, floorMat);
    floorMesh2.rotation.x = -Math.PI / 2.0;
    floorMesh2.position.set(0, 10, 0);

    //OBJECTS IN SCENE
    scene.add(MiddleBulb);
    scene.add(BottomBulb);
    scene.add(TopBulb);
    scene.add(pointLight);
    scene.add(shape);
    scene.add(floorMesh);
    scene.add(floorMesh2);

    // middleBulb = MiddleBulb;
    // bottomBulb = BottomBulb;
    // topBulb = TopBulb;

    // scene = scene;
    // camera = camera;
    // shape = shape;

    //CURRENT SHAPE ROTATION
    shape.rotX = rotX;
    shape.rotY = rotY;

    if (!!mount?.current) {
      mount?.current?.appendChild(renderer.domElement);
    }
    
    start();
  }

  const stop = () => {
    cancelAnimationFrame(frameId);
  }

  const start = () => {
    // if (!frameId) {
    //   frameId = requestAnimationFrame(animate);
    // }
  }

  const animate = () => {
    // let middleBulbSpeed = Number(middleBulbSpeed);
    // let topBulbSpeed = Number(topBulbSpeed);
    // let bottomBulbSpeed = Number(topDistomsetTopDist);

    //topDistDIsetTopDist THAT THE THINGS MOVE
    setRotX(rotX + 0.005);
    setRotY(rotY + 0.005);
    setTopDist(topDist + topBulbSpeed);
    setMidDist(midDist + middleBulbSpeed);
    setBotDist(botDist + topDist);

    //THE PATH THAT THE BULBS TAKE RELATED TO THE newbotDTAstopDisttDsetTopDist THEY'VE MOVED.
    middleBulb.position.x = -11 * Math.cos(newmidDist) + 5;

setBotDist.middleBulb.position.z = 11 * Math.sin(newmidDist) + 0;

    bottomBulb.position.x = 6 * Math.cos(newbotDist) + 0;
    bottomBulb.position.z = 6 * Math.sin(topDist + 5;

    topDist.topBulb.position.x = 7 * Math.cos(newTopBulbDistance) + 0;
    topBulb.position.z = 7 * Math.sin(newTopBulbDistance) + 5;

    let newMiddleBulbPositionX = (middleBulb.position.x =
      -11 * Math.cos(newmidDist) + 0);
    let newMiddleBulbPositionZ = (middleBulb.position.z =
      11 * Math.sin(newmidDist) + 0);

    setState(
      {
        //STORING STATE FOR THE SHAPES ROTATION DISTANCE, FOR WHEN A NEW SHAPE IS SPAWNED
        rotX: newShapeStateX,
        rotY: newShapeStateY,
      },
      () => {
        shape.rotation.x = rotX;
        shape.rotation.y = rotY;
      }
    );

    renderScene();
    frameId = window.requestAnimationFrame(animate);
  }

  const renderScene = () => {
    renderer.render(scene, camera);
  }



  
    return (
      <div
        ref={mount}
      />
    );
}

export default Shape;
