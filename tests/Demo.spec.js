import { test, expect } from '@playwright/test';

//  Set test-specific configuration
test.use({
  viewport: { width: 1920, height: 1080 },
  deviceScaleFactor: 2,
});

test('basic test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  const pgtitle = await page.title();
  await expect(pgtitle).toContain('Orange');

  await page.waitForTimeout(5000); // optional wait
});
