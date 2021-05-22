import * as PIXI from 'pixi.js';

export default class PolygonComponent extends PIXI.Graphics{
    private readonly _callback:()=>void;

    constructor(){
        super();
        this.beginFill(0xffffff);
        this.drawPolygon([0, 0, 80, 40, 80, 100, 0, 60]);
        this.interactive = true; 
		this.buttonMode = true;
    }

    public polygonRecolor(color:number):void {
        this.tint = color;
    }

    public polygonFunction(number1:number, number2:number):number {
        return number1 + number2;
    }
}
