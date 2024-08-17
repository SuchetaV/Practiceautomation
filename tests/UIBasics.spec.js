const{test, expect}=require('@playwright/test')
const { TestContext } = require('node:test')

test.only('test the title of URL',async({browser}) =>{


    const Context= await browser.newContext()
    const page=await Context.newPage()
    await page.goto("https://www.google.co.in/")
    console.log(await page.title())
    await page.locator('#APjFqb').fill('sucheta')

})
test('test the URL',async({page}) =>{
       await page.goto("https://playwright.dev/docs/writing-tests");
       console.log(await page.title());
       await expect(page).toHaveTitle("Writing tests | Playwright")

})