declare var Intercom: any;

export class IntercomBridge {
  static init(apiKey: string, appId: string) {
    Intercom.setApiKeyForAppId(apiKey, appId);
  }

  static registerIdentifiedUser(options: {userId?: string|number, email?: string}) {
    if (typeof options.userId == 'number') {
      options.userId = String(options.userId);
    }

    if (options.userId && options.email && options.userId.length > 0 && options.email.length > 0) {
      Intercom.registerUserWithUserIdEmail(options.userId, options.email);
    } else if (options.userId && options.userId.length > 0) {
      Intercom.registerUserWithUserId(options.userId);
    } else if (options.email && options.email.length > 0) {
      Intercom.registerUserWithEmail(options.email);
    } else {
      console.log('[Intercom-NativeScript] ERROR - No user registered. You must supply an email, a userId or both');
    }
  }

  static registerUnidentifiedUser() {
    Intercom.registerUnidentifiedUser();
  }

  static reset() {
    Intercom.reset();
  }

  static setSecureMode(secureHash: string, secureData: string) {
    Intercom.setHMACData(secureHash, secureData);
  }

  static setUserHash(hmac: string) {
    Intercom.setUserHash(hmac);
  }

  static updateUser(attributes: any) {
    Intercom.updateUserWithAttributes(attributes);
  }

  static logEvent(eventName:string, metaData?: any) {
    if (metaData && metaData.length) {
      Intercom.logEventWithNameMetaData(eventName, metaData);
    } else {
      Intercom.logEventWithName(eventName);
    }
  }

  static displayMessenger() {
    Intercom.presentMessenger();
  }

  static displayMessageComposer() {
    Intercom.presentMessageComposer();
  }

  static displayMessageComposerWithInitialMessage(initialMessage: string) {
    Intercom.presentMessageComposerWithInitialMessage(initialMessage);
  }

  static displayConversationsList() {
    Intercom.presentConversationList();
  }

  static unreadConversationCount() {
    return Intercom.unreadConversationCount();
  }

  static setLauncherVisibility(visible: boolean) {
    Intercom.setLauncherVisible(visible);
  }

  static setInAppMessageVisibility(visible: boolean) {
    Intercom.setInAppMessagesVisible(visible);
  }

  static hideMessenger() {
    Intercom.hideMessenger();
  }

  static enableLogging() {
    Intercom.enableLogging();
  }
}
