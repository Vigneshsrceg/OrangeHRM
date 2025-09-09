const { test, expect } = require('@playwright/test');

test('Demo test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  //await page.locator('#country').selectOption('India');

  await page.locator('#country').selectOption({value: 'uk'});


  await page.waitForTimeout(2000); // just to see the result

 await page.locator('#country').selectOption({index: 1});


await page.waitForTimeout(2000); // just to see the result

const options = await page.locator('#country option').allTextContents();
console.log('Available options are :', options);

// print all from options
for(const opt of options){
  console.log('Option:', opt);
}

await page.waitForTimeout(2000); // just to see the result


/*
  const table = page.locator('#productTable');

  const cols = await table.locator('thead tr th').count();
  console.log('Number of columns in table:', cols);

  const rowCards = table.locator('tbody tr');
  const rowsCount = await rowCards.count();
  console.log('Number of rows in table:', rowsCount);

  // ✅ Use locator.filter to find rows containing "Chrome"
  const chromeRows = rowCards.filter({
    has:page.locator('td'),
    hasText: 'Smartphone'
  });// hasText: 'Chrome' });
  await chromeRows.locator('input').check();
  console.log('Number of rows with Chrome:', await chromeRows.count());
  //console.log('Row text:', await chromeRows.nth(2).textContent());
  // Optionally assert

  await expect(chromeRows).toHaveCount(1);
  const chromeRow = chromeRows.nth(0); // first matching row
const thirdCol  = chromeRow.locator('td').nth(3); // 3rd column (0-based)
console.log('Third column value:', await thirdCol.click());

// Optionally still assert the count
await expect(chromeRows).toHaveCount(1);*/

  await page.waitForTimeout(3000); // just to see the result
});
