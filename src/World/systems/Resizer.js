export class Resizer {

    constructor(container, camera, renderer) {

      window.addEventListener( 'resize', onWindowResize );

      // Note: hacky closure, but it works a treat
      function onWindowResize() {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( container.clientWidth, container.clientHeight );
        renderer.setPixelRatio(window.devicePixelRatio);
      }

    }

  }