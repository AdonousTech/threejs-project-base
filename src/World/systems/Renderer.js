import { WebGLRenderer } from "three";

export class Renderer extends WebGLRenderer {

    constructor() {
        super();
        this.antialias = true;
        this.setPixelRatio( window.devicePixelRatio );
        this.setSize( window.innerWidth, window.innerHeight );
        this.physicallyCorrectLights = true;
        console.log(`Constructed Renderer ${this}`)
    }

    createRenderer() {
        return this;
    }

}