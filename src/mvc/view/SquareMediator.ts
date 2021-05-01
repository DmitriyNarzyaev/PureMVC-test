import { Mediator } from "../../com/koreez/puremvc/Mediator";
import SquareView from "./SquareComponent";

export default class SquareViewMediator extends Mediator<SquareView> {
    public static NAME = "SquareViewMediator";

    constructor() {
        super(SquareViewMediator.NAME, new SquareView);
    }

    public handleNotification(notificationName: string, ...args: any[]) {
    }
}
