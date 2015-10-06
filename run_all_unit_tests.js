// Loops through each app version and runs their unit tests synchronously

'use strict';

var glob = require("glob");
var exec = require('child_process').execSync;

glob("sc*/*", function (err, appVersions) {
  if (!err) {
    appVersions.forEach(function(appVersion) {
      var testRun = exec('karma start karma.conf.js --single-run', {'cwd': appVersion + '/test/unit'});
      console.log('Running tests for: ' + appVersion);
      process.stdout.write(testRun.toString());
    });
  }
})