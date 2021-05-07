import { Mediator } from "../../com/koreez/puremvc/Mediator";
import SquareComponent from "./SquareComponent";

export default class SquareMediator extends Mediator<SquareComponent> {
    public static NAME:string = "SquareMediator";

    constructor() {
        super(SquareMediator.NAME, new SquareComponent);
    }

    public handleNotification(notificationName: string, ...args: any[]) {
    }
}
