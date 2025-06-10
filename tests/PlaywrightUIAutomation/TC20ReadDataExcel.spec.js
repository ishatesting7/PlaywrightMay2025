import { test, expect } from "@playwright/test";
import * as XLSX from 'xlsx'
import path from 'path';
import fs from 'fs'

test('Read and Write the Excel', async({page})=>{


const filePath = path.resolve('./tests/data/data.xlsx');

const sheetName = 'Sheet1';

const workbook = XLSX.readFile(filePath);

const worksheet = workbook.Sheets[sheetName];
// convert the json
const jsonData  = XLSX.utils.sheet_to_json(worksheet,{defval:''});

console.log(jsonData[0].username);

console.log(jsonData[1].username);

const userNameUpdated = "Admin1234";

jsonData[0].username = userNameUpdated;

const updateWB = XLSX.utils.json_to_sheet(jsonData,{header:['username','password']});

workbook.Sheets[sheetName] = updateWB;

XLSX.writeFile(workbook, filePath);

})