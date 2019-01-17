let reporter = require('cucumber-html-reporter');
let fse = require('fs-extra');
let format = require('dateformat');

let now = new Date();
let newDate = format(now, "yyyymmdd").toString();


let time = now.getTime();

let options = {
    theme: 'bootstrap',
    jsonFile: 'test/report/cucumber_report.json',
    output: 'test/report/cucumber_report.html',
    reportSuiteAsScenarios: true,
    launchReport: false,
    screenshotsDirectory: 'screenshots/',
    storeScreenshots: true
};

let newFileName = time + "_" + newDate + '_automation_report.html';

fse.copy('test/report/cucumber_report.html', './test/history/' + newFileName, function (err) {
    if (err)
        return console.error(err)
});




reporter.generate(options);
