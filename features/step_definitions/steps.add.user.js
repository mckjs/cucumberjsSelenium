const {setDefaultTimeout, Given, When, Then} = require('cucumber');
setDefaultTimeout(60 * 1000);
const webdriver = require('selenium-webdriver');
const driver = require('../support/myworld');
const utils = require('../support/utils');
const pomadduser = require('../../pages/po.adduser');
const poadduser = pomadduser.poadduser;
let sRandomText = pomadduser.generateRandomText();

/*This steps allows user to navigate to url*/
Given('I navigate to the following {string}', function (string) {
// Write code here that turns the phrase above into concrete actions
return pomadduser.navigateTo(string);
});

/*Verify that the page title is correct*/
Then('the page title must be {string}', function (string) {
// Write code here that turns the phrase above into concrete actions
	return pomadduser.getPageTitle().then(function(sActual){
		return utils.assertResults(sActual, string, ' > page title incorrect');
	})
});
/*Gets the table headers and assert the value*/
Then('the user must see table row headers {string}', function (string) {
// Write code here that turns the phrase above into concrete actions
	return utils.getText(poadduser.eTableHeader).then(function(sActual){
		return utils.assertResults(sActual, string, " > Table headers is incorrect")
	});
});
/*Clicks on add button*/
When('the user click on Add User button', function () {
// Write code here that turns the phrase above into concrete actions
	return utils.click(poadduser.eLinkAddUser);
});

/*Clicks on save button*/
When('the user click on Save button', function () {
// Write code here that turns the phrase above into concrete actions
	return utils.click(poadduser.eBtnSave).then(function () {
		return utils.assertSelectorIsNotDisplayed(poadduser.eBtnSave)
	})
});
/*Get the text of the modal popup and assert that the correct text get displayed*/
Then('the user must see {string} popup modal', function (string) {
// Write code here that turns the phrase above into concrete actions
	return utils.getText(poadduser.eModalHeaderName).then(function (sActual) {
		return utils.assertResults(sActual, string, " > This is not the correct popup modal")
	})
});

Given('the user refresh the page', function () {
// Write code here that turns the phrase above into concrete actions
	return driver.navigate().refresh();
});

Given('the user enters First Name {string}', function (string) {
// Write code here that turns the phrase above into concrete actions
	return utils.setValue(poadduser.eInputFirstName, string);
});


Given('the user enters Last Name {string}', function (string) {
// Write code here that turns the phrase above into concrete actions
	return utils.setValue(poadduser.eInputLastName, string);
});

Given('the user enters Username {string}', function (string) {
// Write code here that turns the phrase above into concrete actions
	return utils.setValue(poadduser.eInputUserName, string);
});

Given('the user enters Password {string}', function (string) {
// Write code here that turns the phrase above into concrete actions
	return utils.setValue(poadduser.eInputPassword, string);
});


Given('the user selects Customer {string}', function (string) {
	let selector;
	if (string == "Company AAA"){
		selector = poadduser.eRdbCustomerCompanyA;
	}else{
		selector = poadduser.eRdbCustomerCompanyB;
	}

	return utils.click(selector).then(function(){
		return utils.isElementSelected(selector).then(function(sActual){
			return utils.assertResults(sActual, true, "Selector is not selected")
		})
	})
});

Given('the user selects Role {string}', function (string) {
// Write code here that turns the phrase above into concrete actions
return utils.click(poadduser.eDbxRole).then(function(){
	return driver.findElements(poadduser.eDbxOption).then(function (listElements) {
		listElements.map(function(element){
			element.getText().then(function(item){
				if(item == string){
					element.click();
				}
			})
		})
	})
})
});

Given('the user enters email address {string}', function (string) {
// Write code here that turns the phrase above into concrete actions
	return utils.setValue(poadduser.eInputEmail, string);
});

Given('the user enters Cell Phone {int}', function (int) {
// Write code here that turns the phrase above into concrete actions
return utils.setValue(poadduser.eInputCellphone, int);
});


Then('the user must see {string} added successfully', function (string) {
// Write code here that turns the phrase above into concrete actionsre
    return utils.waitForElementLocated(poadduser.eTableDataRow).then(function(){
        return driver.sleep(3000).then(function(){
            return utils.getText(poadduser.eTableDataRow).then(function (sText) {
                return utils.assertResults(sText, string, "User details does not match")
            })
        })
    })
});

Given('the user must see the value {string} is selected', function (string) {
// Write code here that turns the phrase above into concrete actions
    let selector;
    if (string == "Company AAA"){
        selector = poadduser.eRdbCustomerCompanyA;
    }else{
        selector = poadduser.eRdbCustomerCompanyB;
    }

    return utils.isElementSelected(selector).then(function(sActual){
        return utils.assertResults(sActual, true, "Selector is not selected")
    })
});

When('the user search on email address {string}', function (string) {
// Write code here that turns the phrase above into concrete actions
	return utils.setValue(poadduser.eInputSearchBox, string);
});

Then('the user must only see {int} row', function (int) {

    return driver.findElements(poadduser.eTableDataRow).then(function(element){
        let elementLength = element.length;
       return utils.assertResults(elementLength, int, "There are too many rows returned")

    })
});


Then('the user must see email address {string} in E-mail cell', function (string) {
// Write code here that turns the phrase above into concrete actions
	return driver.findElements(poadduser.eTableDataCell).then(function(elementCells){
		elementCells[6].getText().then(function(sActual){
			return utils.assertResults(sActual, string, "Incorrect email details")
		})
	})
});

Then('the user must see user name as {string} in the User Name cell', function (string) {
// Write code here that turns the phrase above into concrete actions
	return driver.findElements(poadduser.eTableDataCell).then(function(elementCells){
		elementCells[2].getText().then(function(sActual){
			return utils.assertResults(sActual, string, "Incorrect user name details")
		})
	})
});