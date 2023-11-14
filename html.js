const { Builder, By, Key, until } = require("selenium-webdriver");

const chrome = require("selenium-webdriver/chrome");
const firefox = require("selenium-webdriver/firefox");

const url = "https://www.wikipedia.org/";
const screen = {
  width: 640,
  height: 480,
};

let driver = new Builder()
  .forBrowser("chrome")
  .setChromeOptions(new chrome.Options().headless().windowSize(screen))
  .setFirefoxOptions(new firefox.Options().headless().windowSize(screen))
  .build();

(async function run() {
  try {
    // Open Website
    await driver.get(url);
    const html = await driver.executeScript(
      "return document.getElementsByTagName('html')[0].innerHTML"
    );
    console.log(html);
  } finally {
    await driver.quit();
  }
})();
