import * as PIXI from 'pixi.js';

export default class PolygonView extends PIXI.Graphics{
    constructor(){
        super();
        this.polygonRecolor();
    }

    public polygonRecolor():void {
        let randomcolor:number = Math.floor(Math.random()*16777215);
        this.clear();
        this.beginFill(randomcolor);
        this.drawPolygon([0, 0, 80, 40, 80, 100, 0, 60]);
    }
}
