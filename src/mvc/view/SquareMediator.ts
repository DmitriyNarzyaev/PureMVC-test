import { Mediator } from "../../com/koreez/puremvc/Mediator";
import SquareComponent from "./SquareComponent";

export default class SquareViewMediator extends Mediator<SquareComponent> {
    public static NAME:string = "SquareViewMediator";

    constructor() {
        super(SquareViewMediator.NAME, new SquareComponent);
    }

    public handleNotification(notificationName: string, ...args: any[]) {
    }
}
