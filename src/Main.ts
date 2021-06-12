import * as PIXI from 'pixi.js';
import { Container } from 'pixi.js';
import { TextInput } from './InputText';
import PixiProxy from './mvc/model/PixiProxy';
import CircleComponent from './mvc/view/CircleComponent';
import CircleViewMediator from './mvc/view/CircleMediator';
import PolygonViewMediator from './mvc/view/PolygonMediator';
import RootComponent from './mvc/view/RootComponent';
import RootMediator from './mvc/view/RootMediator';
import SquareViewMediator from './mvc/view/SquareMediator';
import MyFacade from "./MyFacade";
import Utils from './Utils';

export class Main {
    private _rootView:RootComponent;
    private _firstTextField:any;
    private _secondTextField:any;

    constructor() {
        let facade = MyFacade.getInstance();
        facade.sendNotification(MyFacade.STARTUP_NOTIFICATION_NAME);        //test

        // setInterval(() => {
             facade.sendNotification(MyFacade.GENERATE_RANDOM_COLOR_COMMAND_NAME);
        // }, 1000);

        let pixiProxy:PixiProxy = MyFacade.getInstance().retrieveProxy(PixiProxy.NAME);
        let app:PIXI.Application = pixiProxy.getData().app;

        let rootMediator:RootMediator = facade.retrieveMediator(RootMediator.NAME);
        this._rootView = rootMediator.getViewComponent();
        app.stage.addChild(this._rootView);

        let squareMediator:SquareViewMediator = facade.retrieveMediator(SquareViewMediator.NAME);
        this._rootView.addChild(squareMediator.getViewComponent());

        let circleMediator:CircleViewMediator = facade.retrieveMediator(MyFacade.CIRCLE_1_MEDIATOR_NAME);
        let circleView:CircleComponent = circleMediator.getViewComponent();
        this._rootView.addChild(circleView);
        circleView.x = squareMediator.getViewComponent().width + circleView.width/2;
        circleView.y = circleView.height/2;

        let circleMediator2:CircleViewMediator = facade.retrieveMediator(MyFacade.CIRCLE_2_MEDIATOR_NAME);
        let circleView2:CircleComponent = circleMediator2.getViewComponent();
        this._rootView.addChild(circleView2);
        circleView2.x = circleView.x + circleView.width;
        circleView2.y = circleView.y;

            //FIXME: ПЕРЕДЕЛАТЬ ПОД КНОПКУ
        let polygonMediator:PolygonViewMediator = facade.retrieveMediator(PolygonViewMediator.NAME);
        this._rootView.addChild(polygonMediator.getViewComponent());
        polygonMediator.getViewComponent().x = circleView2.x + circleView2.width/2;
        this._rootView.x = Math.round(MyFacade.WIDTH - this._rootView.width)/2;
        this._rootView.y = Math.round(MyFacade.HEIGHT - this._rootView.height)/2;

        this._firstTextField = this.textInputWindow(0, 110, 'Enter first number...');
        this._secondTextField = this.textInputWindow(0, 170, 'Enter second number...');

        window.addEventListener("click",
            (e:MouseEvent) => {
            this.testPolygonFunction();
        });

        Utils.sendRequest(
            "?action=get_random_number",
            this.onRandomNumberRequestSuccess,
            this.onRandomNumberRequestError
        );
    }

    private textInputWindow(windowX:number, windowY:number, placeholder:string):any {
        let textInput = new TextInput({
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
        textInput.placeholder = placeholder
        this._rootView.addChild(textInput);
        textInput.x = windowX;
        textInput.y = windowY;
        textInput.restrict = new RegExp('^[0-9]+$|^$');
        return textInput;
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

    private testPolygonFunction():void {
        let firstText:string = this._firstTextField.text;
        if (firstText == "") {
            firstText = "0";
        }
        let secondText:string = this._secondTextField.text;
        if (secondText == "") {
            secondText = "0";
        }
        Utils.sendRequest(
            "?action=summ_numbers&first_number=" +
            firstText +
            "&second_number=" +
            secondText,
            this.onSummRequestSuccess,
            this.onSummRequestError
        );
        console.log(firstText + " + " + secondText);

    }
}
