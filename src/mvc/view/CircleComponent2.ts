import * as PIXI from 'pixi.js';

export default class CircleComponent2 extends PIXI.Graphics{
    constructor(){
        super();
        this.beginFill(0xffffff);
        this.drawCircle(0, 0, 50);
    }
}
