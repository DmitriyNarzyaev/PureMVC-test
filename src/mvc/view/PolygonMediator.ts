import { Mediator } from "../../com/koreez/puremvc/Mediator";
import MyFacade from "../../MyFacade";
import RandomColorProxy from "../model/RandomColorProxy";
import PolygonComponent from "./PolygonComponent";

export default class PolygonMediator extends Mediator<PolygonComponent> {
    public static NAME:string = "PolygonMediator";

    constructor() {
        super(PolygonMediator.NAME, new PolygonComponent());
        this.subscribeNotification([MyFacade.TEST_RECOLOR_NOTIFICATION_NAME]);
    }

    public handleNotification(notificationName: string, ...args: any[]) {
        switch (notificationName) {
            case MyFacade.TEST_RECOLOR_NOTIFICATION_NAME:
            let randomColorProxy:RandomColorProxy = MyFacade.getInstance().retrieveProxy(RandomColorProxy.NAME);
            let color:number = randomColorProxy.getData().color;
            this.getViewComponent().polygonRecolor(color);
            break;
        }
    }
}
