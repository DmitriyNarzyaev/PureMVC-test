import * as PIXI from 'pixi.js';
import Utils from '../../Utils';

export default class SquareComponent extends PIXI.Graphics{
    constructor(){
        super();
        this.recolor();
        
        window.addEventListener("keydown",
            (e:KeyboardEvent) => {
            this.testHandler(e);
        });
    }

    public recolor():void {
        let r:number = 0;
        let g:number = Math.floor(Math.random()*256);
        let b:number = 0;

        let randomcolor:number = Math.floor(Utils.rgbToHex(r, g, b));
        this.clear();
        this.beginFill(randomcolor);
        this.drawRect(0, 0, 100, 100);
    }

    private testHandler(e:KeyboardEvent):void {
        this.recolor();
    }
}
