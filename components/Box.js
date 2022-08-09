import React from 'react'
import { useGLTF } from '@react-three/drei'
import { lazy, Suspense, useRef } from 'react'
import { Canvas, useFrame} from '@react-three/fiber'

export default function Box(props) {
 
  const { nodes, materials } = useGLTF("http://localhost:3000/PT1glb.glb")
  console.log(materials)
  return (
    <group {...props} dispose={null}>
      <group position={[5.65, 23.55, -18.96]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow 
          
          geometry={nodes.Plane053.geometry}
          material={{color:"#FFC0CB"}}
        />
        <mesh
          castShadow
          receiveShadow 
          geometry={nodes.Plane053_1.geometry}
          material={{color:"#FFC0CB"}}
        />
      </group>
      <mesh
        castShadow
        receiveShadow 
        geometry={nodes.Plane003.geometry}
        material={materials["Material.001"]}
        position={[5.24, 23.32, -18.96]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1.03, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow 
        geometry={nodes.Plane004.geometry}
        material={materials["Procedural wood material"]}
        position={[5.65, 23.55, -18.96]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow 
        geometry={nodes.Plane005.geometry}
        material={materials["Procedural wood material"]}
        position={[-2.85, 27.19, -18.91]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow 
        geometry={nodes.house_ceiling1.geometry}
        material={nodes.house_ceiling1.material}
        scale={[18.33, 13.02, 18.86]}
      />
      <mesh
        castShadow
        receiveShadow 
        geometry={nodes.parking_area.geometry}
        material={nodes.parking_area.material}
        scale={[18.33, 13.02, 18.86]}
      />
      <mesh
        castShadow
        receiveShadow 
        geometry={nodes.house_ceiling_2.geometry}
        material={materials.concrete}
        scale={[18.33, 13.02, 18.86]}
      />
      <mesh
        castShadow
        receiveShadow 
        geometry={nodes.balcony_door.geometry}
        material={materials["Black Metal Paint"]}
        position={[0, 0, 0.1]}
        scale={[18.33, 13.02, 18.86]}
      />
      <mesh
        castShadow
        receiveShadow 
        geometry={nodes.outside_mail_wall.geometry}
        material={nodes.outside_mail_wall.material}
        position={[14.08, 2.02, -19.21]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1.05, 1.74, 1.74]}
      />
      <mesh
        castShadow
        receiveShadow 
        geometry={nodes.outside_floor.geometry}
        material={nodes.outside_floor.material}
        position={[0.53, -0.01, -26.31]}
        scale={[18.33, 13.02, 18.86]}
      />
      <mesh
        castShadow
        receiveShadow 
        geometry={nodes.balcony_door001.geometry}
        material={nodes.balcony_door001.material}
        position={[0, 0, 0.1]}
        scale={[18.33, 13.02, 18.86]}
      />
      <mesh
        castShadow
        receiveShadow 
        geometry={nodes.balcony_door002.geometry}
        material={materials["Procedural wood material"]}
        position={[0, 0, 0.1]}
        scale={[18.33, 13.02, 18.86]}
      >
        <mesh
          castShadow
          receiveShadow 
          geometry={nodes.handle1001.geometry}
          material={materials["Car chrome"]}
          position={[0.19, 1.63, -2.47]}
          rotation={[0, -1.57, 0]}
          scale={[0, 0.08, 0]}
        />
      </mesh>
      <group scale={[18.33, 13.02, 18.86]}>
        <mesh
          castShadow
          receiveShadow 
          geometry={nodes.Plane052.geometry}
          material={materials["Architectural Glass"]}
        />
        <mesh
          castShadow
          receiveShadow 
          geometry={nodes.Plane052_1.geometry}
          material={materials["Black Metal Paint"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow 
        geometry={nodes.Plane006.geometry}
        material={nodes.Plane006.material}
        position={[5.51, 0.28, 5.94]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1.17, 0.33, 0.28]}
      />
      <mesh
        castShadow
        receiveShadow 
        geometry={nodes.Plane007.geometry}
        material={nodes.Plane007.material}
        position={[17.08, 8.79, 2.83]}
        scale={[1.44, 1, 3.12]}
      />
      <mesh
        castShadow
        receiveShadow 
        geometry={nodes.Plane008.geometry}
        material={nodes.Plane008.material}
        position={[14.57, 9.55, -1.23]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1.17, 0.33, 0.28]}
      />
      <mesh
        castShadow
        receiveShadow 
        geometry={nodes.Plane009.geometry}
        material={nodes.Plane009.material}
        position={[14.37, 8.49, -0.08]}
        scale={0.21}
      />
      <mesh
        castShadow
        receiveShadow 
        geometry={nodes.main_house_door_hub.geometry}
        material={nodes.main_house_door_hub.material}
        position={[18.25, 7.51, -12.41]}
        scale={[18.33, 13.02, 18.86]}
      />
      <mesh
        castShadow
        receiveShadow 
        geometry={nodes.main_house_door_decor.geometry}
        material={nodes.main_house_door_decor.material}
        position={[18.3, 5.7, -12.42]}
        scale={[18.33, 13.02, 18.86]}
      />
      <mesh
        castShadow
        receiveShadow 
        geometry={nodes.main_house_door.geometry}
        material={materials["Procedural wood material"]}
        position={[18.33, 7.57, -10.14]}
        scale={[18.13, 12.87, 18.65]}
      >
        <mesh
          castShadow
          receiveShadow 
          geometry={nodes.Cube001.geometry}
          material={materials["Car chrome"]}
          position={[-2.02, -0.36, -4.26]}
          scale={[0, 0.08, 0]}
        />
        <mesh
          castShadow
          receiveShadow 
          geometry={nodes.handle1.geometry}
          material={materials["Car chrome"]}
          position={[0.01, -0.29, -0.27]}
          scale={[0, 0.08, 0]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow 
        geometry={nodes.Plane026.geometry}
        material={nodes.Plane026.material}
        position={[-34.74, 15.01, -79.96]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[3.57, 1, 0.2]}
      />
      <mesh
        castShadow
        receiveShadow 
        geometry={nodes.Plane027.geometry}
        material={nodes.Plane027.material}
        position={[-34.74, 14.47, -83.69]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[3.57, 0.44, 0.17]}
      />
      <mesh
        castShadow
        receiveShadow 
        geometry={nodes.Plane028.geometry}
        material={nodes.Plane028.material}
        position={[-34.74, 13.44, -87.71]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[3.57, 1, 0.2]}
      />
      <mesh
        castShadow
        receiveShadow 
        geometry={nodes.Plane029.geometry}
        material={nodes.Plane029.material}
        position={[-31.17, 13.47, -89.37]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={[2.08, 0.44, 0.17]}
      />
      <mesh
        castShadow
        receiveShadow 
        geometry={nodes.Plane030.geometry}
        material={nodes.Plane030.material}
        position={[-16.8, 9.78, -87.87]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[3.57, 1, 0.2]}
      />
      <mesh
        castShadow
        receiveShadow 
        geometry={nodes.Plane031.geometry}
        material={nodes.Plane031.material}
        position={[-20.39, 9.81, -87.29]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={[2.08, 0.44, 0.17]}
      />
      <mesh
        castShadow
        receiveShadow 
        geometry={nodes.Plane032.geometry}
        material={nodes.Plane032.material}
        position={[-22.47, 8.35, -82.13]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[2.08, 0.44, 0.17]}
      />
      <mesh
        castShadow
        receiveShadow 
        geometry={nodes.top_glass.geometry}
        material={materials["Architectural Glass"]}
        position={[0, 25.94, -72.58]}
        scale={[18.33, 13.02, 18.86]}
      />
      <mesh
        castShadow
        receiveShadow 
        geometry={nodes.top_glass_frame.geometry}
        material={materials["Black Metal Paint"]}
        scale={[18.33, 13.02, 18.86]}
      />
      <mesh
        castShadow
        receiveShadow 
        geometry={nodes.top_floor_outside.geometry}
        material={nodes.top_floor_outside.material}
        scale={[18.33, 13.02, 18.86]}
      />
      <mesh
        castShadow
        receiveShadow 
        geometry={nodes.grill_2.geometry}
        material={nodes.grill_2.material}
        scale={[18.33, 13.02, 18.86]}
      />
      <mesh
        castShadow
        receiveShadow 
        geometry={nodes.pillars2.geometry}
        material={materials["Procedural wood material"]}
        position={[17.64, 15.21, -79.28]}
        scale={0.67}
      />
      <mesh
        castShadow
        receiveShadow 
        geometry={nodes.top_glass_frame001.geometry}
        material={materials["Black Metal Paint"]}
        position={[0, 29.27, -54.73]}
        scale={[18.33, 8.11, 18.86]}
      />
      <group position={[0, 7.6, -46.85]} scale={[18.33, 13.02, 18.86]}>
        <mesh
          castShadow
          receiveShadow 
          geometry={nodes.Plane018.geometry}
          material={materials["Black Metal Paint"]}
        />
        <mesh
          castShadow
          receiveShadow 
          geometry={nodes.Plane018_1.geometry}
          material={materials["Architectural Glass"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow 
        geometry={nodes.swimming_pool_door.geometry}
        material={materials["Black Metal Paint"]}
        position={[-3.29, 14.69, -46.79]}
        scale={[18.33, 13.02, 18.86]}
      />
      <mesh
        castShadow
        receiveShadow 
        geometry={nodes.pool_bathroom_door.geometry}
        material={nodes.pool_bathroom_door.material}
        position={[-0.22, 0, 0]}
        scale={[18.33, 13.02, 18.86]}
      />
      <mesh
        castShadow
        receiveShadow 
        geometry={nodes.pool_bathroom_almirah.geometry}
        material={nodes.pool_bathroom_almirah.material}
        position={[-0.22, 0, 0]}
        scale={[18.33, 13.02, 18.86]}
      />
      <mesh
        castShadow
        receiveShadow 
        geometry={nodes.pool_sitting_area.geometry}
        material={nodes.pool_sitting_area.material}
        position={[5.38, 8.28, -52.37]}
        scale={[18.33, 13.02, 18.86]}
      />
      <mesh
        castShadow
        receiveShadow 
        geometry={nodes.pool_area.geometry}
        material={nodes.pool_area.material}
        position={[-2.61, 8.66, -64.46]}
        scale={[18.33, 13.02, 18.86]}
      />
      <mesh
        castShadow
        receiveShadow 
        geometry={nodes.pool_tub.geometry}
        material={nodes.pool_tub.material}
        scale={[18.33, 13.02, 18.86]}
      />
      <mesh
        castShadow
        receiveShadow 
        geometry={nodes.swimming_pool_door001.geometry}
        material={materials["Architectural Glass"]}
        position={[-3.29, 14.69, -46.79]}
        scale={[18.33, 13.02, 18.86]}
      >
        <mesh
          castShadow
          receiveShadow 
          geometry={nodes.Cube002.geometry}
          material={materials["Car chrome"]}
          position={[0.36, -0.55, 0.01]}
          rotation={[0, -1.57, 0]}
          scale={[0, 0.08, 0]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow 
        geometry={nodes.pool_sitting_area001.geometry}
        material={nodes.pool_sitting_area001.material}
        position={[5.38, 8.28, -52.37]}
        scale={[18.33, 13.02, 18.86]}
      />
      <group position={[-29.23, -0.02, -84.82]}>
        <mesh
          castShadow
          receiveShadow 
          geometry={nodes.Plane028_1.geometry}
          material={materials["Black Metal Paint"]}
        />
        <mesh
          castShadow
          receiveShadow 
          geometry={nodes.Plane028_2.geometry}
          material={materials["Architectural Glass"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow 
        geometry={nodes.outside_stairs_door.geometry}
        material={materials["Procedural wood material"]}
        position={[-18.35, 5.77, -86.64]}
      />
      <group scale={[18.33, 13.02, 18.86]}>
        <mesh
          castShadow
          receiveShadow 
          geometry={nodes.Plane014.geometry}
          material={materials.concrete}
        />
        <mesh
          castShadow
          receiveShadow 
          geometry={nodes.Plane014_1.geometry}
          material={materials["Architectural Glass"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow 
        geometry={nodes.pillars1.geometry}
        material={materials["Procedural wood material"]}
        position={[17.85, 17.68, -57.09]}
        scale={[18.33, 13.02, 18.86]}
      />
      <mesh
        castShadow
        receiveShadow 
        geometry={nodes.room_1.geometry}
        material={nodes.room_1.material}
        scale={[18.33, 13.02, 18.86]}
      />
      <mesh
        castShadow
        receiveShadow 
        geometry={nodes.house_floor_inside.geometry}
        material={nodes.house_floor_inside.material}
        scale={[18.33, 13.02, 18.86]}
      />
      <mesh
        castShadow
        receiveShadow 
        geometry={nodes.first_floor_floor_inside.geometry}
        material={nodes.first_floor_floor_inside.material}
        scale={[18.33, 13.02, 18.86]}
      />
      <mesh
        castShadow
        receiveShadow 
        geometry={nodes.Plane.geometry}
        material={materials["Procedural wood material"]}
        position={[-0.08, 27.85, 5.46]}
        scale={[18.67, 1, 0.39]}
      />
      <mesh
        castShadow
        receiveShadow 
        geometry={nodes.Plane001.geometry}
        material={materials["Material.001"]}
        position={[-0.08, 28.01, 4.66]}
        scale={[19.36, 1, 0.39]}
      />
      <group scale={[18.33, 13.02, 18.86]}>
        <mesh
          castShadow
          receiveShadow 
          geometry={nodes.Plane038.geometry}
          material={materials["Plaster - Brushed"]}
        />
        <mesh
          castShadow
          receiveShadow 
          geometry={nodes.Plane038_1.geometry}
          material={materials["Wood Parquet"]}
        />
        <mesh
          castShadow
          receiveShadow 
          geometry={nodes.Plane038_2.geometry}
          material={materials.concrete}
        />
      </group>
      <group position={[0.17, 15.21, -32.85]} scale={[18.09, 13.02, 18.86]}>
        <mesh
          castShadow
          receiveShadow 
          geometry={nodes.Plane049.geometry}
          material={materials.concrete}
        />
        <mesh
          castShadow
          receiveShadow 
          geometry={nodes.Plane049_1.geometry}
          material={materials["Material.002"]}
        />
      </group>
    </group>
  )
}