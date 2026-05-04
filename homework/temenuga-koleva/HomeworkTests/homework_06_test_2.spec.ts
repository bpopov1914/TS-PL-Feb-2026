import { test, expect } from '@playwright/test';

test.describe('Homework 06 test scenario 2', { tag: '@hw-6-2' }, () => {
    test('test: Playwright locators', async ({ page }) => {
    await test.step('Navigate to PlaywrightPractice Page', async () => {
        await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
        await expect.soft(page, "Verify Page title").toHaveTitle('Automation Testing Practice: PlaywrightPractice');
     });

await test.step('Click on Home link', async () => {
  await page.locator('#role-locators').getByRole('link', { name: 'Home' }).click();
  await expect.soft(page, "Verify Navigation to Home").toHaveURL('https://testautomationpractice.blogspot.com/p/playwrightpractice.html#');
});

await test.step('Verify colored text is red', async () => {
    await expect.soft(page.getByText('colored text', { exact: true })).toHaveCSS('color', 'rgb(255, 0, 0)'); // red
});

await test.step('Check radio button', async () => {
  await page.getByLabel('Express').check();
  await expect.soft(page.getByLabel('Express')).toBeChecked();
});

await test.step('Fill input field with text', async () => {
  await page.locator('#placeholder-locators').getByPlaceholder('Type your message here...').click();
  await expect.soft(page.locator('#placeholder-locators').getByPlaceholder('Type your message here...')).toBeEditable();
  await page.locator('#placeholder-locators').getByPlaceholder('Type your message here...').fill('Playwright test message');
});

await test.step('Verify Playwright logo is visible', async () => {
    await expect.soft(page.getByAltText('logo image')).toBeVisible();
   });

await test.step('Hover over element with title "HyperText Markup Language"', async () => {
    await page.locator('#title-locators').getByTitle('HyperText Markup Language').hover();
    await expect.soft(page.locator('#title-locators').getByTitle('HyperText Markup Language')).toHaveText('HTML');
   });

await test.step('Verify element with test id "edit-profile-btn" contains text "Profile"', async () => {
    await expect.soft(page.locator('#testid-locators').getByTestId('edit-profile-btn')).toContainText('Profile');
   });
});
});