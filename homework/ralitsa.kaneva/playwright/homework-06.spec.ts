import { test, expect } from '@playwright/test';
import { url } from 'node:inspector';
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

test(`Verify rahulshettyacademy home page`, async ({ page }) => {
  await test.step(`Navigate to site`, async () => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    // assert succesful naviation
    await expect(page).toHaveTitle('Practice Page');
  });

  // check radio button #2
  await test.step('Check radio button number 2', async () => {
    const radioButton2 = page.locator("input[value='radio2']");
    await radioButton2.check();
    // assert Radio button #2 is checked
    await expect(radioButton2).toBeChecked();
  });

  // fill the input with "Bulgaria"
  await test.step('Fill the input with "Bulgaria"', async () => {
    const inputField = page.locator('#autocomplete');
    await inputField.fill('Bulg');
    // click on the first auto complete suggestion
    await page.locator('#ui-id-1').click();
    // Verify the input value is "Bulgaria"
    await expect(inputField).toHaveValue('Bulgaria');
  });

  // select option #2 from the dropdown
  await test.step('select option #2 from the dropdown', async () => {
    const dropDown = page.locator('#dropdown-class-example');
    await dropDown.selectOption('Option2');
    // Verify the selected option is "option2"
    await expect(dropDown).toHaveValue('option2');
  });

  // check checkbox #3
  await test.step('check checkbox number 3', async () => {
    const checkBox3 = page.locator('#checkBoxOption3');
    await checkBox3.check();
    // Verify checkbox #3 is checked
    await expect(checkBox3).toBeChecked();
  });

  // click on the "Hide" button
  await test.step('click on the "Hide" button', async () => {
    const hideButton = page.locator('#hide-textbox');
    const exampleTextField = page.locator('#displayed-text');
    await hideButton.click();
    // Verify the input element is now hidden
    await expect(exampleTextField).toBeHidden();
  });

  // hover over the "Mouse Hover" element
  await test.step('hover over the "Mouse Hover" element', async () => {
    const mouseHoverElement = page.locator('#mousehover');
    const topLink = page.locator('a[href="#top"]');
    await mouseHoverElement.hover();
    // Verify the "Top" link is now visible
    await expect(topLink).toBeVisible();
  });
});

// second test scenario use only Playwright selectors like page.getByRole('button', { name: 'Вход' }).click();
test.only('Navigate', async ({ page }) => {
  // navigate to https://testautomationpractice.blogspot.com/p/playwrightpractice.html
  await test.step('navigate to https://testautomationpractice.blogspot.com/p/playwrightpractice.html', async () => {
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
    // assert succesful naviation
    await expect(page).toHaveTitle('Automation Testing Practice: PlaywrightPractice');
  });

  // In Playwright Practice session group 1. getByRole() Locators pick a locator from section Navigation and click on it.
  await test.step('pick a locator from section Navigation and click on it', async () => {
    const navigationProducts = page
      .locator('#role-locators')
      .getByRole('link', { name: 'Products' });
    await navigationProducts.click();

    // assert navigation has taken place (url has changed)
    await expect(page).toHaveURL(
      'https://testautomationpractice.blogspot.com/p/playwrightpractice.html#',
    );
  });

  // In Playwright Practice session group 2. getByText() Locators pick one of the paragraphs with colored text and assert is color
  await test.step('pick one of the paragraphs with colored text and assert its color', async () => {
    const coloredParagraph = page.getByText('colored text', { exact: true });
    await expect(coloredParagraph).toHaveCSS('color', 'rgb(255, 0, 0)');
  });

  // In Playwright Practice session group 3. getByLabel() Locators Locators click the unchecked radio button
  await test.step('click the unchecked radio button', async () => {
    const uncheckedRadioButton = page.getByLabel('Standard');
    await uncheckedRadioButton.check();
    // assert it is checked now
    await expect(uncheckedRadioButton).toBeChecked();
  });

  // In Playwright Practice session group 4. getByPlaceholder() Locators pick an input fill and assert it is editable
  await test.step('pick an input fill and assert it is editable', async () => {
    // fill the input filed with text
    const inputMessageField = page.getByPlaceholder('Type your message here...');
    await inputMessageField.fill('This is my text entered here');
    await expect(inputMessageField).toBeEditable();
  });

  // In Playwright Practice session group 5.getByAltText() Locators assert the image is visible
  await test.step('assert the image is visible', async () => {
    const image = page.getByAltText('logo image');
    await expect(image).toBeVisible();
  });

  // In Playwright Practice session group 6. getByTitle() Locators assert one of the elements' full text
  await test.step("assert one of the elements' full text", async () => {
    const lastBullet = page.getByTitle('Tooltip text', { exact: true });
    await expect(lastBullet).toHaveText('This text has a tooltip');
  });

  // In Playwright Practice session group 7. getByTestId() Locators assert one of the element contains part of its text
  await test.step('assert one of the element contains part of its text', async () => {
    const email = page.getByTestId('profile-email');
    await expect(email).toContainText('example');
  });
});
