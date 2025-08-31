const { text } = require("stream/consumers");

async function isElementVisible(page, locator) {
  try {
    return await page.locator(locator).isVisible();
  } catch (error) {
    console.error(`Error checking visibility for locator: ${locator}`, error);
    return false;
  }
}

async function textContent(page, locator) {
    try {
        return await page.locator(locator).textContent();
    } catch (error) {
        console.error(`Error getting text content for locator: ${locator}`, error);
        return null;
    }
}

async function textIncludes(page, locator, expectedText) {
  try {
    const content = await page.locator(locator).textContent();
    if (!content) return false;

    return await content.includes(expectedText);
  } catch (error) {
    console.error(` Error checking text for locator: ${locator}`, error);
    return false;
  }
}

module.exports = { isElementVisible,textContent,textIncludes };