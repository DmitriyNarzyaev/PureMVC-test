import { Facade } from "./com/koreez/puremvc/Facade";
import { randomColorCommand, startupCommand } from "./mvc/controller/Commands";
import RandomColorProxy from "./mvc/model/RandomColorProxy";
import CircleViewMediator from "./mvc/view/CircleMediator";
import PolygonViewMediator from "./mvc/view/PolygonMediator";
import SquareViewMediator from "./mvc/view/SquareMediator";

export default class MyFacade extends Facade {
    public static STARTUP_NOTIFICATION_NAME:string = "StartupNotification";
    public static GENERATE_RANDOM_COLOR_COMMAND_NAME:string = "GenerateRandomColorCommandName";
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
        this.registerCommand(MyFacade.GENERATE_RANDOM_COLOR_COMMAND_NAME, randomColorCommand);
    }

    public initializeModel():void {
        super.initializeModel();
        this.registerProxy(new RandomColorProxy);
    }
}
