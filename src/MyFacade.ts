import { Facade } from "./com/koreez/puremvc/Facade";
import CircleViewMediator from "./mvc/view/CircleViewMediator";
import { startupCommand } from "./StartupCommand";

export default class MyFacade extends Facade {
    public static STARTUP_NOTIFICATION_NAME:string = "StartupNotification";
    public static TEST_RECOLOR_NOTIFICATION_NAME:string = "TestRecolorNotificaton";
    private static instance:MyFacade;

    public static getInstance():MyFacade {
        if (!MyFacade.instance) {
            MyFacade.instance = new MyFacade("MyFacade");
        }
        return MyFacade.instance;
    }

    public initializeView():void {
        super.initializeView();
        this.registerMediator(new CircleViewMediator);
    }

    public initializeController():void {
        super.initializeController();
        this.registerCommand(MyFacade.STARTUP_NOTIFICATION_NAME, startupCommand);
    }
}