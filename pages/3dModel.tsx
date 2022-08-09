import { lazy, Suspense, useRef } from 'react'
import { Canvas, useFrame, useThree} from '@react-three/fiber'
import { CameraShake } from '@react-three/drei';
import { CameraControls } from '../components/camera-control';
const ModelComponent = lazy(() => import("../components/Box"));

export default function Model({ ...props }) {
  const cameraControls = useRef<CameraControls | null>(null);
  

  return (
    <Suspense fallback={"loading"}>
      <Canvas
      
      style={{height:"100vh", background:"white"}}
        camera={{ position: [100, 100, 100]}}
      >
        	<CameraControls ref={cameraControls} />
        <ambientLight intensity={1} />
<spotLight intensity={5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />

      <ModelComponent/>
   
   
      </Canvas>
    </Suspense>
  )
}