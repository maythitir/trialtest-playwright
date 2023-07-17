import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://cddp-dla-staging.bedr.dev/');
  await page.goto('https://cddp-dla-staging.bedr.dev/contact-admin');
  await page.goto('https://uat-auth.bedr.dev/auth/login?redirectUri=https%3A%2F%2Fcddp-dla-staging.bedr.dev&client_id=9bb22ecf-e45e-4b3b-a30a-a47618d11763');
  await page.locator('div').filter({ hasText: /^ตำแหน่งครัวเรือนถนนเสาไฟส่องสว่างกล้อง CCTV$/ }).getByRole('switch').first().dblclick();
  await page.getByRole('button', { name: 'แสดงผล' }).click();
  await page.locator('div').filter({ hasText: /^ตำแหน่งครัวเรือนถนนเสาไฟส่องสว่างกล้อง CCTV$/ }).getByRole('switch').nth(2).click();
  await page.locator('div').filter({ hasText: /^ตำแหน่งครัวเรือนถนนเสาไฟส่องสว่างกล้อง CCTV$/ }).getByRole('switch').nth(3).click();
  await page.getByRole('region', { name: 'Map' }).click({
    position: {
      x: 469,
      y: 613
    }
  });
  await page.locator('.text-lg > path:nth-child(2)').click();
});