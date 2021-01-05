const { setHeadlessWhen } = require('@codeceptjs/configure');
require('dotenv').config();

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    // WebDriver: {
    //   url: 'https://www.google.com',
    //   browser: 'chrome',
    //   host: '127.0.0.1',
    //   port: 4444,
    //   restart: false,
    //   windowSize: '1920x1680',
    //   timeouts: {
    //     "script": 60000,
    //     "page load": 10000
    //   },
    //   enabled: true,
    //   services: ['selenium-standalone'],
    //   show: true,
    //   desiredCapabilities: {
    //     chromeOptions: {
    //       args: [ /*"--headless",*/ "--disable-gpu", "--no-sandbox" ]
    //     }
    //   }
    // },
    Puppeteer: {
      url: 'https://www.google.com',
      browser: 'chrome',
      restart: false,
      windowSize: '1920x1680',
      show: true,
    },
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {
    reporterOptions: {
      mochaFile: './output/result.xml',
    },
  },
  // gherkin: {
  //   features: './features/*.feature',
  //   steps: [
  //     './step_definitions/steps.js',
  //   ],
  // },
  name: 'CodeceptJsLearn',
  plugins: {
    tryTo: {
      enabled: true,
    },
    allure: {
      enabled: false,
    },
    wdio: {
      enabled: false,
      services: [
        'selenium-standalone',
      ],
    },
    stepByStepReport: {},
    autoDelay: {
      enabled: false,
    },
    retryFailedStep: {
      enabled: true,
    },
  },
  timeout: 10000,
  // multiple: {
  //   parallel: {
  //     chunks: 2,
  //   },
  //   default: {
  //     grep: 'login',
  //     browsers: [
  //       'chrome',
  //       'firefox',
  //       'electron',
  //     ],
  //   },
  // },
}