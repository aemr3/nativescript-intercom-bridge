var IntercomBridge = require("nativescript-intercom-bridge").IntercomBridge;
var intercomBridge = new IntercomBridge();

// TODO replace 'functionname' with an acual function name of your plugin class and run with 'npm test <platform>'
describe("functionname", function() {
  it("exists", function() {
    expect(intercomBridge.functionname).toBeDefined();
  });

  it("returns a promise", function() {
    expect(intercomBridge.functionname()).toEqual(jasmine.any(Promise));
  });
});