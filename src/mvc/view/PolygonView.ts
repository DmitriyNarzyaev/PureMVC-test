import * as PIXI from 'pixi.js';

export default class PolygonView extends PIXI.Graphics{
    constructor(path:number[]){
        super();
        this.polygonRecolor(path);
    }

    public polygonRecolor(path:number[]):void {
        let randomcolor:number = Math.floor(Math.random()*16777215);
        this.clear();
        this.beginFill(randomcolor);
        this.drawPolygon(path);
    }
}
