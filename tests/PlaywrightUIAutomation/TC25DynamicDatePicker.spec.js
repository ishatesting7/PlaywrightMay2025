import { test, expect } from '@playwright/test';

test('Select dynamic date range in Date Picker 3', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.waitForTimeout(2000);

  const startDate = { year: 2024, month: 'July', day: 15 };
  const endDate = { year: 2025, month: 'March', day: 10 };

  async function selectDate(datePickerInputSelector, targetDate) {
    await page.click(datePickerInputSelector);

    const datePicker = page.locator('.ui-datepicker');
    const monthLabel = datePicker.locator('.ui-datepicker-month');
    const yearLabel = datePicker.locator('.ui-datepicker-year');

    // Navigate to correct year and month
    while (true) {
      const currentMonth = await monthLabel.textContent();
      const currentYear = await yearLabel.textContent();

      if (currentMonth === targetDate.month && parseInt(currentYear) === targetDate.year) {
        break;
      }

      const current = new Date(`${currentMonth} 1, ${currentYear}`);
      const target = new Date(`${targetDate.month} 1, ${targetDate.year}`);

      if (current < target) {
        await page.click('.ui-datepicker-next');
      } else {
        await page.click('.ui-datepicker-prev');
      }

      await page.waitForTimeout(300); // debounce navigation
    }

    // Select the day
    await page.click(`.ui-datepicker-calendar td a:text-is("${targetDate.day}")`);
  }

  await selectDate('#datepicker3', startDate);

  await selectDate('#datepicker4', endDate);

  const fromValue = await page.locator('#datepicker3').inputValue();
  const toValue = await page.locator('#datepicker4').inputValue();

  console.log(`Start Date Selected: ${fromValue}`);
  console.log(`End Date Selected: ${toValue}`);
});


test('Select a dynamic date in Date Picker 2 (dd/mm/yyyy)', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForTimeout(2000); // Ensure page loads completely
  
    const targetDate = { year: 2024, month: 'Nov', day: 18 };
  
    // Open Date Picker 2
    await page.click('[name="SelectedDate"]');
  
    // Define locators
    const monthLabel = page.locator('.ui-datepicker-month');
    const yearLabel = page.locator('.ui-datepicker-year');
  
    // Navigate to target year and month
    while (true) {
      const currentMonth = await monthLabel.textContent();
      const currentYear = await yearLabel.textContent();
  
      if (currentMonth === targetDate.month && parseInt(currentYear) === targetDate.year) {
        break;
      }
  
      const current = new Date(`${currentMonth} 1, ${currentYear}`);
      const target = new Date(`${targetDate.month} 1, ${targetDate.year}`);
  
      if (current < target) {
        await page.click('.ui-datepicker-next');
      } else {
        await page.click('.ui-datepicker-prev');
      }
  
      await page.waitForTimeout(300); // wait for calendar to update
    }
  
    // Select day
    await page.click(`.ui-datepicker-calendar td a:text-is("${targetDate.day}")`);
  
    // ✅ Optional Verification
    const selectedDate = await page.inputValue('#datepicker2');
    console.log(`Selected Date: ${selectedDate}`); // Should be in dd/mm/yyyy format
  });

  test('Validation for the date picker - 1', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
   // await page.fill('#datepicker','03/15/2024')
    await page.waitForTimeout(2000); // Ensure page loads completely

    //date picker
    const year="2022"
    const month="March"
    const date="25"

    await page.click('#datepicker')  // opens calender

    while(true)
    {
        const currentYear=await page.locator('.ui-datepicker-year').textContent()
        const currentMonth=await page.locator('.ui-datepicker-month').textContent()

        if(currentYear == year && currentMonth==month)
        {
            break;
        }

       // await page.locator('[title="Next"]').click() //Next
        await page.locator('[title="Prev"]').click() //Previous
    }

    const dates=await page.$$("//a[@class='ui-state-default']")

    //date selection using loop
   /* for(const dt of dates)
    {
        if(await dt.textContent()==date)
        {
            await dt.click();
            break;
        }
    }
    */

    //date selection - wihout loop
    await page.click(`//a[@class='ui-state-default'][text()='${date}']`)


    await page.waitForTimeout(5000);
  })