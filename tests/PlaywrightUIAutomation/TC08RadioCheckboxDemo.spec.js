import { test, expect } from '@playwright/test';

test('CheckBox Validation', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator('#sunday').check();

    await page.locator('#monday').check();
    
    await page.locator('#tuesday').check();
    
    const isChecked = await page.locator('#tuesday').isChecked();
    console.log('Validate -- ', isChecked);

    await page.waitForTimeout(2000);

    await page.locator('#sunday').uncheck();

    await page.locator('#monday').uncheck();
    
    await page.locator('#tuesday').uncheck();

    await page.locator('#sunday').setChecked(true);

    await page.waitForTimeout(2000);

    await page.locator('#sunday').setChecked(false);




})

test('RadioButton Validation', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator('#male').check();

    await page.locator('#female').check();

    await page.waitForTimeout(2000)

    const isCheckedMale = await page.locator('#male').isChecked();
    console.log('Validate -- ', isChecked);

    const isCheckedFemale = await page.locator('#female').isChecked();
    console.log('Validate -- ', isChecked);

})