const {setDefaultTimeout, Given, When, Then} = require('cucumber');
setDefaultTimeout(60 * 1000);
const webdriver = require('selenium-webdriver');
const driver = require('../support/myworld');
const utils = require('../support/utils');
const pomadduser = require('../../pages/po.adduser');
const pomtakealot = require('../../pages/po.takealot');:require