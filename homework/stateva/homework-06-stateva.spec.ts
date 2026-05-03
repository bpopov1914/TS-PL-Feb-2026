import { test, expect } from '@playwright/test';

test.describe('Homework 06 - Playwright Locators & Assertions', () => {
  test('Scenario 1 - CSS and XPath selectors', async ({ page }) => {
    await test.step('Navigate to practice page and verify successful navigation', async () => {
      await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

      // Assert page is loaded by verifying a stable UI element
      await expect(page.locator('#radio-btn-example')).toBeVisible();
    });

    await test.step('Check radio button #2 and verify it is checked', async () => {
      await page.locator('input[value="radio2"]').check();

      // Verify radio button #2 is selected
      await expect.soft(page.locator('input[value="radio2"]')).toBeChecked();
    });

    await test.step('Fill autocomplete input with Bulgaria and select first suggestion', async () => {
      await page.locator('#autocomplete').fill('Bulgaria');

      // Select first autocomplete suggestion
      await expect(page.locator('//li[@class="ui-menu-item"]/div').first()).toBeVisible();

      await page.locator('//li[@class="ui-menu-item"]/div').first().click();

      // Verify selected country value is Bulgaria
      await expect.soft(page.locator('#autocomplete')).toHaveValue('Bulgaria');
    });

    await test.step('Select option #2 from dropdown and verify selected value', async () => {
      await page.locator('#dropdown-class-example').selectOption('option2');

      // Verify dropdown selected value is option2
      await expect.soft(page.locator('#dropdown-class-example')).toHaveValue('option2');
    });

    await test.step('Check checkbox #3 and verify it is checked', async () => {
      await page.locator('#checkBoxOption3').check();

      // Verify checkbox #3 is checked
      await expect.soft(page.locator('#checkBoxOption3')).toBeChecked();
    });

    await test.step('Click Hide button and verify input field is hidden', async () => {
      await page.locator('#hide-textbox').click();

      // Verify input field is hidden after clicking Hide button
      await expect.soft(page.locator('#displayed-text')).toBeHidden();
    });

    await test.step('Hover over Mouse Hover button and verify Top link is visible', async () => {
      await page.locator('.mouse-hover').hover();

      // Verify Top link becomes visible after hover
      await expect.soft(page.locator('//a[text()="Top"]')).toBeVisible();
    });
  });

  test('Scenario 2 - Playwright selectors only', async ({ page }) => {
    await test.step('Navigate to Playwright practice page and verify successful navigation', async () => {
      await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

      // Hard assertion because navigation is critical for test continuation
      await expect(page).toHaveURL(
        'https://testautomationpractice.blogspot.com/p/playwrightpractice.html',
      );
    });

    await test.step('Use getByRole locator and verify navigation from Navigation section', async () => {
      await page.locator('#role-locators').getByRole('link', { name: 'Products' }).click();

      // Verify URL changed after clicking Products link
      await expect(page).toHaveURL(
        'https://testautomationpractice.blogspot.com/p/playwrightpractice.html#',
      );
    });

    await test.step('Use getByText locator and verify colored text paragraph color', async () => {
      // Verify the paragraph has red color styling
      await expect.soft(page.getByText('colored text')).toHaveCSS('color', 'rgb(255, 0, 0)');
    });

    await test.step('Use getByLabel locator to check unchecked radio button', async () => {
      await page.getByLabel('Express').check();

      // Verify Express radio button is checked
      await expect.soft(page.getByLabel('Express')).toBeChecked();
    });

    await test.step('Use getByPlaceholder locator to fill editable input field', async () => {
      // Verify input field is editable
      await expect.soft(page.getByPlaceholder('Type your message here...')).toBeEditable();

      await page.getByPlaceholder('Type your message here...').fill('Test message');

      // Verify entered text value
      await expect
        .soft(page.getByPlaceholder('Type your message here...'))
        .toHaveValue('Test message');
    });

    await test.step('Use getByAltText locator and verify image is visible', async () => {
      // Verify logo image is visible on the page
      await expect.soft(page.getByAltText('logo image')).toBeVisible();
    });

    await test.step('Use getByTitle locator and verify full text content', async () => {
      // Verify element contains full HTML text
      await expect.soft(page.getByTitle('HyperText Markup Language')).toHaveText('HTML');
    });

    await test.step('Use getByTestId locator and verify partial text content', async () => {
      // Verify profile element contains Doe in the text
      await expect.soft(page.getByTestId('profile-name')).toContainText('Doe');
    });
  });
});
