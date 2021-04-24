import * as PIXI from 'pixi.js';
import Utils from '../../Utils';

export default class CircleView extends PIXI.Graphics{
    constructor(){
        super();
        this.beginFill(0xffffff);
        this.drawCircle(0, 0, 50);
    }

    public circleRecolor():void {
        this.tint = Utils.randomColorProxy();
    }
}
