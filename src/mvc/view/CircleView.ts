import * as PIXI from 'pixi.js';

export default class CircleView extends PIXI.Graphics{
    constructor(){
        super();
        this.beginFill(0xff0055);
        this.drawCircle(0, 0, 50);
    }
}
