/*Setup driver*/
let driverSupport = function() {

    const webdriver = require('selenium-webdriver');
    const chrome = require('selenium-webdriver/chrome');
    const path = require('chromedriver').path;
    const driver = chrome.Driver.createSession(new chrome.Options(), new chrome.ServiceBuilder(path).build());

    return driver;
}
module.exports = new driverSupport();