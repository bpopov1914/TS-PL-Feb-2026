import { test, expect } from '@playwright/test';

test.describe('Homework 06 Test Suite', () => {
  test('Scenario 1: CSS/XPath', async ({ page }) => {
    await test.step('Navigate to practice page', async () => {
      await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
      await expect(page).toHaveURL(/AutomationPractice/);
    });

    await test.step('Select radio button 2', async () => {
      const radio2 = page.locator('input[value="radio2"]');
      await radio2.check();
      await expect.soft(radio2).toBeChecked();
    });

    await test.step('Fill autocomplete input', async () => {
      const suggestionInput = page.locator('#autocomplete');
      await suggestionInput.fill('Bulgaria');

      await page.locator('#ui-id-1').click();

      await expect
        .soft(suggestionInput, 'Input value should be "Bulgaria"')
        .toHaveValue('Bulgaria');
    });

    await test.step('Dropdown Selection', async () => {
      const dropdown = page.locator('#dropdown-class-example');
      await dropdown.selectOption('option2');
      await expect.soft(dropdown, 'Dropdown should have "option2" selected').toHaveValue('option2');
    });

    await test.step('Select Checkbox', async () => {
      const checkbox3 = page.locator('#checkBoxOption3');
      await checkbox3.check();
      await expect.soft(checkbox3, 'Checkbox #3 should be checked').toBeChecked();
    });

    await test.step('Element Visibility Toggle', async () => {
      await page.locator('#hide-textbox').click();
      const displayedText = page.locator('#displayed-text');
      await expect.soft(displayedText, 'Input element should be hidden').toBeHidden();
    });

    await test.step('Mouse Hover', async () => {
      await page.locator('#mousehover').hover();
      const topLink = page.locator('a[href="#top"]');
      await expect.soft(topLink, '"Top" link should become visible on hover').toBeVisible();
    });
  });

  test('Scenario 2: Playwright Specific Locators', async ({ page }) => {
    await test.step('Navigate to Playwright practice page', async () => {
      await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
      await expect(page).toHaveTitle('Automation Testing Practice: PlaywrightPractice');
    });

    await test.step('getByRole: Navigation Link', async () => {
      await page.locator('#role-locators').getByRole('link', { name: 'Home' }).click();
      await expect(page).toHaveURL(
        'https://testautomationpractice.blogspot.com/p/playwrightpractice.html#',
      );
    });

    await test.step('getByText: Verify Colored Text', async () => {
      const text = page.getByText('colored text', { exact: true });
      await expect
        .soft(text, 'Text should have red color styling')
        .toHaveCSS('color', 'rgb(255, 0, 0)');
    });

    await test.step('getByLabel: Radio Buttons', async () => {
      const standardRadio = page.getByLabel('Standard');
      await standardRadio.check();
      await expect.soft(standardRadio, 'Standard radio button should be checked').toBeChecked();
    });

    await test.step('getByPlaceholder: Input Validation', async () => {
      const inputField = page.getByPlaceholder('Enter your full name');
      await expect.soft(inputField, 'Placeholder input should be editable').toBeEditable();
      await inputField.fill('Boris Popov');
    });

    await test.step('getByAltText: Image Visibility', async () => {
      const iconImage = page.getByAltText('logo image');
      await expect.soft(iconImage, 'The image should be visible').toBeVisible();
    });

    await test.step('getByTitle: Full Text Assertion', async () => {
      const tooltipElement = page.getByTitle('Tooltip text');
      await expect
        .soft(tooltipElement, 'Tooltip element should contain specific text')
        .toHaveText('This text has a tooltip');
    });

    await test.step('getByTestId: Partial Text Assertion', async () => {
      const testIdElement = page.getByTestId('profile-name');
      await expect.soft(testIdElement, 'Element should contain text').toContainText('John');
    });
  });
});
