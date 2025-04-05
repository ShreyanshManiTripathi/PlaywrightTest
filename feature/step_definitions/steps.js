import { Given, When, Then, Before, After } from '@cucumber/cucumber';
import { chromium } from 'playwright';

let browser, context, page;

Before(async function () {
  browser = await chromium.launch({ headless: false }); // Launch browser in headful mode for debugging
  context = await browser.newContext();
  page = await context.newPage();
});

// Hook to close the browser after running the tests
After(async function () {
  await browser.close();
});

// Step to navigate to the login page
Given('I am on the login page', async function () {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); // Change to the URL of your login page
});

// Step to enter the username (parameterized with {string})
When('User enters username {string}', async function (username) {
  await page.locator('input[name="username"]').fill(username); // Use the correct selector for the username field
})

// Step to enter the password (parameterized with {string})
When('User enters password {string}', async function (password) {
  await page.locator('input[name="password"]').fill(password); // Use the correct selector for the password field
});

// Step to click the login button
When('Clicks on Login Button', async function () {
  await page.locator('button[type="submit"]').click(); // Use the correct selector for the login button
});

// Step to verify login success
Then('It Logins', async function () {
  // You can add checks to verify the login success here (e.g., check for a redirect URL or successful login state)
  const url = await page.url();
  if (url !== 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index') {
    throw new Error('Login failed');
  }
  console.log('Login successful');
});
