import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('demo user');
  await page.getByRole('textbox', { name: 'Full Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('demouser@yopmail.com');
  await page.getByRole('textbox', { name: 'name@example.com' }).press('Tab');
  await page.getByRole('textbox', { name: 'Current Address' }).click();
  await page.getByRole('textbox', { name: 'Current Address' }).fill('St Avenue Aparment New York');
  await page.getByRole('textbox', { name: 'Current Address' }).click();
  await page.getByRole('textbox', { name: 'Current Address' }).press('ControlOrMeta+a');
  await page.getByRole('textbox', { name: 'Current Address' }).press('ControlOrMeta+c');
  await page.locator('#permanentAddress').click();
  await page.locator('#permanentAddress').fill('St Avenue Aparment New York');
  await page.getByRole('button', { name: 'Submit' }).click();
});