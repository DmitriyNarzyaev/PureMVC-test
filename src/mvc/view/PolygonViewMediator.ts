import { Mediator } from "../../com/koreez/puremvc/Mediator";
import MyFacade from "../../MyFacade";
import PolygonView from "./PolygonView";

export default class PolygonViewMediator extends Mediator<PolygonView> {
    public static NAME = "PolygonViewMediator";

    constructor() {
        super(PolygonViewMediator.NAME, new PolygonView([0, 0, 80, 40, 80, 100, 0, 60]));   //FIXME
        this.subscribeNotification([MyFacade.TEST_RECOLOR_NOTIFICATION_NAME]);
    }

    public handleNotification(notificationName: string, ...args: any[]) {
        switch (notificationName) {
            case MyFacade.TEST_RECOLOR_NOTIFICATION_NAME:
                this.getViewComponent().polygonRecolor([0, 0, 80, 40, 80, 100, 0, 60]);     //FIXME
                break;
        }
    }
}
