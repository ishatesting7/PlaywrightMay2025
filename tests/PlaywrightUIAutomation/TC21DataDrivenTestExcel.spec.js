//Create 2 function one for reading and one writing in excel
//You can create in util folder
//Timestamp - For creating the excel or updating the excel
//Email Address - Update the email address

import { test, expect } from '@playwright/test';
import * as XLSX from 'xlsx';
import path from 'path';
import fs from 'fs';

const filePath = path.resolve('./tests/data/testData.xlsx');
const sheetName = 'Users';

function readExcelData() {
  const wb = XLSX.readFile(filePath);
  const sheet = wb.Sheets[sheetName];
  return XLSX.utils.sheet_to_json(sheet);
}

function writeExcelData(data) {
  const ws = XLSX.utils.json_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, sheetName);
  XLSX.writeFile(wb, filePath);
}

function generateUniqueEmail(firstName, lastName) {
  const timestamp = Date.now();
  return `${firstName.toLowerCase()}.${lastName.toLowerCase()}${timestamp}@test.com`;
}

test('Register 10 users and update Excel with result', async ({ page }) => {
  const users = readExcelData();

  for (let user of users) {
    const email = generateUniqueEmail(user.FirstName, user.LastName);
    user.Email = email;

    try {
      await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');

      await page.locator('#input-firstname').fill(String(user.FirstName));
      await page.locator('#input-lastname').fill(String(user.LastName));
      await page.locator('#input-email').fill(email);
      await page.locator('#input-telephone').fill(String(user.Telephone));
      await page.locator('#input-password').fill(String(user.Password));
      await page.locator('#input-confirm').fill(String(user.Password));

      // Accept terms
      await page.locator('[for="input-agree"]').check();

      await page.locator('input[value="Continue"]').click();

      const successHeader = page.locator('h1');
      const successText = await successHeader.textContent();

      if (successText.includes('Your Account Has Been Created!')) {
        user.Status = 'PASS';
      } else {
        user.Status = 'FAIL';
      }
    } catch (error) {
      console.error(`Registration failed for ${user.FirstName}: ${error}`);
      user.Status = 'FAIL';
    }

    // Log out to reset for next user
    try {
      await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/logout');
    } catch {}
  }

  writeExcelData(users);
});
