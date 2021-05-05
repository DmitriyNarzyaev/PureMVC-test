import { Mediator } from "../../com/koreez/puremvc/Mediator";
import MyFacade from "../../MyFacade";
import RandomColorProxy from "../model/RandomColorProxy";
import CircleComponent from "./CircleComponent";

export default class CircleViewMediator extends Mediator<CircleComponent> {

    constructor(name:string) {
        super(name, new CircleComponent);
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
