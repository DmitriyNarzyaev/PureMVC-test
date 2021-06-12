import RandomColorProxy from "../model/RandomColorProxy";
import {IFacade} from "../../com/koreez/puremvc/IFacade";

let _facade:IFacade;

export function initCommands(facade:IFacade):void {
    _facade = facade;
}

export function startupCommand(multitonKey: string, notificationName: string) {
    console.log("execute startup command");
}

export function randomColorCommand(multitonKey: string, notificationName: string) {
    let randomColorProxy:RandomColorProxy = _facade.retrieveProxy(RandomColorProxy.NAME);
    console.log("execute random color command");
    randomColorProxy.refreshAndSendNotification();
}