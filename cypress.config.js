const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
const fs = require("fs");
const path = require("path");
async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));
  on("task", {
    writeToFile({ filename, data }) {
      const filepath = path.join(__dirname, "cypress/fixtures", filename);
      fs.writeFileSync(filepath, data);
      return null;
    },
  });
  return config;
}

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://demowebshop.tricentis.com/",
    specPattern: "**/*.feature",
    setupNodeEvents,
  },
});
