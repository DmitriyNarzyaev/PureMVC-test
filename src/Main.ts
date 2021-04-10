import * as PIXI from 'pixi.js';
import CircleView from './mvc/view/CircleView';
import CircleViewMediator from './mvc/view/CircleViewMediator';
import SquareViewMediator from './mvc/view/SquareViewMediator';
// import { Graphics } from '@pixi/graphics';
// import MyFacade from './MyFacade';
// import SomeClass from './SomeClass';

import MyFacade from "./MyFacade";
import * as controller from './StartupCommand';

// let facade = MyFacade.getInstance();
// facade.sendNotification(MyFacade.STARTUP_NOTIFICATION_NAME);
// let facade = new SomeClass();

//import puremvc from 'puremvc';
//import * as controller from 'puremvc/controller/command';

// let myGraphics:PIXI.Graphics = new PIXI.Graphics;
// console.log(myGraphics);
export class Main {
    private _app:PIXI.Application;
    private static readonly WIDTH:number = 800;
    private static readonly HEIGHT:number = 600;

    constructor() {
        console.log("Main!!!");
        let facade = MyFacade.getInstance();
        facade.sendNotification(MyFacade.STARTUP_NOTIFICATION_NAME);

        setInterval(() => {
            facade.sendNotification(MyFacade.TEST_RECOLOR_NOTIFICATION_NAME);
        }, 1000);

        this.initPixi();
        let circle:CircleViewMediator = facade.retrieveMediator(CircleViewMediator.NAME);
        let circleComponent:CircleView = circle.getViewComponent();
        this._app.stage.addChild(circleComponent);
        circleComponent.x = Math.round(Main.WIDTH/2);
        circleComponent.y = Math.round(Main.HEIGHT/2);

        let square:SquareViewMediator = facade.retrieveMediator(SquareViewMediator.NAME);
        this._app.stage.addChild(square.getViewComponent());
    }

    private initPixi():void {
        this._app = new PIXI.Application({
            width: Main.WIDTH,
            height: Main.HEIGHT,
            backgroundColor: 0x1099bb,
            resolution: window.devicePixelRatio || 1,
        });
        document.body.appendChild(this._app.view);
    }
}
