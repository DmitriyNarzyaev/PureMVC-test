import * as PIXI from 'pixi.js';
import PixiProxy from './mvc/model/PixiProxy';
import CircleComponent from './mvc/view/CircleComponent';
//import TextInput from "pixi-text-input"
import CircleViewMediator from './mvc/view/CircleMediator';
import PolygonViewMediator from './mvc/view/PolygonMediator';
import RootComponent from './mvc/view/RootComponent';
import RootMediator from './mvc/view/RootMediator';
import SquareViewMediator from './mvc/view/SquareMediator';
import MyFacade from "./MyFacade";
import Utils from './Utils';

export class Main {
    public static readonly WIDTH:number = 800;
    public static readonly HEIGHT:number = 600;

    constructor() {
        let facade = MyFacade.getInstance();
        facade.sendNotification(MyFacade.STARTUP_NOTIFICATION_NAME);        //test

        // setInterval(() => {
             facade.sendNotification(MyFacade.GENERATE_RANDOM_COLOR_COMMAND_NAME);
        // }, 1000);

        let pixiProxy:PixiProxy = MyFacade.getInstance().retrieveProxy(PixiProxy.NAME);
        let app:PIXI.Application = pixiProxy.getData().app;

        let rootMediator:RootMediator = facade.retrieveMediator(RootMediator.NAME);
        let rootView:RootComponent = rootMediator.getViewComponent();
        app.stage.addChild(rootView);

        let squareMediator:SquareViewMediator = facade.retrieveMediator(SquareViewMediator.NAME);
        rootView.addChild(squareMediator.getViewComponent());

        let circleMediator:CircleViewMediator = facade.retrieveMediator(MyFacade.CIRCLE_1_MEDIATOR_NAME);
        let circleView:CircleComponent = circleMediator.getViewComponent();
        rootView.addChild(circleView);
        circleView.x = squareMediator.getViewComponent().width + circleView.width/2;
        circleView.y = circleView.height/2;

        let circleMediator2:CircleViewMediator = facade.retrieveMediator(MyFacade.CIRCLE_2_MEDIATOR_NAME);
        let circleView2:CircleComponent = circleMediator2.getViewComponent();
        rootView.addChild(circleView2);
        circleView2.x = circleView.x + circleView.width;
        circleView2.y = circleView.y;

        let polygonMediator:PolygonViewMediator = facade.retrieveMediator(PolygonViewMediator.NAME);
        rootView.addChild(polygonMediator.getViewComponent());
        polygonMediator.getViewComponent().x = circleView2.x + circleView2.width/2;
        rootView.x = Math.round(Main.WIDTH - rootView.width)/2;
        rootView.y = Math.round(Main.HEIGHT - rootView.height)/2;



        let TextInput = require('pixi-text-input');
        TextInput = new TextInput({
            input: {
                fontSize: '25pt',
                padding: '5px',
                width: '370px',
                color: '#ff272E'
            },
            box: {
                default: {fill: 0x888888, rounded: 0, stroke: {color: 0x005500, width: 1}},
                focused: {fill: 0xffffff, rounded: 0, stroke: {color: 0x00ff00, width: 1}},
                disabled: {fill: 0x888888, rounded: 20}
            }
        })
        TextInput.placeholder = 'Enter your Text...'
        rootView.addChild(TextInput);
        TextInput.x = 0;
        TextInput.y = squareMediator.getViewComponent().height + 10;
        TextInput.on("input", (e:string) => {
            this.textInputTest(e);
        });
        //TextInput.focus(); // 

        Utils.sendRequest("?action=get_random_number", this.onRandomNumberRequestSuccess, this.onRandomNumberRequestError);
        Utils.sendRequest("?action=summ_numbers&first_number=10&second_number=16", this.onSummRequestSuccess, this.onSummRequestError);
    }

    private textInputTest(text):void {
        console.log(text);
    }

    private onRandomNumberRequestSuccess(json:any):void {
        console.log("onRandomNumberRequestSuccess");
        console.log("random value: " + json["result"]["random"]);
    }

    private onRandomNumberRequestError(info:any):void {
        console.log("onRandomNumberRequestError");
        console.log("info: " + info);
    }

    private onSummRequestSuccess(json:any):void {
        console.log("onSummRequestSuccess");
        console.log("summ: " + json["result"]["summ"]);
    }

    private onSummRequestError(info:any):void {
        console.log("onSummRequestError");
        console.log("info: " + info);
    }
}
