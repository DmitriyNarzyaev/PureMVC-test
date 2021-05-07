import { Mediator } from "../../com/koreez/puremvc/Mediator";
import RootComponent from "./RootComponent";

export default class RootMediator extends Mediator<RootComponent> {
    public static NAME:string = "RootMediator";

    constructor() {
        super(RootMediator.NAME, new RootComponent);
    }

    public handleNotification(notificationName: string, ...args: any[]) {
    }
}