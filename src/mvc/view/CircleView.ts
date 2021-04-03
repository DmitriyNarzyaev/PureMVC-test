import * as PIXI from 'pixi.js';

export default class CircleView extends PIXI.Graphics{
    constructor(){
        super();
        this.beginFill(0x000055);
        this.drawCircle(0, 0, 50);
    }
}
