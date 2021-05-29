import * as PIXI from 'pixi.js';

export default class PolygonComponent extends PIXI.Graphics{
    private readonly _callback:()=>void;

    constructor(){
        super();
        this.beginFill(0xffffff);
        this.drawPolygon([0, 0, 80, 40, 80, 100, 0, 60]);
    }

    public polygonRecolor(color:number):void {
        this.tint = color;
    }
}
