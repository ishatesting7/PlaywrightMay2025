import { test, expect } from '@playwright/test';

test('Fill the value in the Date Picker', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')


    const datePicker = await page.locator('#datepicker');

    await datePicker.click();

    await datePicker.fill('04/05/2025')

    await datePicker.press('Tab');

    await page.waitForTimeout(3000);

    expect(await datePicker.inputValue()).toBe('04/05/2025');


})


test('Fill the value in the Date Picker - 2', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')


    const datePicker = await page.locator('#datepicker');

    await datePicker.click();

    await datePicker.fill('04/05/2025')

    await datePicker.press('Tab');

    await page.waitForTimeout(3000);

    expect(await datePicker.inputValue()).toBe('04/05/2025');

    const targetMonth = "May";
    const targetDay = "12";
    const targetYear = "2023";

    while(true)
    {

    }
})