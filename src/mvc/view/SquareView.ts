import * as PIXI from 'pixi.js';

export default class CircleView extends PIXI.Graphics{
    constructor(){
        super();
        this.recolor();
        
        window.addEventListener("keydown",
            (e:KeyboardEvent) => {
            this.testHandler(e);
        });
    }

    public recolor():void {
        let randomcolor:number = Math.floor(Math.random()*16777215);
        this.clear();
        this.beginFill(randomcolor);
        this.drawRect(0, 0, 25, 25);
    }

    private testHandler(e:KeyboardEvent):void {
        this.recolor();
    }
}
