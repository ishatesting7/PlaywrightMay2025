import { test, expect } from "@playwright/test";
import { readFileSync } from "fs";

const filePath = './tests/data/testDataMutliplejson.json';
const baseUrl = 'https://ecommerce-playground.lambdatest.io/index.php?route=account/register';

function generateRandomEmail(baseEmail) {
  const [local, domain] = baseEmail.split('@');
  const timeStamp = Date.now();
  return `${local}+${timeStamp}@${domain}`;
}

// ✅ Load data at definition time (not inside beforeAll)
const dummyRawData = JSON.parse(readFileSync(filePath, 'utf-8'));

test.describe.parallel('Register all users defined in JSON', () => {
  for (const user of dummyRawData) {
    test(`Register User: ${user.first_name} ${user.last_name}`, async ({ page }) => {
      const uniqueEmail = generateRandomEmail(user.email);

      await page.goto(baseUrl);

      await page.locator("#input-firstname").fill(user.first_name);
      await page.locator("#input-lastname").fill(user.last_name);
      await page.locator("#input-email").fill(uniqueEmail);
      await page.locator("#input-telephone").fill(user.phone);
      await page.locator("#input-password").fill(user.password);
      await page.locator("#input-confirm").fill(user.password);

      await page.locator("input[type='checkbox'][name='agree']").check();
      await page.locator("input[value='Continue']").click();

      await expect(page.locator("h1")).toHaveText("Your Account Has Been Created!");
    });
  }
});
