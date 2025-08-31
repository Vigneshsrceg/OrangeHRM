const{test,expect} = require('@playwright/test');
const util = require('../utils/utils.js')
const loginLocators = require('../locators/loginLocators.json');
const logMessage = require('../pages/logmessage');
const logindata = require('../locators/logindata.json');

const username=loginLocators.login.usernameInput;
const user= logindata.roles.normalUser.username; // normal user role has been updated
const pwd= logindata.roles.normalUser;

test('Login', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.locator(username).fill(user);
    await page.locator(loginLocators.login['passwordInput']).fill(pwd.password);
    await page.locator(loginLocators.login.loginButton).click();
    await page.waitForTimeout(3000); // optional wait
   
    const hdrstatus=await util.isElementVisible(page, loginLocators.dashboard.header);
    logMessage('Header visibility status', hdrstatus);

    const dashcontent=await util.textContent(page, loginLocators.dashboard.header);
    const status=await dashcontent.includes('Dashboard');
    console.log('Dashbaord content is :',dashcontent, status);
   
    await page.waitForTimeout(2000); // optional wait
    await page.close();

});