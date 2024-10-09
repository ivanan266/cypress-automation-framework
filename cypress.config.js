const { defineConfig } = require("cypress");
const fs = require('fs-extra');
const path = require('path');

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('cypress/config', `${file}.json`);

  if (!fs.existsSync(pathToConfigFile)) {
      throw new Error(`Custom config file not found at: ${pathToConfigFile}`);
  }

  return fs.readJson(pathToConfigFile);
}

    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    excludeSpecPattern: "cypress/e2e/other/*.js",
    baseUrl: "http://www.webdriveruniversity.com",
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    video: false,
    viewportHeight: 1080,
    viewportWidth: 1920,
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      configFile: 'reporter-config.json'
    },
    retries: {
      runMode: 0,
      openMode: 0
    },
    env: {
      webdriveruni_homepage: "http://www.webdriveruniversity.com",
      first_name: "Sarah"
    }
  },
});
