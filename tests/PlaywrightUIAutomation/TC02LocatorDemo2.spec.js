import { test, expect } from '@playwright/test';

test('Validating Different Locator for Testing', async({page})=>{

    await page.goto('https://bookcart.azurewebsites.net/');

    await page.getByRole('button',{name:'Login'}).click();

    await page.getByLabel('Username').fill('demouser')

    await page.waitForTimeout(3000);

    await page.getByLabel('Password').fill('testing123')

    await page.waitForTimeout(3000);

    await page.getByPlaceholder('Username').clear();

    await page.waitForTimeout(3000);

    await page.getByPlaceholder('Password').clear();

    await page.waitForTimeout(3000);

    await page.getByPlaceholder('Username').fill('demouser');

    await page.waitForTimeout(3000);

    await page.getByPlaceholder('Password').fill('testing123');

    await page.waitForTimeout(3000);

    //await page.getByRole('button',{name:'Login'}).first().click()

    //await page.getByRole('button',{name:'Login'}).last().click()

    await page.locator("//span[text()='Login']").click();
    
})


/*


<input label="username",matinput="" placeholder="Username" formcontrolname="username" required="" 
class="mat-mdc-input-element ng-tns-c508571215-1 ng-pristine ng-invalid mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored ng-touched" 
id="mat-input-0" aria-required="true" aria-describedby="mat-mdc-error-0">

*/