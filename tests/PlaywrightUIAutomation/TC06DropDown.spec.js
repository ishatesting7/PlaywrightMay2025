import { test, expect } from '@playwright/test';


test.beforeEach('Common Steps', async({page})=>{

    await page.goto('https://www.facebook.com/');

    await page.getByRole('button',{name:'Create new account'}).click();

})

test('Drop down Value Demo', async({page})=>{
    
    const dropDownListDay =  page.locator('#day');
    /*

    Date Function to Get Today's Day
    Subtract one Value
    Asser with the updatedd

    */
    await expect(dropDownListDay).toHaveValue('25');

    const dropDownListMonth =  page.locator('#month');

    await expect(dropDownListMonth).toHaveValue('5');

})

test('Update the Value of Dropdown', async({page})=>{


    await page.selectOption('select[name="birthday_day"]','29');

    await page.waitForTimeout(1000);

    await page.selectOption('select[name="birthday_month"]','7');
    
    await page.waitForTimeout(1000);
    
    await page.selectOption('select[name="birthday_year"]','1960');

    const selectDay = await page.$eval('select[name="birthday_day"]',day => day.value);
    expect(selectDay).toBe('29');

    const selectMonth = await page.$eval('select[name="birthday_month"]',month => month.value);
    expect(selectMonth).toBe('7');
    
    // page.$$eval

    // page.$

    // page.$$

    const selectYear = await page.$eval('select[name="birthday_year"]',year => year.value);
    expect(selectYear).toBe('1960');

    const monthCount = await page.locator('select[name="birthday_month"] option').count();

    console.log("Number of Month - ", monthCount);
})



test('Drop down Value Demo Index Demo', async({page})=>{
    
   const dayOptions = await page.$$('select[name="birthday_day"] option')
   const indexV = 15;
   const getV = await dayOptions[indexV].getAttribute('value');

   await page.waitForTimeout(3000)
   await page.selectOption('select[name="birthday_day"]',getV);

})