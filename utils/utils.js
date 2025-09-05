const { text } = require("stream/consumers");
const { expect } = require('@playwright/test');

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

async function clickElement(page, locator) {
    try {
        await page.locator(locator).click();
        console.log(`Clicked element at locator: ${locator}`);
    } catch (error) {
        console.error(`Error clicking element at locator: ${locator}`, error);
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
async function getTableData(page, tableSelector) {
  const headerSelector = `${tableSelector} .oxd-table-header-cell`;
  const rowSelector    = `${tableSelector} .oxd-table-body .oxd-table-row`;

  // collect headers
  const headers = await page.$$eval(headerSelector, cols =>
    cols.map(c => c.innerText.trim())
  );
  const records = [];

  for (;;) {
    // grab all rows
    const rows = await page.$$(rowSelector);
    if (rows.length === 0) break;

    for (const row of rows) {
      const rowCells = await row.$$eval(
        '.oxd-table-cell',
        cells => cells.map(cell => cell.innerText.trim())
      );
      const rec = {};
      headers.forEach((h, i) => (rec[h] = rowCells[i] || ''));
      records.push(rec);
    }

    // find the NEXT button (chevron-right)
    const nextBtn = page.locator(
      '.oxd-pagination__ul .oxd-pagination-page-item--previous-next i.bi-chevron-right'
    ).locator('xpath=..'); // go up to button

    if (!(await nextBtn.isVisible()) || !(await nextBtn.isEnabled())) {
      break; // no more pages
    }

    // remember first row text
    const before = (await page.textContent(rowSelector)).trim();

    // click Next
    await nextBtn.click();

    // wait for first row to change
    await page.waitForFunction(
      (sel, prev) => {
        const el = document.querySelector(sel);
        return el && el.textContent.trim() !== prev;
      },
      rowSelector,
      before,
      { timeout: 5000 }
    );
  }

  return { headers, records };
}



module.exports = { isElementVisible,textContent,textIncludes,clickElement,getTableData };