Playwright with Javascript - 8th May 2025 - Session 1
-----------------------------------------------------

Course Link - https://ishatrainingsolutions.org/playwright-test-automation-with-javascript-from-beginner-to-expert/

Language - JS, TS, Java, Python, .NET(C#)

Javascript - 7-9 Sessions
Playwright + Javascript - 20-25 Sessions
Framework - 4 
- POM
- Cucumber
- API
- k6-Grafana - Performance Testing

Recorded - You will get 
Session Time - 7 AM to 8 AM IST
Real Time Examples - During Framwork Creation

CI/CD - Github/BitBucket/Circle CI/GitLab
	  - Jenkins,Github Actions,Azure Pipeline(.yml)

Playwright with JavaScript/Typescript

After Completion - Course Completion Certificate will be Provided

Pre-requisite
-------------

1. Installation of nodeJS ===> https://nodejs.org/en/download
To check the version - Open the Command Prompt - node -v and npm -v

2. Installation of VS Code ===> https://code.visualstudio.com/Download

3. Installation of Playwright in VS Code (npm init playwright@latest)
===> https://playwright.dev/docs/intro

Steps -

1 - npm init -y
2 - npm install -D @playwright/test
3 - npm init playwright@latest


Some common Commands - 


  npx playwright test
    Runs the end-to-end tests.

  npx playwright test --ui
    Starts the interactive UI mode.

  npx playwright test --project=chromium
    Runs the tests only on Desktop Chrome.

  npx playwright test example
    Runs the tests in a specific file.

  npx playwright test --debug
    Runs the tests in debug mode.

  npx playwright codegen
    Auto generate tests with Codegen.

We suggest that you begin by typing:

    npx playwright test



Why we require nodeJS (npm)
--------------------------

- Playwright is Node js Library (npm - Node Package Manager)
- Dependency Management  -  Test Runner, Browse, Binary, npm site
- Scripting and Execution - npm/npx(node package execution)
- Tools - Framework - Jest/Playwright Test + Mocha + Chai (Assertion)



Test Framework
POM 
POM + Cucumber BDD (Feature + Steps)


Folder Structure
================

node_module -->


tests --> All the test cases will be under this tests


tests-example --> Refer this for reference purpose


.gitignore --> pushing your change into repository


package.json ---> How many package you have installed so far


playwright.config.js --> Heart of your project

========================

At the very begining -> Import Statement 
async and await ->
test ->

=========================================
git Installation - https://git-scm.com/downloads

Register yourself - https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home

Run this 2 command for making your self registered on your machine

git config --global user.name "Sam Smith"
git config --global user.email sam@example.com
===================================================================

page.getByRole() to locate by explicit and implicit accessibility attributes.

page.getByText() to locate by text content.

page.getByLabel() to locate a form control by associated label's text.

page.getByPlaceholder() to locate an input by placeholder.

page.getByAltText() to locate an element, usually image, by its text alternative.

page.getByTitle() to locate an element by its title attribute.

page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).

page.locator('css')

page.locator('xpath')

CSS - Cascading Style Sheet
===========================

How to write the CSS - 
--------------------
- If we are aware about the classname in the html code then the css selector would be - .classname (Note - If there is empty space in the classname then you need to replace with .)
- If we are aware about the ID in the html code then the css selector will be - #id
- If you aware about the tag, attribute and value -> tag[attribute='value']
- If you are aware about the attribute and value -> [attribute='value']




<input type="text" class="font14 fullWidth" autocomplete="off" placeholder="Enter Mobile Number" data-cy="userName" value="">


input = tag
type = attribute
text = value


Plugin - https://selectorshub.com/
Install the plugin from the above URL


Assignment - 
------------

1. Try to use - Record at cursor
2. Try to use - Pick locator to identify the element 
You should 2 test cases 


Asssignment - 

1. Read throught the assertion topic of playwright - 

https://playwright.dev/docs/test-assertions

Assignment 2 Test - 

//URL - https://opensource-demo.orangehrmlive.com/web/index.php/auth/login

1. Under -> Admin->Usermanagement-> Add a new user
2. Same user need to be Deleted 

If possible add relevant assertions as well.


Assignment - 29th May - 2025

1. Write Atleast 10 Programs for String, Fibonacci, Armstrong, Palindrome, Anagram


Assignment -
----------

Install Playwright Allure Report -
1. https://www.npmjs.com/package/allure-playwright

Step 1 - Run the command in terminal -  npm install -D allure-playwright

Step 2 - update the playwright.config.js or run via CLI

Add allure-playwright as the reporter in the Playwright configuration file:

import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: "allure-playwright",
});
Or, if you want to use more than one reporter:

import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: [["line"], ["allure-playwright"]],
});
Or pass the same values via the command line:

npx playwright test --reporter=line,allure-playwright

Step 3 - 

Run below 2 command to generate and open the Allure Report - 

allure generate ./allure-results -o ./allure-report
allure open ./allure-report


--------------------------------------------------

Playwright -> Page Object Model
------------------------------
-page
-Folders
-subFolder
  -homePage.js
    -pageElements
    -pageAction
  -accountPage.js
  -footerPage.js
  -adminSectionPage.js
  -aboutusPage.js
  -registerPage.js
  -loginPage.js
  -checkoutPage.js
  -confirmationPage.js
  -billingAddressPage.js
-utils
  -date.js
  -utilityFunction.js
  -excelUtil.js
-tests
 -testData
  -apiTestData
    -Payload
     -GetPayload
     -PostPayload
     -PutPayload
     -DeletePayload
  -uiTestData
   -registrationData.json
   -loginData.json
   -checkoutData.json
 -UITestCase
  -TC01_Test.spec.js
  -TC02_Test.spec.js
 -APITestCase


Playwright - Page Object Mode + Cucumber BDD Gherkin 
---------------------------------------------------
-page
-Folders
-subFolder
  -homePage.js
    -pageElements
    -pageAction
  -accountPage.js
  -footerPage.js
  -adminSectionPage.js
  -aboutusPage.js
  -registerPage.js
  -loginPage.js
  -checkoutPage.js
  -confirmationPage.js
  -billingAddressPage.js
-utils
  -date.js
  -utilityFunction.js
  -excelUtil.js
-tests
 -testData
  -apiTestData
    -Payload
     -GetPayload
     -PostPayload
     -PutPayload
     -DeletePayload
  -uiTestData
   -registrationData.json
   -loginData.json
   -checkoutData.json
 -features
   -.feature (GIVEN WHEN THEN AND)
 -stepDefinition
   -.js (Implement in this file)
 -UITestCase
  -TC01_Test.spec.js
  -TC02_Test.spec.js
 -APITestCase



 API TestCases
 -------------

 CRUD - Operation

 Create
 Read
 Update
 Delete

 POST
 PUT
 GET
 PATCH
 DELETE

 API Status Code

 1XX
 2XX - Positive - 200, 201, 202, 204
 3XX - 
 4XX - Client side error
 5XX - Server side error

 Assertion will be based on status code and status message
 Assertion will be base on JSON Response
 