const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('firefox').build();
  try {
    // Open Website
    await driver.get('http://www.google.com/');

    // Click on Button for Accept/Reject Cookies
    await driver.findElement(By.xpath('//*[@id="W0wltc"]')).click();
    
    // Search for anything and hit ENTER
    await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    
    // Test if the title is as Expected
    const expectedTitle = 'webdriver - Sök på Google';
    const titleTest = await driver.wait(until.titleIs(expectedTitle), 1234);
    
    if(titleTest){
        console.log("TitleTest : PASS");
    }
  } finally {
    await driver.quit();
  }
})();