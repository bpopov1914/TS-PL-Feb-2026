// create the below 2 test scenarios
// put all groups of actions into a test.step
// use soft assertions, unless we are assrting a navigation has taken place
// try to add meaningful comments to all assertions
// you can find test execution command examples in the Readme.md file in project's main folder
// you can add -ui mode debug your tests during execution
// after execution view html report with command: 'npx playwright show-report' (if any tests failed report will open automaticaly)
// a trace artifact will be added to the report if any test has failed, you can use as well to debug your tests

// first test scenario use CSS and XPATH selectors like page.locator('location string'):

// navigate to https://rahulshettyacademy.com/AutomationPractice/
// assert succesful naviation

// check radio button #2
// assert Radio button #2 is checked

// fill the input with "Bulgaria"
// click on the first auto complete suggestion
// Verify the input value is "Bulgaria"

// select option #2 from the dropdown
// Verify the selected option is "option2"

// check checkbox #3
// Verify checkbox #3 is checked

// click on the "Hide" button
// Verify the input element is now hidden

// hover over the "Mouse Hover" element
// Verify the "Top" link is now visible

// second test scenario use only Playwright selectors like page.getByRole('button', { name: 'Вход' }).click();

// navigate to https://testautomationpractice.blogspot.com/p/playwrightpractice.html
// assert succesful naviation

// In Playwright Practice session group 1. getByRole() Locators pick a locator from section Navigation and click on it.
// assert navigation has taken place

// In Playwright Practice session group 2. getByText() Locators pick one of the paragraphs with colored text and assert its color

// In Playwright Practice session group 3. getByLabel() Locators Locators check the unchecked radio button
// assert is is checked now

// In Playwright Practice session group 4. getByPlaceholder() Locators pick an input fill and assert it is editable
// fill the input filed with text

// In Playwright Practice session group 5.getByAltText() Locators assert the image is visible

// In Playwright Practice session group 6. getByTitle() Locators assert one of the elements' full text

// In Playwright Practice session group 7. getByTestId() Locators assert one of the element contains part of its text

import { Locator, test, expect } from '@playwright/test';

test.describe('Homework-6 - Locator, Actions & Assertions Practise', { tag: '@hw-6' }, () => {
  test('Scenario 1: XPath and CSS', { tag: ['@XPath', '@CSS'] }, async ({ page }) => {
    await test.step('Navigate to site', async () => {
      await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
      await expect(
        page.locator('//h1[contains(text(), "Practice Page")]'),
        'Verify page loaded successfully',
      ).toBeVisible();
    });

    await test.step('Check radio button', async () => {
      const radioButton2: Locator = page.locator('//input[@value="radio2"]');
      await radioButton2.check();
      await expect.soft(radioButton2, 'Verify Radio button #2 is checked').toBeChecked();
    });

    await test.step('Fill autocomplete input with text', async () => {
      const input: Locator = page.locator('#autocomplete');
      await input.fill('Bulgaria');
      await page.locator('#ui-id-1').click();
      await expect.soft(input, 'Verify input is filled with "Bulgaria"').toHaveValue('Bulgaria');
    });

    await test.step('Select option from dropdown', async () => {
      const dropdown: Locator = page.locator('#dropdown-class-example');
      const option: string = 'option2';
      await dropdown.selectOption(option);
      await expect.soft(dropdown, 'Verify correct option is selected').toHaveValue(option);
    });

    await test.step('Check checkbox', async () => {
      const checkbox: Locator = page.locator('#checkBoxOption3');
      await checkbox.check();
      await expect.soft(checkbox, 'Verify checkbox is checked').toBeChecked();
    });

    await test.step('Verify the "Hide" button', async () => {
      await page.locator('#hide-textbox').click();
      await expect.soft(page.locator('#displayed-text'), 'Verify element is hidden').toBeHidden();
    });

    await test.step('Hover over "Mouse Hover" element', async () => {
      await page.locator('#mousehover').hover();
      await expect
        .soft(page.locator('//a[text()="Top"]'), 'Verify "Top" link is visible')
        .toBeVisible();
    });
  });

  test('Scenario 2: Playwright locators', { tag: '@pw-loc' }, async ({ page }) => {
    await test.step('Navigate to Site', async () => {
      await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
      await expect(page, 'Verify page title').toHaveTitle(
        'Automation Testing Practice: PlaywrightPractice',
      );
    });

    await test.step('Click "Products" link', async () => {
      await page.locator('#role-locators').getByRole('link', { name: 'Products' }).click();
      await expect(page, 'Verify page url').toHaveURL(
        'https://testautomationpractice.blogspot.com/p/playwrightpractice.html#',
      );
    });

    await test.step('Verify coloured text', async () => {
      await expect
        .soft(page.getByText('colored text', { exact: true }), 'Verify coloured text')
        .toHaveCSS('color', 'rgb(255, 0, 0)');
    });

    await test.step('Check radio button', async () => {
      const radioButton: Locator = page.getByLabel('Standard');
      await radioButton.check();
      await expect.soft(radioButton, 'Verify radio button is checked').toBeChecked();
    });

    await test.step('Fill input field with text', async () => {
      const inputYourMessage: Locator = page.getByPlaceholder('Type your message here...');
      await expect.soft(inputYourMessage, 'Verify Input field is editable').toBeEditable();
      await inputYourMessage.fill('Audentes Fortuna iuvat');
    });

    await test.step('Verify Playwright logo is visible', async () => {
      await expect
        .soft(page.getByAltText('logo image'), 'Verify Playwright logo is visible')
        .toBeVisible();
    });

    await test.step('Verify Element exact text', async () => {
      await expect
        .soft(page.getByTitle('HyperText Markup Language'), 'Verify Element exact text')
        .toHaveText('HTML');
    });

    await test.step('Verify element contains text', async () => {
      await expect
        .soft(page.getByTestId('profile-email'), 'Verify element contains text')
        .toContainText('john.doe');
    });
  });
});
