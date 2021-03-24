// import * as PIXI from 'pixi.js';
// import { Graphics } from '@pixi/graphics';
// import MyFacade from './MyFacade';
// import SomeClass from './SomeClass';

import MyFacade from "./MyFacade";

// let facade = MyFacade.getInstance();
// facade.sendNotification(MyFacade.STARTUP_NOTIFICATION_NAME);
// let facade = new SomeClass();

//import puremvc from 'puremvc';
//import * as controller from 'puremvc/controller/command';

// let myGraphics:PIXI.Graphics = new PIXI.Graphics;
// console.log(myGraphics);

export class Main {
    constructor() {
        console.log("Main!!!");
        let facade = MyFacade.getInstance();
        facade.initializeController();
        facade.sendNotification(MyFacade.STARTUP_NOTIFICATION_NAME);
    }
}