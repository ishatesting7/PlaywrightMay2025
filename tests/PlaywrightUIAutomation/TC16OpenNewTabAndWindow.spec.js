import {test, expect} from '@playwright/test'

test('Open Multiple Tabs in Same window', async ({browser}) =>{

    //Open new window
    const context1 = await browser.newContext();

    //Open new tab
    const tab1 = await context1.newPage();

    await tab1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    const tab2 = await context1.newPage();

    await tab2.goto('https://the-internet.herokuapp.com/')

    const tab3 = await context1.newPage();

    await tab3.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/login')

    //Switch to Tab1
    await tab1.bringToFront()

    await expect(tab1).toHaveURL(/orangehrmlive/);

    await tab2.bringToFront()
    
    await expect(tab2).toHaveURL(/herokuapp/);

    //Open new window

    const context2 = await browser.newContext();

    const newWindow = await context2.newPage();

    await newWindow.goto('https://demoblaze.com/');


})

test('Open new tab in same application', async({browser}) => {

    //Open new window
    const context1 = await browser.newContext();

    //Open new tab
    const page = await context1.newPage();

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await page.fill("input[placeholder='Username']",'Admin');

    await page.fill("input[placeholder='Password']",'admin123');

    await page.click("button[type='submit']");

    await page.waitForTimeout(5000);

    const linkLoc = page.getByRole('link',{name:'OrangeHRM, Inc'});

    const [newPage] = await Promise.all([
        context1.waitForEvent('page'),
        linkLoc.click(),
        // linkLoc.innerText(),
        // linkLoc.textContent()
    
    ])

    await newPage.waitForLoadState();

    console.log('New Page Title', await newPage.title());

    await page.bringToFront();

    console.log('Original Page Title Value', await page.title());

})

