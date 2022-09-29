var rimraf = require("rimraf");
rimraf("cypress/report/", function () { console.log("done"); });