import { test, expect } from '@playwright/test';


test.beforeEach("Login Into the System", async ({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator("input[placeholder='Username']").fill('Admin');
    await page.locator("input[placeholder='Password']").fill('admin123');
    
    await page.getByRole('button',{name:'Login'}).click();
    //body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1) > span:nth-child(2)body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1) > span:nth-child(2)
})

test('Validate the User Management Dashboard', async ({page})=>{

    await page.getByText('Admin').click();  

    await expect(page.locator("//h5[text()='System Users']")).toHaveText('System Users');

    await expect(page.locator("//h5[text()='System Users']")).toBeHidden();

})

test('Validate the User Job Dashboard', async ({page})=>{

    await page.getByText('Admin').click();  

    
})

test('Validate the User Organization Dashboard', async ({page})=>{

    await page.getByText('Admin').click();  

})

test('Validate the User Qualification Dashboard', async ({page})=>{

    await page.getByText('Admin').click();  

})