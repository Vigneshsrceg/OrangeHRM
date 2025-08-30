const{test,expect} = require('@playwright/test');

const loginLocators = require('../locators/loginLocators.json');

const username=loginLocators.login.usernameInput;
 

test('Login', async ({ page }) => {


});