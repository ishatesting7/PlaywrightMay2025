import { test, expect } from '@playwright/test';
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


    const pages=await page.locator('.pagination li a')
    console.log('Number of pages in the table:', await pages.count())

    for(let p=0 ;p< await pages.count(); p++)
    {
        if(p>0)
        {
            await pages.nth(p).click()
        }
        for(let i=0;i<await rowCount.count();i++)
        {
            const row=rowCount.nth(i);
            const tds=row.locator('td')
    
            for(let j=0 ;j< await tds.count()-1;j++)
            {
                console.log(await tds.nth(j).textContent())
            }
        }
        await page.waitForTimeout(3000);

    }

    


})


test('Select checkbox in specific rows across pagination', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForTimeout(2000); 
  
    const targetRowIndexes = [2, 7, 12, 17]; 
    let currentRowNumber = 1;
  
    const totalPages = await page.locator('.pagination li a').count();
    console.log('Total pages:', totalPages);
  
    for (let p = 0; p < totalPages; p++) {
      if (p > 0) {
        const refreshedPages = page.locator('.pagination li a');
        await refreshedPages.nth(p).click();
        await page.waitForTimeout(1000);
      }
  
      const rowCount = page.locator('#productTable tbody tr');
      const rowsOnThisPage = await rowCount.count();
  
      for (let i = 0; i < rowsOnThisPage; i++) {
        if (targetRowIndexes.includes(currentRowNumber)) {
          const checkbox = rowCount.nth(i).locator('td:nth-child(4) input[type="checkbox"]');
          await checkbox.check();
          console.log(`Checked checkbox in row #${currentRowNumber}`);
        }
  
        currentRowNumber++;
      }
  
      await page.waitForTimeout(1000);
    }
  });


  test('Select checkbox based on Product Name across pagination', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForTimeout(2000); // ensure table and pagination are loaded
  
    const targetProductNames = ['Samsung Galaxy M31', 'HP LP3065', 'MacBook'];
  
    const totalPages = await page.locator('.pagination li a').count();
    console.log('Total pages:', totalPages);
  
    for (let p = 0; p < totalPages; p++) {
      if (p > 0) {
        const refreshedPages = page.locator('.pagination li a');
        await refreshedPages.nth(p).click();
        await page.waitForTimeout(1000);
      }
  
      const rows = page.locator('#productTable tbody tr');
      const rowCount = await rows.count();
  
      for (let i = 0; i < rowCount; i++) {
        const row = rows.nth(i);
  
        // Get the product name from the 2nd column (adjust if needed)
        const productName = (await row.locator('td:nth-child(2)').textContent())?.trim();
  
        if (targetProductNames.includes(productName)) {
          const checkbox = row.locator('td:nth-child(4) input[type="checkbox"]');
          await checkbox.check();
          console.log(`✔️ Checked: ${productName}`);
        }
      }
  
      await page.waitForTimeout(1000);
    }
  });


