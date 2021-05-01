import * as PIXI from 'pixi.js';
import RandomColorProxy from './mvc/model/RandomColorProxy';
import CircleView from './mvc/view/CircleComponent';
import CircleViewMediator from './mvc/view/CircleMediator';
import PolygonViewMediator from './mvc/view/PolygonMediator';
import SquareViewMediator from './mvc/view/SquareMediator';
import MyFacade from "./MyFacade";

export class Main {
    private _app:PIXI.Application;
    private static readonly WIDTH:number = 800;
    private static readonly HEIGHT:number = 600;

    constructor() {
        let facade = MyFacade.getInstance();
        facade.sendNotification(MyFacade.STARTUP_NOTIFICATION_NAME);        //test
        this.initPixi();

        setInterval(() => {
            facade.sendNotification(MyFacade.GENERATE_RANDOM_COLOR_COMMAND_NAME);
        }, 1000);

        //TODO: создать основной контейнер (root)
        let shapesContainer:PIXI.Container = new PIXI.Container;
        this._app.stage.addChild(shapesContainer);

        let squareMediator:SquareViewMediator = facade.retrieveMediator(SquareViewMediator.NAME);
        shapesContainer.addChild(squareMediator.getViewComponent());

        let circleMediator:CircleViewMediator = facade.retrieveMediator(MyFacade.CIRCLE_1_MEDIATOR_NAME);
        let circleView:CircleView = circleMediator.getViewComponent();
        shapesContainer.addChild(circleView);
        circleView.x = squareMediator.getViewComponent().width + circleView.width/2;
        circleView.y = circleView.height/2;

        let circleMediator2:CircleViewMediator = facade.retrieveMediator(MyFacade.CIRCLE_2_MEDIATOR_NAME);
        let circleView2:CircleView = circleMediator2.getViewComponent();
        shapesContainer.addChild(circleView2);
        circleView2.x = circleView.x + circleView.width;
        circleView2.y = circleView.y;

        let polygonMediator:SquareViewMediator = facade.retrieveMediator(PolygonViewMediator.NAME);
        shapesContainer.addChild(polygonMediator.getViewComponent());
        polygonMediator.getViewComponent().x = circleView2.x + circleView2.width/2;

        shapesContainer.x = Math.round(Main.WIDTH - shapesContainer.width)/2;
        shapesContainer.y = Math.round(Main.HEIGHT - shapesContainer.height)/2;
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
