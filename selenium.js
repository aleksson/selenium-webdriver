const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('firefox').build();
  try {
    // Open Selenium Website
    await driver.get('https://www.selenium.dev/');

    // Test if the title is as Expected
    const titleTest = await driver.wait(until.titleIs('Selenium'), 1000);
    if(titleTest){
        console.log("Selenium Title Test : PASS");
    }
  } finally {
    await driver.quit();
  }
})();