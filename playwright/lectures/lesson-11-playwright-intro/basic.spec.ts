import { test, expect } from '@playwright/test';

// documentation: https://playwright.dev/docs/writing-tests

test('Basic Scenario', async ({ page }) => {
  await page.goto('https://playwright.dev/'); // Open a new browser, context, page tab and navigate to URL
  await expect(page).toHaveTitle(/Playwright/); // Expect page title text to contain 'Playwright' substring using Regular Expression (RegEx)

  await page.getByRole('link', { name: 'Get started' }).click(); // Click the Get "Started" link
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible(); // Expects page to have a heading with the name "Installation"
});
