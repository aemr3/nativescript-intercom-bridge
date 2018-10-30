import * as application from 'tns-core-modules/application';
import * as utils from 'tns-core-modules/utils/utils';

declare let io: any;

export class IntercomBridge {
  static init(apiKey: string, appId: string) {
    io.intercom.android.sdk.Intercom.initialize(utils.ad.getApplicationContext(), apiKey, appId);
  }

  static registerIdentifiedUser(options: {userId?: string|number, email?: string}) {
    if (typeof options.userId == 'number') {
      options.userId = String(options.userId);
    }

    let registration = io.intercom.android.sdk.identity.Registration.create();

    if (options.userId && options.userId.length > 0) {
      registration.withUserId(options.userId);
    }

    if (options.email && options.email.length > 0) {
      registration.withEmail(options.email);
    }

    io.intercom.android.sdk.Intercom.client().registerIdentifiedUser(registration);
  }

  static registerUnidentifiedUser() {
    io.intercom.android.sdk.Intercom.client().registerUnidentifiedUser();
  }

  static reset() {
    io.intercom.android.sdk.Intercom.client().reset();
  }

  static setSecureMode(secureHash: string, secureData: string) {
    io.intercom.android.sdk.Intercom.client().setSecureMode(secureHash, secureData);
  }

  static updateUser(attributes: any) {
    io.intercom.android.sdk.Intercom.client().updateUser(attributes);
  }

  static logEvent(eventName: string, metaData?: any) {
    if (metaData && metaData.length) {
        io.intercom.android.sdk.Intercom.client().logEvent(eventName, metaData);
    } else {
        io.intercom.android.sdk.Intercom.client().logEvent(eventName);
    }
  }

  static displayMessenger() {
    io.intercom.android.sdk.Intercom.client().displayMessenger();
  }

  static displayMessageComposer() {
    io.intercom.android.sdk.Intercom.client().displayMessageComposer();
  }

  static displayMessageComposerWithInitialMessage(initialMessage: string) {
    io.intercom.android.sdk.Intercom.client().displayMessageComposer(initialMessage);
  }

  static displayConversationsList() {
    io.intercom.android.sdk.Intercom.client().displayConversationsList();
  }

  static unreadConversationCount() {
    return io.intercom.android.sdk.Intercom.client().getUnreadConversationCount();
  }

  static setLauncherVisibility(visible: boolean) {
    io.intercom.android.sdk.Intercom.client().setLauncherVisibility(visible ? io.intercom.android.sdk.Intercom.VISIBLE : io.intercom.android.sdk.Intercom.GONE);
  }

  static setInAppMessageVisibility(visible: boolean) {
    io.intercom.android.sdk.Intercom.client().setInAppMessageVisibility(visible ? io.intercom.android.sdk.Intercom.VISIBLE : io.intercom.android.sdk.Intercom.GONE);
  }

  static hideMessenger() {
    io.intercom.android.sdk.Intercom.client().hideMessenger();
  }

  static enableLogging() {
    io.intercom.android.sdk.Intercom.setLogLevel(io.intercom.android.sdk.Intercom.LogLevel.DEBUG);
  }
}
