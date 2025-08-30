//intializing the playwright test
const{test,expect} = require('@playwright/test');
//importing the locators from json file
const loginLocators = require('../locators/loginLocators.json');
//import log function
const logMessage = require('../pages/logmessage');


//storing the locators in variables
const username=loginLocators.login.usernameInput;
const passwrd=loginLocators.login['passwordInput']; 

//test case
test('use strict', async ({ page }) => {
//printing the locators in console
//console.log('Login locators are :',loginLocators.login.usernameInput);
logMessage('Login locators are :',loginLocators.login.usernameInput);

//printing header locator from dashboard
logMessage('Dashboard locators are :',loginLocators.dashboard.header);

//printing all locators from loginLocators.json
logMessage('Login button locator is :',loginLocators.login.loginButton);
logMessage('Password locator is :',loginLocators.login.passwordInput);
logMessage('Login locator is :',loginLocators.login);

//printing username and array notation for password
console.log('Dashboard locator is :',username, passwrd);

});