import { test, expect } from '@playwright/test';

test("Take Screenshot", async ({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    
    await page.locator("input[placeholder='Username']").fill('Admin');
    
    await page.locator("input[placeholder='Password']").fill('admin123');
   
    //Locator/Element ScreenShot
    await page.getByRole('button',{name:'Login'}).screenshot({path:'./screenshots/webElement.png'})
    
    await page.waitForTimeout(2000);

    await page.getByRole('button',{name:'Login'}).click();
    
    await page.waitForTimeout(2000);
    //body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1) > span:nth-child(2)body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1) > span:nth-child(2)

    //Capture Page Screenshot

    await page.screenshot({path:`./screenshots/pageScreenshot${Date.now()}.png`});

    //Capture Full Page Screenshot

    await page.screenshot({path:`./screenshots/fullpageScreenshot${Date.now()}.png`,fullPage:true});
    
})
