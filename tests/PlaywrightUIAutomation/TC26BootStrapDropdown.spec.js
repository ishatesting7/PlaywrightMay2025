import { test, expect } from '@playwright/test';

test('Boot Strap Dropdown', async({page})=>{

    await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2');

    await page.waitForTimeout(2000);
    
    await page.locator('[class="multiselect dropdown-toggle btn btn-default"]').click();

    const multipleOption = await page.$$('ul li a label');

    await expect(multipleOption.length).toBe(14);

    for(let opt of multipleOption)
    {
        const val = await opt.textContent();
        console.log("Dropdown Value - ", val);
        if(val.includes('Bootstrap') || val.includes('HTML'))
        {
            await opt.click();
        }
    }
})