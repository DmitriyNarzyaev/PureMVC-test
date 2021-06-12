import {Command} from "./Controller";
import {Proxy} from "./Proxy";
import {Mediator} from "./Mediator";

export interface IFacade {
	initializeFacade():void
	registerCommand(notificationName:string, commandClassRef:Command):void
	removeCommand(notificationName:string):void
	hasCommand(notificationName:string):boolean
	registerProxy<V, T extends Proxy<V>>(proxy:T):void
	retrieveProxy<V, T extends Proxy<V>>(proxyName:string):T
	removeProxy<V, T extends Proxy<V>>(proxyName:string):T
	hasProxy(proxyName:string):boolean
	registerMediator<V, T extends Mediator<V>>(mediator:T):void
	retrieveMediator<V, T extends Mediator<V>>(mediatorName:string):T
	removeMediator<V, T extends Mediator<V>>(mediatorName:string):T
	sleepMediator<V, T extends Mediator<V>>(mediatorName:string):T
	awakeMediator<V, T extends Mediator<V>>(mediatorName:string):T
	hasMediator(mediatorName:string):boolean
	sendNotification(notificationName:string, ...args:any[]):void
	initializeNotifier(key:string):void
}
