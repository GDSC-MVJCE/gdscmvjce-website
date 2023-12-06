function GDSCModel({ nodes, materials, scale, position }) {
  return (
    <group dispose={null}>
      <group position={position}>
        <group
          position={[0, 0, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={scale}
        >
          <mesh
            geometry={nodes.imagetostl_mesh0.geometry}
            material={materials.mat0}
          />
          <mesh
            geometry={nodes.imagetostl_mesh1.geometry}
            material={materials.mat1}
          />
          <mesh
            geometry={nodes.imagetostl_mesh2.geometry}
            material={materials.mat2}
          />
          <mesh
            geometry={nodes.imagetostl_mesh3.geometry}
            material={materials.mat3}
          />
          <mesh
            geometry={nodes.imagetostl_mesh4.geometry}
            material={materials.mat4}
          />
          <mesh
            geometry={nodes.imagetostl_mesh5.geometry}
            material={materials.mat5}
          />
          <mesh
            geometry={nodes.imagetostl_mesh6.geometry}
            material={materials.mat6}
          />
          <mesh
            geometry={nodes.imagetostl_mesh7.geometry}
            material={materials.mat7}
          />
        </group>
      </group>
    </group>
  );
}

export default GDSCModel;
