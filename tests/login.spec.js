const{test,expect} = require('@playwright/test');

const loginLocators = require('../locators/loginLocators.json');

test('use strict', async ({ page }) => {

console.log('Login locators are :',loginLocators.login.usernameInput);
console.log('Dashboard locators are :',loginLocators.dashboard.header);
console.log('Login button locator is :',loginLocators.login.loginButton);
console.log('Password locator is :',loginLocators.login.passwordInput);
console.log('Login locator is :',loginLocators.login);
});