const { test, expect } = require('@playwright/test');

test('auto suggest dropdown for From and To', async ({ page }) => {
    await page.goto('https://www.redbus.in/');

    // Select "From" city
     await page.getByRole('button', { name: /From/i }).click();
    await page.getByRole('textbox', { name: /From/i }).fill('Madurai');
    const fromOption = page.getByRole('option', { name: /Madurai, Madurai/i });
    await fromOption.waitFor({ state: 'visible' });
    await fromOption.click();
    await page.waitForTimeout(2000); // just to see the result
    // Select "To" city
    await page.getByRole('textbox', { name: /To/i }).fill('Mumbai');
    const toOption = page.getByRole('option', { name: /Kurla, Mumbai/i });
    await toOption.waitFor({ state: 'visible' });
    await toOption.click();
    
    await page.waitForTimeout(2000); // just to see the result

});