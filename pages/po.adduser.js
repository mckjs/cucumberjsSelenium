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
    poadduser: {
        eTable: By.className('smart-table table table-striped'),
        eTableHeader: By.className('smart-table-header-row'),
        eTableHeaderCell: By.className('smart-table-header-cell'),
        eTableDataCell: By.className('smart-table-data-cell'),
        eLinkAddUser: By.className('btn btn-link pull-right'),
        eBtnSave: By.className('btn btn-success'),
        eModalHeaderName: By.className('modal-header'),
        eInputFirstName: By.name('FirstName'),
        eInputLastName: By.name('LastName'),
        eInputUserName: By.name('UserName'),
        eInputPassword: By.name('Password'),
        eInputEmail: By.name('Email'),
        eInputCellphone: By.name('Mobilephone'),
        eRdbCustomerCompanyA: By.css("input[value='15']"),
        eRdbCustomerCompanyB: By.css("input[value='16']"),
        eDbxRole: By.name('RoleId'),
        eDbxOption: By.tagName('option'),
        eTableDataRow : By.className('smart-table-data-row ng-scope'),
        eTableDataRowSelected : By.className('smart-table-data-row ng-scope selected'),
        eInputSearchBox : By.className('pull-right ng-pristine ng-valid')
    },
    /*Function is used to navigate to url, url are stored in a separate file*/
    navigateTo: function(string) {
       let url;
       if (string == "webtables"){
          url = pages.webtables;
       }else{
           return assertError.message("Please add relevant data to use to navigate to an url")
       }
       return driver.get(url);
    },
    /*returns actual page title*/
    getPageTitle: function () {
        return driver.getTitle();
    },
    /*Function will generate a number*/
    generateRandomText : function () {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (let i = 0; i < 5; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }
}