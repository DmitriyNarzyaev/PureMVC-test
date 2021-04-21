import { Mediator } from "../../com/koreez/puremvc/Mediator";
import MyFacade from "../../MyFacade";
import PolygonView from "./PolygonView";

export default class PolygonViewMediator extends Mediator<PolygonView> {
    public static NAME = "PolygonViewMediator";

    constructor() {
        super(PolygonViewMediator.NAME, new PolygonView());
        this.subscribeNotification([MyFacade.TEST_RECOLOR_NOTIFICATION_NAME]);
    }

    public handleNotification(notificationName: string, ...args: any[]) {
        switch (notificationName) {
            case MyFacade.TEST_RECOLOR_NOTIFICATION_NAME:
                this.getViewComponent().polygonRecolor();
                break;
        }
    }
}
