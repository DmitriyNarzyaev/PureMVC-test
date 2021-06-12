import { Facade } from "./com/koreez/puremvc/Facade";
import {initCommands, randomColorCommand, startupCommand} from "./mvc/controller/Commands";
import PixiProxy from "./mvc/model/PixiProxy";
import RandomColorProxy from "./mvc/model/RandomColorProxy";
import RootViewMediator from "./mvc/view/RootMediator";
import CircleViewMediator from "./mvc/view/CircleMediator";
import PolygonViewMediator from "./mvc/view/PolygonMediator";
import SquareViewMediator from "./mvc/view/SquareMediator";

export default class MyFacade extends Facade {
    public static readonly PIXI_NOTIFICATION_NAME:string = "PixiNotification";
    public static readonly STARTUP_NOTIFICATION_NAME:string = "StartupNotification";
    public static readonly GENERATE_RANDOM_COLOR_COMMAND_NAME:string = "GenerateRandomColorCommandName";
    public static readonly CIRCLE_1_MEDIATOR_NAME:string = "circle1";
    public static readonly CIRCLE_2_MEDIATOR_NAME:string = "circle2";
    public static readonly WIDTH:number = 800;
    public static readonly HEIGHT:number = 600;
    private static instance:MyFacade;

    public static getInstance():MyFacade {
        if (!MyFacade.instance) {
            MyFacade.instance = new MyFacade("MyFacade");
        }
        return MyFacade.instance;
    }

    public initializeView():void {
        super.initializeView();
        this.registerMediator(new RootViewMediator);
        this.registerMediator(new CircleViewMediator(MyFacade.CIRCLE_1_MEDIATOR_NAME));
        this.registerMediator(new CircleViewMediator(MyFacade.CIRCLE_2_MEDIATOR_NAME));
        this.registerMediator(new SquareViewMediator);
        this.registerMediator(new PolygonViewMediator);
    }

    public initializeController():void {
        super.initializeController();
        initCommands(this);
        this.registerCommand(MyFacade.STARTUP_NOTIFICATION_NAME, startupCommand);
        this.registerCommand(MyFacade.GENERATE_RANDOM_COLOR_COMMAND_NAME, randomColorCommand);
    }

    public initializeModel():void {
        super.initializeModel();
        this.registerProxy(new PixiProxy(MyFacade.WIDTH, MyFacade.HEIGHT));
        this.registerProxy(new RandomColorProxy);
    }
}
