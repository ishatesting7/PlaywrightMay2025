/*

doubleClick()
hover()
Click()
middle()
rightclick()


Browser
Context
Page

Page1

Page2
*/

import { test, expect } from '@playwright/test';

test('Mouse Actions', async({page})=>{

    await page.goto('https://qa-practice.netlify.app/double-click');

    await page.locator('#double-click-btn').dblclick();

    const actualValue =  await page.locator('#double-click-result').textContent();

    expect(actualValue).toBe('Congrats, you double clicked!');

    await page.goto('https://tutorialsninja.com/demo/');

    await page.locator("//a[normalize-space()='Components']").hover();

    await expect(page.locator("//a[normalize-space()='Show AllComponents']")).toBeVisible();

    await page.goto('https://qa-practice.netlify.app/double-click');

    await page.locator('#double-click-btn').click({button:'middle'});

    await page.locator('#double-click-btn').click({button:'left'});

    await page.locator('#double-click-btn').click({button:'right'});

    await page.waitForTimeout(4000)


})
