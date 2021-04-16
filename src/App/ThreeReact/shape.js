import React, {useState, useEffect, useRef} from "react";
import { Canvas, useFrame } from '@react-three/fiber'

const Shape = ({sizeValue: sizeValueImport,
	color: colorImport,
	vertices: verticesImport,
	lightsColor: lightsColorImport,
	middleBulbLum: middleBulbLumImport,
	topBulbLum: topBulbLumImport,
	bottomBulbLum: bottomBulbLumImport,}) => {
  

    const [sizeValue, setSizeValue] = useState(5);
    const [color, setColor] = useState("red");
    const [lightsColor, setLightsColor] = useState("white");

		const [vertices, setVertices] = useState(0)
		const [shapeRotationX, setShapeRotationX] = useState(0)
		const [shapeRotationY, setShapeRotationY] = useState(0)
		const [middleBulbDistance, setmiddleBulbDistance] = useState(0)
		const [topBulbDistance, setTopBulbDistance] = useState(0)
		
		const [topBulbspeed, setTopBulbSpeed] = useState(0.004)
		const [middleBulbSpeed, setMiddleBulbSpeed] = useState(0.003)
		const [bottomBulbSpeed, setBottomBulbSpeed] = useState(0.005)

		const [topBulbLum, setTopBulbLum] = useState(300)
		const [middleBulbLum, setMiddleBulbLum] = useState(300)
		const [bottomBulbLum, setBottomBulbLum] = useState(300)

	
  // componentDidMount() {
  //   const renderer = new THREE.WebGLRenderer();
  //   document.body.appendChild(renderer.domElement);
  //   renderer.setSize(window.innerWidth, window.innerHeight);
  //   this.renderer = renderer;

  //   this.createObject();
  // }

  // createObject() {
  //   //STATES IMPORTED
  //   let {
  //     sizeValue,
  //     color,
  //     vertices,
  //     lightsColor,
  //     middleBulbLum,
  //     topBulbLum,
  //     bottomBulbLum,
  //   } = this.state;

    // let scene = new THREE.Scene();

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

    this.middleBulb = MiddleBulb;
    this.bottomBulb = BottomBulb;
    this.topBulb = TopBulb;

    this.scene = scene;
    this.camera = camera;
    this.shape = shape;

    //CURRENT SHAPE ROTATION
    this.shape.shapeRotationX = this.state.shapeRotationX;
    this.shape.shapeRotationY = this.state.shapeRotationY;

    this.mount.appendChild(this.renderer.domElement);
    this.start();
  }

  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
  }

  stop() {
    cancelAnimationFrame(this.frameId);
  }

  start() {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  }

  animate() {
    let middleBulbSpeed = Number(this.state.middleBulbSpeed);
    let topBulbSpeed = Number(this.state.topBulbSpeed);
    let bottomBulbSpeed = Number(this.state.bottomBulbSpeed);

    //THE DISTANCE THAT THE THINGS MOVE
    let newShapeStateX = (this.state.shapeRotationX += 0.005);
    let newShapeStateY = (this.state.shapeRotationY += 0.005);
    let newMiddleBulbDistance = (this.state.middleBulbDistance += middleBulbSpeed);
    let newBottomBulbDistance = (this.state.bottomBulbDistance += bottomBulbSpeed);
    let newTopBulbDistance = (this.state.topBulbDistance += topBulbSpeed);

    //THE PATH THAT THE BULBS TAKE RELATED TO THE DISTANCE THEY'VE MOVED.
    this.middleBulb.position.x = -11 * Math.cos(newMiddleBulbDistance) + 0;
    this.middleBulb.position.z = 11 * Math.sin(newMiddleBulbDistance) + 0;

    this.bottomBulb.position.x = 6 * Math.cos(newBottomBulbDistance) + 0;
    this.bottomBulb.position.z = 6 * Math.sin(newBottomBulbDistance) + 5;

    this.topBulb.position.x = 7 * Math.cos(newTopBulbDistance) + 0;
    this.topBulb.position.z = 7 * Math.sin(newTopBulbDistance) + 5;

    let newMiddleBulbPositionX = (this.middleBulb.position.x =
      -11 * Math.cos(newMiddleBulbDistance) + 0);
    let newMiddleBulbPositionZ = (this.middleBulb.position.z =
      11 * Math.sin(newMiddleBulbDistance) + 0);

    this.setState(
      {
        //STORING STATE FOR THE SHAPES ROTATION DISTANCE, FOR WHEN A NEW SHAPE IS SPAWNED
        shapeRotationX: newShapeStateX,
        shapeRotationY: newShapeStateY,
      },
      () => {
        this.shape.rotation.x = this.state.shapeRotationX;
        this.shape.rotation.y = this.state.shapeRotationY;
      }
    );

    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  }

  renderScene() {
    this.renderer.render(this.scene, this.camera);
  }

  componentWillReceiveProps(nextProps) {
    const {
      sizeValue: sizeValueNext,
      color: colorNext,
      vertices: verticesNext,
      lightsColor: lightsColorNext,
      middleBulbSpeed: middleBulbSpeedNext,
      topBulbSpeed: topBulbSpeedNext,
      bottomBulbSpeed: bottomBulbSpeedNext,
      middleBulbLum: middleBulbLumNext,
      topBulbLum: topBulbLumNext,
      bottomBulbLum: bottomBulbLumNext,
    } = nextProps;
    this.setState(
      {
        sizeValue: sizeValueNext,
        color: colorNext,
        vertices: verticesNext,
        lightsColor: lightsColorNext,
        middleBulbSpeed: middleBulbSpeedNext,
        topBulbSpeed: topBulbSpeedNext,
        bottomBulbSpeed: bottomBulbSpeedNext,
        middleBulbLum: middleBulbLumNext,
        topBulbLum: topBulbLumNext,
        bottomBulbLum: bottomBulbLumNext,
      },
      () => this.createObject()
    );
  }

  render() {
    return (
      <Canvas>
				<pointLight color={lightsColor} intensity={topBulbLum} distance={20} decay={20}/>
				<pointLight color={lightsColor} intensity={middleBulbLum} distance={20} decay={20}/>
				<pointLight color={lightsColor} intensity={bottomBulbLum} distance={20} decay={20}/>
				
			</Canvas>
    );
  }
}

export default Shape;
