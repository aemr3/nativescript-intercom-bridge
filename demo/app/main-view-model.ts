import {Observable} from 'data/observable';
import {IntercomBridge} from 'nativescript-intercom-bridge';

export class HelloWorldModel extends Observable {
  constructor() {
    super();
    IntercomBridge.registerUnidentifiedUser();
  }

  onTap() {
    IntercomBridge.displayMessenger();
  }
}
