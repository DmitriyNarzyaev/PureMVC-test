import { Proxy } from "../../com/koreez/puremvc/Proxy";
import MyFacade from "../../MyFacade";
import RandomColorVO from "./RandomColorVO";

export default class RandomColorProxy extends Proxy<RandomColorVO> {
    public static readonly NAME:string = "randomColorProxy";

    constructor() {
        super(RandomColorProxy.NAME, new RandomColorVO());
        this.refresh();
    }

    private refresh():void {
        this.getData().color = Math.floor(Math.random()*16777215);
    }

    public refreshAndSendNotification():void {
        this.refresh();
        MyFacade.getInstance().sendNotification(MyFacade.TEST_RECOLOR_NOTIFICATION_NAME);
        //MyFacade.getInstance().sendNotification(MyFacade.GENERATE_RANDOM_COLOR_COMMAND_NAME);
    }
}
