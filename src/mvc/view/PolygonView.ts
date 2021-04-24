import * as PIXI from 'pixi.js';
import Utils from '../../Utils';

export default class PolygonView extends PIXI.Graphics{
    constructor(){
        super();
        this.beginFill(0xffffff);
        this.drawPolygon([0, 0, 80, 40, 80, 100, 0, 60]);
    }

    public polygonRecolor():void {
        this.tint = Utils.randomColorProxy();
    }
}
