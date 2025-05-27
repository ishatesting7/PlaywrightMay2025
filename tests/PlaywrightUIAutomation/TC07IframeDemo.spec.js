import { test, expect } from '@playwright/test';

test('Handle Scenarios for iFrames', async({page}) =>{


    await page.goto('https://practice-automation.com/iframes/')

    const frameLoc = await page.frameLocator('#iframe-1');

    //await frameLoc.locator("//span[text()='Search']").fill('Demo for playwright');

    await frameLoc.locator("//span[text()='Search']").click();

    await frameLoc.locator('[class="DocSearch-Input"]').fill('Playwright Assertion');

    await page.waitForTimeout(3000);

    await frameLoc.locator('[class="DocSearch-Input"]').press('Enter');

    await page.waitForTimeout(3000);



})


test('Handle Scenarios for iFrames - 2', async({page}) =>{


    await page.goto('https://practice-automation.com/iframes/')

    const frameLoc1 = await page.frameLocator('#iframe-2');

    //await frameLoc1.locator("//span[@class='navbar-toggler-icon']").click(); -- This is required if the resolution is changing
    
    await frameLoc1.getByText('Projects').click();

    await page.waitForTimeout(2000);

    const pageV1 = await frameLoc1.locator("//h2[normalize-space()='Selenium WebDriver']").textContent();

    expect(pageV1).toBe('Selenium WebDriver');

    await expect(frameLoc1.locator('[class="col-lg-3 col-md-6 mb-4 mb-lg-0 align-self-center px-5 py-3"]')).toHaveCount(8)

    await page.reload();

    await page.getByText('Courses').click();

})