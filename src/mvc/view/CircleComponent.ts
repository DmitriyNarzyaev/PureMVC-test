import * as PIXI from 'pixi.js';

export default class CircleComponent extends PIXI.Graphics{
    constructor(){
        super();
        this.beginFill(0xffffff);
        this.drawCircle(0, 0, 50);
    }

    public circleRecolor(color:number):void {
        this.tint = color;
    }
}
