import { test, expect } from '@playwright/test';

//  Set test-specific configuration
test.use({
  viewport: { width: 1920, height: 1080 },
  deviceScaleFactor: 2,
});

 
test.beforeEach(async ({ page }) => {
        // Runs before each test and navigates to the login page
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    });


test.afterEach(async ({ page }) => {
    // Runs after each test
    await page.waitForTimeout(2000);
    await page.close();

    });

test('basic test', async ({ page }) => {
  const pgtitle = await page.title();
  await expect(pgtitle).toContain('Orange');

  await page.waitForTimeout(2000); // optional wait
});

test('login test', async ({ page }) => {

  //enter username
  await page.locator('input[name="username"]').fill('Admin');
    //enter password
    await page.locator('input[name="password"]').fill('admin123');
    //click on login button
    await page.locator('button[type="submit"]').click();
    await page.waitForTimeout(2000); // optional wait

    //dashabord content is displayed
    const dashcontent = await page.locator('h6').textContent();
    await expect(dashcontent).toContain('Dashboard');
    console.log('Dashbaord content is :',dashcontent);
    await page.waitForTimeout(2000); // optional wait

});


 
