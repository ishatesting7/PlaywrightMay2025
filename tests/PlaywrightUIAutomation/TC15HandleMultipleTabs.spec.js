import {test, expect} from '@playwright/test'

test('Handle Multiple Tabs', async ({browser}) =>{

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://the-internet.herokuapp.com/')

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        page.click("a[href='/windows/new']"),
    ]);

    newPage.waitForLoadState();
    expect(await newPage.title()).toBe('New Window');
        
})