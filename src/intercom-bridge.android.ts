import * as application from 'tns-core-modules/application';
import * as utils from 'tns-core-modules/utils/utils';

declare let io: any;
const Intercom  = io.intercom.android.sdk.Intercom;


export class IntercomBridge {
  static init(apiKey: string, appId: string) {
    Intercom.initialize(utils.ad.getApplicationContext(), apiKey, appId);
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

    Intercom.client().registerIdentifiedUser(registration);
  }

  static registerUnidentifiedUser() {
    Intercom.client().registerUnidentifiedUser();
  }

  static reset() {
    Intercom.client().reset();
  }

  static setSecureMode(secureHash: string, secureData: string) {
    Intercom.client().setSecureMode(secureHash, secureData);
  }

  static updateUser(attributes: object) {
    const UserAttributes = io.intercom.android.sdk.UserAttributes;
    var userAttrs = new UserAttributes.Builder();

    Object.keys(attributes).forEach(function(key) {
      const value = attributes[key];
      switch (key) {
        case "userId":
          userAttrs = userAttrs.withUserId(value);
          break;
        case "name":
          userAttrs = userAttrs.withName(value);
          break;
        case "email":
          userAttrs = userAttrs.withEmail(value);
          break;
        default:
          userAttrs = userAttrs.withCustomAttribute(key, value);
      }
    });
    userAttrs = userAttrs.build();

    Intercom.client().updateUser(userAttrs);
  }

  static logEvent(eventName: string, metaData?: any) {
    if (metaData && metaData.length) {
        Intercom.client().logEvent(eventName, metaData);
    } else {
        Intercom.client().logEvent(eventName);
    }
  }

  static displayMessenger() {
    Intercom.client().displayMessenger();
  }

  static displayMessageComposer() {
    Intercom.client().displayMessageComposer();
  }

  static displayMessageComposerWithInitialMessage(initialMessage: string) {
    Intercom.client().displayMessageComposer(initialMessage);
  }

  static displayConversationsList() {
    Intercom.client().displayConversationsList();
  }

  static unreadConversationCount() {
    return Intercom.client().getUnreadConversationCount();
  }

  static setLauncherVisibility(visible: boolean) {
    Intercom.client().setLauncherVisibility(visible ? Intercom.VISIBLE : Intercom.GONE);
  }

  static setInAppMessageVisibility(visible: boolean) {
    Intercom.client().setInAppMessageVisibility(visible ? Intercom.VISIBLE : Intercom.GONE);
  }

  static hideMessenger() {
    Intercom.client().hideMessenger();
  }

  static enableLogging() {
    Intercom.setLogLevel(Intercom.LogLevel.DEBUG);
  }
}
