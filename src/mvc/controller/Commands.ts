import RandomColorProxy from "../model/RandomColorProxy";
import {Facade} from "../..";

export function startupCommand(multitonKey: string, notificationName: string) {
    console.log("execute startup command");
}

export function randomColorCommand(multitonKey: string, notificationName: string) {
    let randomColorProxy:RandomColorProxy = Facade.getInstance(multitonKey).retrieveProxy(RandomColorProxy.NAME);
    console.log("execute random color command");
    randomColorProxy.refreshAndSendNotification();
}