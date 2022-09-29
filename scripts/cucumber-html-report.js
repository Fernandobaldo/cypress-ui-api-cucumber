const os = require('os');

const report = require("multiple-cucumber-html-reporter");
report.generate({
  theme: 'bootstrap',
  jsonDir: "cypress/reports/jsonlogs", // ** Path of .json file **//
  reportPath: "cypress/reports/cucumber-json/",
  metadata: {
    browser: {
      name: "chrome",
      version: "XX",
    },
    device: "Local test machine",
    platform: {
      name: "Windows",
      version: "11",
    },
    launchReport: true,
    brandTitle: `SprintCloud Automated Test`,
    columnLayout: 1,
    scenarioTimestamp: true,
    metadata: {
      Platform: `${os.type()} ${os.release()}`,
      CPUs: os.cpus().length
    }
  },
});