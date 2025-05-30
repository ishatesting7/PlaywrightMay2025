//page.on
//page.once

const{test, expect} = require('@playwright/test');
const { deserialize } = require('v8');

test('Handle Simple Alerts with OK', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    page.on('dialog', async dialog => {

        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();

    })
    //await page.click('#alertBtn');

    await page.locator('#alertBtn').click();

    await page.waitForTimeout(2000);
})

test('Handle Simple Alerts with OK and Cancel', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    page.on('dialog', async dialog => {

        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Press a button!');
        await dialog.accept();

    })
    //await page.click('#alertBtn');

    await page.locator('#confirmBtn').click();

    await page.waitForTimeout(2000);

    await expect(page.locator('#demo')).toHaveText('You pressed OK!');

})

test('Handle Simple Alerts with Cancel', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    page.on('dialog', async dialog => {

        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Press a button!');
        await dialog.dismiss();

    })
    //await page.click('#alertBtn');

    await page.locator('#confirmBtn').click();

    await page.waitForTimeout(2000);

    await expect(page.locator('#demo')).toHaveText('You pressed Cancel!');

})


test('Handle Simple Alerts with Prompt', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    page.on('dialog', async dialog => {

        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.defaultValue()).toContain('Harry Potter');

        await dialog.accept("Dummy Other Value");
        //await dialog.dismiss();

    })
    //await page.click('#alertBtn');

    await page.locator('#promptBtn').click();

    await page.waitForTimeout(2000);

    await expect(page.locator('#demo')).toHaveText('Hello Dummy Other Value! How are you today?');

})