const loginLocators = require('../locators/loginLocators.json');


async function login(page, username, password) {
    await page.locator(loginLocators.login.usernameInput).fill(username);
    await page.locator(loginLocators.login.passwordInput).fill(password);
    await page.locator(loginLocators.login.loginButton).click();
    await page.waitForTimeout(3000); // optional wait
}
module.exports = login;
