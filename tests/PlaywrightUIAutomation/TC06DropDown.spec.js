import { test, expect } from '@playwright/test';


test('Drop down Value Demo', async({page})=>{

    await page.goto('https://www.facebook.com/');

    await page.getByRole('button',{name:'Create new account'}).click();

    const dropDownListDay =  page.locator('#day');

    /*

    Date Function to Get Today's Day
    Subtract one Value
    Asser with the updatedd

    */
    await expect(dropDownListDay).toHaveValue('22');

    const dropDownListMonth =  page.locator('#month');

    await expect(dropDownListMonth).toHaveValue('5');


})


