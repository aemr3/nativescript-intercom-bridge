import * as application from 'application';
import {IntercomBridge} from 'nativescript-intercom-bridge';

declare var Intercom: any;
application.on(application.launchEvent, function (args: application.ApplicationEventData) {
    let apiKey = application.android ? 'android_sdk-your-key' : 'ios_sdk-your-key';
    IntercomBridge.init(apiKey, 'your-app-id');
    IntercomBridge.enableLogging();
});
application.start({ moduleName: 'main-page' });
