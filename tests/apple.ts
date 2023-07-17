import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.apple.com/th/');
  await page.getByRole('navigation', { name: 'ทั่วโลก' }).getByRole('link', { name: 'iPhone', exact: true }).click();
  await page.locator('div').filter({ hasText: 'ใหม่ iPhone 14 ได้ใจไปเต็มๆ เริ่มต้นที่ ฿32,900 ซื้อ ดูเพิ่มเติม เลือกสีที่ต้องก' }).getByRole('link', { name: 'ดูเพิ่มเติมเกี่ยวกับ iPhone 14' }).click();
  await page.locator('.hw-container > figure:nth-child(4)').click();
  await page.locator('span').filter({ hasText: 'ฟ้า' }).first().click();
  await page.locator('.hw-container > figure:nth-child(4)').click();
  await page.getByRole('group').filter({ hasText: 'iPhone 14 และ iPhone 14 Plus ได้ใจไปเต็มๆ ผลิตภัณฑ์ทั้งหมดในตระกูล iPhone 14 และ' }).getByRole('link', { name: 'ซื้อ iPhone 14' }).click();
  await page.locator('label').filter({ hasText: 'iPhone 14 จอภาพขนาด 6.1 นิ้ว1 เริ่มต้นที่ ฿32,900' }).click();
  await page.getByRole('listitem').filter({ hasText: 'ฟ้า' }).locator('img').click();
  await page.getByRole('group', { name: 'พื้นที่จัดเก็บข้อมูล คุณต้องการพื้นที่ว่างเท่าไหร่' }).getByText('256GBFootnote ²').click();
  await page.getByLabel('256GBFootnote ² ฿36,900.00').dblclick();
  await page.locator('#applecareplus_58_noapplecare_label').click();
  await page.getByRole('button', { name: 'ใส่ลงในถุง' }).click();
  await page.getByRole('button', { name: 'ดูสินค้าในถุง' }).click();
});