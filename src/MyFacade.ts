import { Facade } from "./com/koreez/puremvc/Facade";
import CircleViewMediator from "./mvc/view/CircleViewMediator";
import PolygonViewMediator from "./mvc/view/PolygonViewMediator";
import SquareViewMediator from "./mvc/view/SquareViewMediator";
import { startupCommand } from "./StartupCommand";

export default class MyFacade extends Facade {
    public static STARTUP_NOTIFICATION_NAME:string = "StartupNotification";
    public static TEST_RECOLOR_NOTIFICATION_NAME:string = "TestRecolorNotificaton";
    public static CIRCLE_1_MEDIATOR_NAME:string = "circle1";
    public static CIRCLE_2_MEDIATOR_NAME:string = "circle2";
    private static instance:MyFacade;

    public static getInstance():MyFacade {
        if (!MyFacade.instance) {
            MyFacade.instance = new MyFacade("MyFacade");
        }
        return MyFacade.instance;
    }

    public initializeView():void {
        super.initializeView();
        this.registerMediator(new CircleViewMediator(MyFacade.CIRCLE_1_MEDIATOR_NAME));
        this.registerMediator(new CircleViewMediator(MyFacade.CIRCLE_2_MEDIATOR_NAME));
        this.registerMediator(new SquareViewMediator);
        this.registerMediator(new PolygonViewMediator);
    }

    public initializeController():void {
        super.initializeController();
        this.registerCommand(MyFacade.STARTUP_NOTIFICATION_NAME, startupCommand);
    }
}