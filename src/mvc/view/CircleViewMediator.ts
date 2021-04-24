import { Mediator } from "../../com/koreez/puremvc/Mediator";
import MyFacade from "../../MyFacade";
import RandomColorProxy from "../model/RandomColorProxy";
import CircleView from "./CircleView";

export default class CircleViewMediator extends Mediator<CircleView> {

    constructor(name:string) {
        super(name, new CircleView);
        this.subscribeNotification([MyFacade.TEST_RECOLOR_NOTIFICATION_NAME]);
    }

    public handleNotification(notificationName: string, ...args: any[]) {
        switch (notificationName) {
            case MyFacade.TEST_RECOLOR_NOTIFICATION_NAME:
                let randomColorProxy:RandomColorProxy = MyFacade.getInstance().retrieveProxy(RandomColorProxy.NAME);
                let color:number = randomColorProxy.getData().color;
                this.getViewComponent().circleRecolor(color);
                break;
        }
    }
}
