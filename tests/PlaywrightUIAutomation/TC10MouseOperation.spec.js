import { test, expect } from '@playwright/test';

const baseURL = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
test('Mouse Operation', async({page})=>{

    await page.goto(baseURL);
    await page.waitForTimeout(2000);
    const username = page.locator("input[placeholder='Username']");
    const password = page.locator("input[placeholder='Password']");
    const loginbtn = page.locator("button[type='submit']");

    const usernameBound = await username.boundingBox();
    const passwordBound = await password.boundingBox();
    const loginbtnBound = await loginbtn.boundingBox();

    console.log('Value',usernameBound);

    await page.mouse.move(usernameBound.x + 5, usernameBound.y+10);
    await page.mouse.click(usernameBound.x +5 , usernameBound.y+10);

    await page.keyboard.type('Admin');

    await page.waitForTimeout(3000);

    await page.mouse.move(passwordBound.x+5, passwordBound.y+10);

    await page.mouse.down(); //Press the left button

    await page.waitForTimeout(3000);

    await page.mouse.up(); //Release the click

    await page.waitForTimeout(3000);

    await page.keyboard.type('admin123')


    await page.mouse.move(loginbtnBound.x+5, loginbtnBound.y+10);
    await page.mouse.click(loginbtnBound.x+5, loginbtnBound.y+10,{delay:200});;

    await page.waitForTimeout(2000);

    const profileVisible = page.locator('img[alt="profile picture"]');

    if(await profileVisible.isVisible())
    {
        const profileVisibleBound = await profileVisible.boundingBox();

        await page.mouse.move(profileVisibleBound.x+5, profileVisibleBound.y+10);

        await page.mouse.dblclick(profileVisibleBound.x+5, profileVisibleBound.y+10);
    
    }

    await page.waitForTimeout(4000);

})