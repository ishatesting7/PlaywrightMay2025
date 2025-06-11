import { test, expect } from '@playwright/test';
import { table } from 'console';

test('Handle Web Tables Using Playwright', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    const tableLoc = await page.locator('#productTable');

    //Counting the number of row and column - 
    //[id = 'productTable'] thead tr th
    const columnCount = await tableLoc.locator('thead tr th');
    console.log("Number of Column - ",await columnCount.count());

    const rowCount = await tableLoc.locator('tbody tr');
    console.log("Number of Row - ",await rowCount.count());

    //Check specific value checkbox based on Matched

    const matchingValue = rowCount.filter({
        has:page.locator('td'),
        hasText:'Smartwatch',
        
    })

    await matchingValue.locator('input').check();

    await page.waitForTimeout(2000);



})


test('Handle Web Tables Using Playwright with Reusable Function', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    const tableLoc = await page.locator('#productTable');

    //Counting the number of row and column - 
    //[id = 'productTable'] thead tr th
    const columnCount = await tableLoc.locator('thead tr th');
    console.log("Number of Column - ",await columnCount.count());

    const rowCount = await tableLoc.locator('tbody tr');
    console.log("Number of Row - ",await rowCount.count());

    //Check specific value checkbox based on Matched

    // const matchingValue = rowCount.filter({
    //     has:page.locator('td'),
    //     hasText:'Smartwatch',
        
    // })

    // await matchingValue.locator('input').check();

    await selectProductFromTable(rowCount, page, 'Smartphone');
    await selectProductFromTable(rowCount, page, 'Laptop');
    await selectProductFromTable(rowCount, page, 'Tablet');


    await page.waitForTimeout(2000);

    //Create Reusbale 


    async function selectProductFromTable(rowCount, page, name)
    {
        const matchingValue = rowCount.filter({
            has:page.locator('td'),
            hasText:name,
            
        })
    
        await matchingValue.locator('input').check();

    }

    for(let i = 0; i < await rowCount.count();i++)
    {

        const ro = rowCount.nth(i)
        const tableDa = ro.locator('td');
        for(let j=0; j< await tableDa.count();j++ )
        {
            console.log(await tableDa.nth(j).textContent());
            //const productName = await tableDa.nth(j).textContent()
            //if(productName==)
        }
    }


})