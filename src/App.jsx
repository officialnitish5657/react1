import {Canvas} from '@react-three/fiber';
import React from 'react'
import Cyl from "./Cyl";
import './style.css';
import {OrbitControls } from '@react-three/drei';

function App() {
  return ( <Canvas camera={{fov:30}}>
    <OrbitControls />
    <ambientLight />
    <Cyl />
  </Canvas>
  );
}

export default App