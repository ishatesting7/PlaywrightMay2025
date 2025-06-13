import { test, expect } from '@playwright/test';


test.describe('Group 1', ()=>{


    test('Demo 1', async({page})=>{

        console.log("Demo1");
    })

    test('Demo 2', async({page})=>{

        console.log("Demo1");
    })
})

test.describe('Group 2', ()=>{


    test('Demo 3', async({page})=>{

        console.log("Demo1");
    })

    test('Demo 4', async({page})=>{

        console.log("Demo1");
    })
})