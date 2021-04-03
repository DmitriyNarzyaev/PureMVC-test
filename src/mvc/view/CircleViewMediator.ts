import { Mediator } from "../../com/koreez/puremvc/Mediator";
import MyFacade from "../../MyFacade";
import CircleView from "./CircleView";

export default class CircleViewMediator extends Mediator<CircleView> {
    public static NAME = "CircleViewMediator";

    constructor() {
        super(CircleViewMediator.NAME, new CircleView);
        this.subscribeNotification([MyFacade.TEST_RECOLOR_NOTIFICATION_NAME]);
    }

    public handleNotification(notificationName: string, ...args: any[]) {
        switch (notificationName) {
            case MyFacade.TEST_RECOLOR_NOTIFICATION_NAME:
                this.getViewComponent().circleRecolor();
                break;
        }
    }
}
