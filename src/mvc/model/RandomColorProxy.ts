import { Proxy } from "../../com/koreez/puremvc/Proxy";
import RandomColorVO from "./RandomColorVO";

export default class RandomColorProxy extends Proxy<RandomColorVO> {
    public static readonly NAME:string = "randomColorProxy";
    public static readonly TEST_RECOLOR_NOTIFICATION_NAME:string = "TestRecolorNotification";

    constructor() {
        super(RandomColorProxy.NAME, new RandomColorVO());
        this.refresh();
    }

    private refresh():void {
        this.getData().color = Math.floor(Math.random()*16777215);
    }

    public refreshAndSendNotification():void {
        this.refresh();
        this.facade.sendNotification(RandomColorProxy.TEST_RECOLOR_NOTIFICATION_NAME);
    }
}
