import { Scene, Color, FogExp2 } from "three";

export class WorldScene extends Scene {

    constructor() {
        super();
        this.background = new Color( 0xcccccc );
        this.fog = new FogExp2( 0xcccccc, 0.002 );
        console.log(`Constructed WorldScene ${this}`);
    }

    createScene() {
        return this;
    }

}