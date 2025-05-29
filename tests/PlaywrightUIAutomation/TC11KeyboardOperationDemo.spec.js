//const{test, expect} = require('@playwright/test')
import { test, expect } from '@playwright/test';


test.describe('KeyBoard Opeartion in Playwright', ()=>{

    test.beforeEach('Pre-requisite Steps', async({page})=>{

        await page.goto('https://demoqa.com/text-box');

    })

    test('Perform Keyboard Action - 1 ', async({page}) =>{

        const fullname = page.locator('#userName');

        const email = page.locator('#userEmail');

        const currentAddress = page.locator('#currentAddress');


        //Type some text -
        await fullname.click();

        await page.keyboard.type('Demo User');

        //Press Tab
        await page.keyboard.press('Tab');

        //Type email address with some delay

        await page.keyboard.type('demouser@yopmail.com',{delay:100});
        await page.keyboard.press('Tab');

        //Copy Paste
        await page.keyboard.type('22 Avenue Apartment, 66 Ch, 948, New York');
        //await page.keyboard.down('Control');

        await page.keyboard.press('ControlOrMeta+A'); //Ctrl + A
        await page.keyboard.press('ControlOrMeta+C'); //Ctrl + C

       // await page.keyboard.up('Control');
        await page.waitForTimeout(1000);
        await page.keyboard.press('Tab');

       // await page.keyboard.down('Control');
        await page.keyboard.press('ControlOrMeta+V'); //Ctrl + V

       // await page.keyboard.up('Control');

        await page.waitForTimeout(4000);

        await page.locator('#submit').click();

        await page.waitForTimeout(4000);

        await page.keyboard.press('F12');
        
        await page.waitForTimeout(4000);

    })

    test('Perform Keyboard Action - 2', async({page}) =>{

        const fullname = page.locator('#userName');

        const email = page.locator('#userEmail');

        const currentAddress = page.locator('#currentAddress');

        await fullname.fill('ABC');

        await expect(fullname).toHaveValue('ABC');
    
    })

})
