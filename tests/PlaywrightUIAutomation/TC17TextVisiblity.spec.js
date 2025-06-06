import {test, expect} from '@playwright/test'

test('Open Multiple Tabs in Same window', async ({browser}) =>{

    //Open new window
    const context1 = await browser.newContext();

    //Open new tab
    const page = await context1.newPage();

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    const username = page.locator("[class='oxd-text oxd-text--p']");

    const inner = await username.first().innerText();

    console.log(inner);

    const textC = await username.first().textContent();

    console.log(textC);

})