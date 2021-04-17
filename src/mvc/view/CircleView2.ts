import * as PIXI from 'pixi.js';

export default class CircleView2 extends PIXI.Graphics{
    constructor(){
        super();
        let randomcolor:number = Math.floor(Math.random()*16777215);
        this.beginFill(randomcolor);
        this.drawCircle(0, 0, 50);
    }
}
