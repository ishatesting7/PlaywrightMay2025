import {test, expect} from "@playwright/test"

import {promises as fs} from 'fs'

const filePath = './tests/data/testDatajson.json';

test("Read and Update the value in the JSON", async({page})=>{

    const jsonData = await fs.readFile(filePath,'utf-8');

    const dummyJsonData = JSON.parse(jsonData);

    console.log(dummyJsonData);

    const userEmail = dummyJsonData.user.contact.find(x => x.type === 'email').value;

    console.log("Email Address", userEmail);

    dummyJsonData.user.name = "Manan";

    await fs.writeFile(filePath,JSON.stringify(dummyJsonData,null,2));

    const jsonData1 = await fs.readFile(filePath,'utf-8');

    const dummyJsonData1 = JSON.parse(jsonData1);

    console.log(dummyJsonData1);
})