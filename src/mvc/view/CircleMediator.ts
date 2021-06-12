import { Mediator } from "../../com/koreez/puremvc/Mediator";
import RandomColorProxy from "../model/RandomColorProxy";
import CircleComponent from "./CircleComponent";

export default class CircleMediator extends Mediator<CircleComponent> {

    constructor(name:string) {
        super(name, new CircleComponent);
        this.subscribeNotification([RandomColorProxy.TEST_RECOLOR_NOTIFICATION_NAME]);
    }

    public handleNotification(notificationName: string, ...args: any[]) {
        switch (notificationName) {
            case RandomColorProxy.TEST_RECOLOR_NOTIFICATION_NAME:
                let randomColorProxy:RandomColorProxy = this.facade.retrieveProxy(RandomColorProxy.NAME);
                let color:number = randomColorProxy.getData().color;
                this.getViewComponent().circleRecolor(color);
                break;
        }
    }
}
