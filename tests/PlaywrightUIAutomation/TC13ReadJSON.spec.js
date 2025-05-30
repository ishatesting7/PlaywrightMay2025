const{test, expect} = require('@playwright/test');
const {getUserData, getEnvConfig} = require('../utils/dataHelper');

const ENV = process.env.ENV || 'dev';

//If you have passed via CLI then the value dev will be replace with PROD

const config = getEnvConfig(ENV);

test.describe('Admin and User Roles', ()=>{

    ['admin','user'].forEach(role =>{

        const credentials = getUserData(role);

        test(`Login as ${role}`, async({page})=>{

            await page.goto(`${config.baseUrl}`);

            console.log(credentials.username);

            console.log(credentials.password);
        })
    })
})
