const {setDefaultTimeout, BeforeAll, Before, After, AfterAll, BeforeStep, Status } = require('cucumber');
setDefaultTimeout(60 * 1000);
const driver = require('./myworld');
BeforeAll(function () {
    return driver.manage().window().maximize();

});

//After hooks run after the last step of each scenario, even when steps are failed, undefined, pending, or skipped.
After(function (testCase) {

   /*take screenshot every time there is a failure and include it in the cucumber report*/
    let world = this;
    if (testCase.result.status === Status.FAILED) {
        return driver.takeScreenshot().then(function(screenShot) {
            // screenShot is a base-64 encoded PNG
            world.attach(screenShot, 'image/png');
        });
    }
});

// Asynchronous Promise
// After(function () {
//     // Assuming this.driver is a selenium webdriver
//     return driver.quit();
// });
