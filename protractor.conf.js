exports.config = {
  framework: 'jasmine',
  specs: ['tests/e2e/*.spec.js'],
  directConnect: true,
  jasmineNodeOpts:
  {
      // If true, display spec names.
      isVerbose: false,
      // If true, print colors to the terminal.
      showColors: true,
      // If true, include stack traces in failures.
      includeStackTrace: true,
      // Default time to wait in ms before a test fails.
      defaultTimeoutInterval: 600000,
  },
  baseUrl: 'http://localhost:3000',
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: [ "--disable-gpu", "disable-infobars", "--window-size=1680,1050" ]
    }
  },
}
