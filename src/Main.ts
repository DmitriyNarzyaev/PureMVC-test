import * as PIXI from 'pixi.js';
import CircleView from './mvc/view/CircleView';
import CircleViewMediator from './mvc/view/CircleViewMediator';
import SquareViewMediator from './mvc/view/SquareViewMediator';
import MyFacade from "./MyFacade";

export class Main {
    private _app:PIXI.Application;
    private static readonly WIDTH:number = 800;
    private static readonly HEIGHT:number = 600;

    constructor() {
        let facade = MyFacade.getInstance();
        facade.sendNotification(MyFacade.STARTUP_NOTIFICATION_NAME);        //test
        this.initPixi();        //TODO: перенести в startupCommand

        setInterval(() => {
            facade.sendNotification(MyFacade.TEST_RECOLOR_NOTIFICATION_NAME);
        }, 1000);

        //TODO: создать основной контейнер (root)
        let circleMediator:CircleViewMediator = facade.retrieveMediator(CircleViewMediator.NAME);
        let circleView:CircleView = circleMediator.getViewComponent();
        this._app.stage.addChild(circleView);
        circleView.x = Math.round(Main.WIDTH/2);
        circleView.y = Math.round(Main.HEIGHT/2);

        let squareMediator:SquareViewMediator = facade.retrieveMediator(SquareViewMediator.NAME);
        this._app.stage.addChild(squareMediator.getViewComponent());
    }

    private initPixi():void {           //TODO: перенести в startupCommand
        this._app = new PIXI.Application({
            width: Main.WIDTH,
            height: Main.HEIGHT,
            backgroundColor: 0x1099bb,
            resolution: window.devicePixelRatio || 1,
        });
        document.body.appendChild(this._app.view);
    }
}
