import {test, expect} from '@playwright/test'

test('@regression should load home page of application', async({page}) =>{

    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle('Google');
})

test('@regression @smoke should load home page of application and search playwright', async({page}) =>{

    await page.goto("https://www.google.com/");
    await page.locator('#APjFqb').fill('Playwright');
    await expect(page).toHaveTitle('Google');
})

test('@smoke should load home page of application and search playwright', async({page},testInfo) =>{

    testInfo.annotations.push({type:'TagValue','description':'Smoke TestCases'});
    console.log('Project Info Value -', testInfo.project.name);
    await page.goto("https://www.google.com/");
    await page.locator('#APjFqb').fill('Playwright');
    await expect(page).toHaveTitle('Gosogle');
})

