import { test, expect } from '@playwright/test';

// test.beforeEach{}

test('test', async ({ page }) => {
  await page.goto('https://www.apple.com/th/');
  await page.locator(`//span[text()='iPhone 14']/../../a[@href="/th/iphone-14/"]`).click();
  await page.locator(`//label[@for="colornav-value-starlight"]`).click();
  await expect(page.locator(`//figure[@data-hero-alt="ผลิตภัณฑ์ทั้งหมดในตระกูล iPhone 14 และ iPhone 14 Plus ใน 6 สีสันที่โดดเด่นสะดุดตา ซึ่งมีการเลือกสีสตาร์ไลท์อยู่"]`))
});