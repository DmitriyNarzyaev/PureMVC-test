import { Facade } from "./com/koreez/puremvc/Facade";
import { startupCommand } from "./StartupCommand";

export default class MyFacade extends Facade {
    public static STARTUP_NOTIFICATION_NAME:string = "StartupNotification";
    private static instance:MyFacade;

    public static getInstance():MyFacade {
        if (!MyFacade.instance) {
            MyFacade.instance = new MyFacade("MyFacade");
        }
        return MyFacade.instance;
    }

    public initializeController():void {
        super.initializeController();
        this.registerCommand(MyFacade.STARTUP_NOTIFICATION_NAME, startupCommand);
    }
}