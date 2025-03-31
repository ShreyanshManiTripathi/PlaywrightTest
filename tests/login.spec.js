import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.facebook.com');   
await page.locator('//input[@id="email"]').fill('shreyansh12octob@gmail.com');
await page.locator('//input[@id="pass"]').fill('STEPHEN#@#');
await page.locator('//button[@name="login"]').click();

await page.waitForTimeout(5000);
//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});








