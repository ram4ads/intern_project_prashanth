import { Builder, By, Capabilities } from "selenium-webdriver";
import chrome from "selenium-webdriver/chrome.js";

const url = "https://staging.community.fabric.microsoft.com/t5/user/loginpage";
const username = "SmartConX_Test";
const password = "A!s2d3f4";

const test = async (url, username, password) => {
  const driver = new Builder()
    .forBrowser("chrome")
    .withCapabilities(Capabilities.chrome())
    .setChromeOptions(new chrome.Options().addArguments("--start-maximized"))
    .build();

  try {
    // login
    await driver.get(url);
    await driver.findElement(By.name("login")).sendKeys(username);
    await driver.findElement(By.name("password")).sendKeys(password);
    await driver.findElement(By.id("form_0")).submit();
    await driver.sleep(1000);

    // goto dropdown
    const goTo = await driver.findElement(
      By.className(
        "lia-js-menu-opener default-menu-option lia-js-click-menu lia-link-navigation"
      )
    );
    await goTo.click();
    await driver.sleep(1000);

    // desktop dropdown option
    const desktop = await driver.findElement(
      By.className("board-dropdown-item lia-board-rd-discussion1")
    );
    await desktop.click();
    await driver.sleep(1000);

    // create new post
    const newMessage = await driver.findElement(
      By.partialLinkText("New Message")
    );
    await newMessage.click();
    await driver.sleep(1000);

    // give subject
    const subject = await driver.findElement(By.name("subject"));
    const currentDate = new Date();
    const subjectContent = `Prashanth-${currentDate.getDate()}-${
      currentDate.getMonth() + 1
    }-${currentDate.getFullYear()}`;
    await subject.sendKeys(subjectContent);
    await driver.sleep(1000);

    // give body
    const body = await driver.findElement(By.id("mceu_40"));
    const iframe = await body.findElement(By.tagName("iframe"));
    await driver.switchTo().frame(iframe);
    const para = driver.findElement(By.tagName("p"));
    await para.sendKeys(`This is a test message by ${subjectContent}`);
    await driver.sleep();
    await driver.switchTo().defaultContent();

    // give label
    const labelList = await driver.findElement(By.id("list_0"));
    const GCLabel = await labelList.findElement(
      By.xpath(".//a[contains(text(), 'General Comment')]")
    );
    await GCLabel.click();

    const selectedLabelInput = await driver.findElement(By.id("lia-labels"));
    await selectedLabelInput.sendKeys("");
    await driver.sleep(1000);
  } finally {
    console.log("over");
    await driver.quit();
  }
};

test(url, username, password);
