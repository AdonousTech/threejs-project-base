import { Camera } from "./components/Camera";
import { Lights } from "./components/Lights";
import { PlayerCharacter } from "./components/PlayerCharacter";
import { Renderer } from "./systems/Renderer";
import { Resizer } from "./systems/Resizer";
import { WorldScene } from "./components/Scene";
import { Landscape } from "./components/Landscape";
import { Controls } from "./components/Controls";
 
export class World {

    scene;
    camera;
    controls;
    landscape;
    lights;
    PC;
    renderer;
    resizer;

    constructor(container) {
        this.camera = new Camera().createCamera();
        this.scene = new WorldScene().createScene();
        this.renderer = new Renderer().createRenderer();
        
        container.append(this.renderer.domElement);

        // Create components
        // Update the camera matrix with latest data before constructing PC
        this.camera.updateMatrixWorld();
        
        // Add the PC
        this.PC = new PlayerCharacter(this.camera, container, this.scene).createPC();
        this.scene.add(this.PC);

        // Add lights
        this.lights = new Lights().createLights().forEach(light => {
            this.scene.add(light);
        });

        // Add Camera controls
        this.controls = new Controls(this.camera, this.renderer.domElement).createControls();

        // Paint Greybox Landscape
        this.landscape = new Landscape().createGreyBoxLandscape(this.scene);

        // Activate Resizer
        this.resizer = new Resizer(container, this.camera, this.renderer);
    }

    getCamera() {
        return this.camera;
    }

    getControls() {
        return this.controls
    }

    getScene() {
        return this.scene
    }

    getrenderer() {
        return this.renderer
    }

    getPC() {
        return this.PC
    }

    render() {
        // draw a single frame
        this.renderer.render(this.scene, this.camera);
    }
}