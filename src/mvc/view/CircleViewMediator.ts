import { Mediator } from "../../com/koreez/puremvc/Mediator";
import CircleView from "./CircleView";

export default class CircleViewMediator extends Mediator<CircleView> {
    public static NAME = "CircleViewMediator";
 
    constructor() {
        super(CircleViewMediator.NAME, new CircleView);
        //this.subscribeNotification([ProgressView.SHOW, ProgressView.HIDE, ProgressView.UPDATE]);
     }
 
    public handleNotification(notificationName: string, ...args: any[]) {
        // switch (notificationName) {
        //     case ProgressView.SHOW:
        //         this.viewComponent.show();
        //         break;
        //     case ProgressView.HIDE:
        //         this.viewComponent.hide();
        //         break;
        //     case ProgressView.UPDATE:
        //         this.viewComponent.updatePercent(args[0]);
        //         break;
        // }
    }
}
