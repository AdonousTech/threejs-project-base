import { MathUtils } from 'three';
import { World } from './World/World.js';

let camera;
let controls;
let scene;
let renderer;
let PC;

function main() {
  console.log('Called main');
  // Get a reference to the container element
  const container = document.querySelector('#scene-container');

  // create a new world
  const world = new World(container);

  // Cache components
  camera = world.getCamera();
  controls = world.getControls();
  scene = world.getScene();
  renderer = world.getrenderer();
  PC = world.getPC();

  // draw the scene
  world.render();

  animate();
}

function animate() {

  requestAnimationFrame( animate );
  
  controls.update(); // only required if controls.enableDamping = true, or if controls.autoRotate = true
  PC.syncUpdateCameraAndPC();

  // Check the distance between the PC and the camera
  const distance = camera.position.distanceTo( PC.getTargetPosition() );

  // If the distance is greater than a certain threshold, move the camera towards the cylinder
  if ( distance > 200) {
      controls.enabled = false;

      // Store the original x and y position of the camera
      const originalX = camera.position.x;
      const originalY = camera.position.y;

      // Lerp camera position on the z axis only
      camera.position.z = MathUtils.lerp(camera.position.z, PC.pcTargetPosition.z - distance, 0.5);

      // Reset the x and y position to the original values
      camera.position.x = originalX;
      camera.position.y = originalY;


      camera.updateMatrix();

  }

  // persist the data

  // draw the scene
  renderer.render(scene, camera);

}

main();