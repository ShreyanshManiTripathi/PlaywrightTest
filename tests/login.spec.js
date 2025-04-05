import { test, expect ,playwright } from '@playwright/test';
import {customTests as tests} from'../utils/test-base'


// test.beforeAll(async ({browser})=>{
//   const context= await browser.newContext();
//   const page= await context.newPage();
//   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');   
// await page.locator('//input[@name="username"]').fill('Admin');
// await page.locator('//input[@name="password"]').fill('admin123');
// await page.locator('//button[@type="submit"]').click(); 
// await page.waitForLoadState("networkidle");
// (await context).storageState({path:'state.json'});
// })

// Fixtures

tests('log in using fixtures',async ({browser,testDataForOrder})=>{
  const context= await browser.newContext();
  const page= await context.newPage();
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');   
await page.locator('//input[@name="username"]').fill(testDataForOrder.username);
await page.locator('//input[@name="password"]').fill(testDataForOrder.password);
await page.locator('//button[@type="submit"]').click(); 
await page.waitForLoadState("networkidle");
// (await context).storageState({path:'state.json'});
})

/*


STORAGE STATE


test('has title', async ({ browser }) =>{
  const context= await browser.newContext({storageState:'state.json'});
  const page= await context.newPage();
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
await page.waitForLoadState("networkidle");
 await expect(page.locator("//h6[@class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']")).toHaveText("Dashboard");
await page.waitForTimeout(5000);
});

*/




//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();









