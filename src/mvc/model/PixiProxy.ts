import { Proxy } from "../../com/koreez/puremvc/Proxy";
import PixiProxyVO from "./PixiProxyVO";
import * as PIXI from 'pixi.js';

export default class PixiProxy extends Proxy<PixiProxyVO> {
    public static readonly NAME:string = "PixiProxy";
    private readonly _width:number;
    private readonly _height:number;

    constructor(width:number, height:number) {
        super(PixiProxy.NAME, new PixiProxyVO());
        this._width = width;
        this._height = height;
        this.initPixi();
    }

    public initPixi():void {
        this.getData().app = new PIXI.Application({
            width: this._width,
            height: this._height,
            backgroundColor: 0x111111,
            resolution: window.devicePixelRatio || 1,
        });
        document.body.appendChild(this.getData().app.view);
    }
}
