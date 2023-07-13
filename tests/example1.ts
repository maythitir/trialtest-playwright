import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.crazygames.com/game/uno-online');
  await page.getByRole('button', { name: 'Share' }).click();
  await page.getByRole('button', { name: 'Copy' }).click();
  await page.locator('.css-13wszlc > .MuiButton-root').click();
});