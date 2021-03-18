const pages = require('../pages/data.urls');
const chai = require('chai');
const assertError = chai.AssertionError;
const webdriver = require('selenium-webdriver');
const driver = require('../features/support/myworld');

const until = webdriver.until;
const assert = require('assert');
const By = webdriver.By;
const promise = require("bluebird");
module.exports = {
    /*List of elements*/
    potakealot: {
        iSearchProduct: By.tagName('input'),
        listAllDepartment: By.className('cell shrink department-dropdown input-group-field'),
        optionAllDepartment: By.name('department'),

    },


}