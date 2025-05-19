import { test, expect } from '@playwright/test';

//BROWER
//CONTEXT
//PAGE
//https://www.saucedemo.com/
test('Validate the secret sauce demo website', async ({ page }) => {
  await page.goto('/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="username"]').press('Tab');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('Test');
  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="lastName"]').fill('Testlastname');
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="postalCode"]').fill('93282');
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="finish"]').click();
  
});


test('Validate the secret sauce demo website with Invalid username', async ({ page }) => {
    await page.goto('/');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="username"]').press('Tab');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauc');
    await page.locator('[data-test="login-button"]').click();

  });