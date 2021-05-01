import RandomColorProxy from "./mvc/model/RandomColorProxy";
import MyFacade from "./MyFacade";

export function startupCommand(multitonKey: string, notificationName: string) {
    console.log("execute startup command");
}

export function randomColorCommand(multitonKey: string, notificationName: string) {
    let facade = MyFacade.getInstance();
    let randomColorProxy:RandomColorProxy = facade.retrieveProxy(RandomColorProxy.NAME);
    console.log("execute random color command");
    randomColorProxy.refreshAndSendNotification();
}