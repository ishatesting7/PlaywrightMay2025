import { test, expect } from '@playwright/test';
// before
// after
// beforeEach
// afterEach

test.beforeAll('Demo for before all', ()=>{

    console.log("Before ALL");
})

test.afterEach("I am in after Each", ()=>{

    console.log("After Each");
})

test.afterAll("I am in after All", ()=>{

    console.log("After All Hooks");
})

test.beforeEach("I am in before each", ()=>{

    console.log(" I am in before each ");
})

test("Sample Test", ()=>{

    console.log(" Sample Test Execution - Test Case 1")
})

test("Sample Test 1", ()=>{

    console.log(" Sample Test Execution - Test Case 2")
})

test("Sample Test 2", ()=>{

    console.log(" Sample Test Execution - Test Case 3")
})