const { By, Key, Builder, until, error } = require("selenium-webdriver");

//const webdriver = require("selenium-webdriver");
//let firefox_capabilities = webdriver.Capabilities.firefox();
//const firefox_browser = new webdriver.Builder().withCapabilities(firefox_capabilities).build();

async function test_case() {
  let driver = await new Builder().forBrowser("chrome").build();

  await driver.get("https://duckduckgo.com/");
  await driver.findElement(By.name("q")).sendKeys("Hello World!", Key.RETURN);

  driver
    .executeScript("return document.title;")
    .then((title) => {
      console.log("Page Title : " + title);
    })
    .catch((er) => {
      console.log("Error: " + er);
      driver.quit();
    });

  setInterval(function () {
    driver.quit();
  }, 7000);
}

test_case();