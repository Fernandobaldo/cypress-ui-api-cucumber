var rimraf = require("rimraf");
rimraf("cypress/reports/", function () { console.log("done"); });