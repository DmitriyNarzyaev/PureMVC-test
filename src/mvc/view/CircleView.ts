import * as PIXI from 'pixi.js';

export default class CircleView extends PIXI.Graphics{
    constructor(){
        super();
        this.circleRecolor();
    }

    public circleRecolor():void {
        let randomcolor:number = Math.floor(Math.random()*16777215);
        this.clear();
        this.beginFill(randomcolor);
        this.drawCircle(0, 0, 50);
    }
}
