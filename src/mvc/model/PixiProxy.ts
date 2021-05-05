import { Proxy } from "../../com/koreez/puremvc/Proxy";
import { Main } from "../../Main";
import PixiProxyVO from "./PixiProxyVO";
import * as PIXI from 'pixi.js';
import MyFacade from "../../MyFacade";

export default class PixiProxy extends Proxy<PixiProxyVO> {
    public static readonly NAME:string = "PixiProxy";

    constructor() {
        super(PixiProxy.NAME, new PixiProxyVO());
        this.initPixi();      
    }

    public initPixi():void {
        this.getData().app = new PIXI.Application({
            width: Main.WIDTH,
            height: Main.HEIGHT,
            backgroundColor: 0x111111,
            resolution: window.devicePixelRatio || 1,
        });
        document.body.appendChild(this.getData().app.view);
    }

    public sendNotification():void {
        MyFacade.getInstance().sendNotification(MyFacade.PIXI_NOTIFICATION_NAME);
    }
}