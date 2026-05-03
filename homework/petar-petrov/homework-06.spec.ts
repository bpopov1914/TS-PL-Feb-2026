import { test, expect } from '@playwright/test';

// first test scenario - CSS and XPath selectors
test('Homework 06 - Test 1', async ({ page }) => {
  // navigate to the automation practice page
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
  // assert successful navigation
  await expect(page).toHaveURL('https://rahulshettyacademy.com/AutomationPractice/');

  await test.step('Check Radio Button #2', async () => {
    // check radio button #2
    await page.locator('input[value="radio2"]').check();
    // assert Radio button #2 is checked
    await expect.soft(page.locator('input[value="radio2"]')).toBeChecked();
  });

  await test.step('Fill autocomplete input with Bulgaria', async () => {
    // fill the input with "Bulgaria"
    await page.locator('#autocomplete').fill('Bulgaria');
    // click on the first auto complete suggestion
    await page.locator('.ui-menu-item').first().click();
    // verify the input value is "Bulgaria"
    await expect.soft(page.locator('#autocomplete')).toHaveValue('Bulgaria');
  });

  await test.step('Select option #2 from dropdown', async () => {
    // select option #2 from the dropdown
    await page.locator('#dropdown-class-example').selectOption('option2');
    // verify the selected option is "option2"
    await expect.soft(page.locator('#dropdown-class-example')).toHaveValue('option2');
  });

  await test.step('Check Checkbox #3', async () => {
    // check checkbox #3
    await page.locator('#checkBoxOption3').check();
    // verify checkbox #3 is checked
    await expect.soft(page.locator('#checkBoxOption3')).toBeChecked();
  });

  await test.step('Click Hide button and verify input is hidden', async () => {
    // click on the "Hide" button
    await page.locator('#hide-textbox').click();
    // verify the input element is now hidden
    await expect.soft(page.locator('#displayed-text')).toBeHidden();
  });

  await test.step('Hover over Mouse Hover element', async () => {
    // hover over the "Mouse Hover" element
    await page.locator('#mousehover').hover();
    // verify the "Top" link is now visible
    await expect.soft(page.locator('.mouse-hover-content a[href="#top"]')).toBeVisible();
  });
});

// Playwright built-in selectors
test('Homework 06 - Test 2', async ({ page }) => {
  // navigate to the Playwright practice page
  await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
  // assert successful navigation
  await expect(page).toHaveURL(
    'https://testautomationpractice.blogspot.com/p/playwrightpractice.html',
  );

  await test.step('Group 1: getByRole - Click a Navigation link', async () => {
    // pick the "Home" navigation link and click it
    await page.getByRole('link', { name: 'Home' }).first().click();
    // assert navigation has taken place (url has changed)
    await expect(page).not.toHaveURL(
      'https://testautomationpractice.blogspot.com/p/playwrightpractice.html',
    );
    // go back to continue with the rest of the test
    await page.goBack();
  });

  await test.step('Group 2: getByText - Assert color of a colored paragraph', async () => {
    // assert the red-colored span inside the paragraph has red CSS color
    await expect
      .soft(page.getByText('colored text', { exact: true }))
      .toHaveCSS('color', 'rgb(255, 0, 0)');
  });

  await test.step('Group 3: getByLabel - Click unchecked radio button', async () => {
    // click the "Express" radio button (unchecked by default)
    await page.getByLabel('Express').check();
    // assert the radio button is now checked
    await expect.soft(page.getByLabel('Express')).toBeChecked();
  });

  await test.step('Group 4: getByPlaceholder - Assert input is editable and fill it', async () => {
    const nameInput = page.getByPlaceholder('Enter your full name');
    // assert the input is editable
    await expect.soft(nameInput).toBeEditable();
    // fill the input field with text
    await nameInput.fill('Petar Petrov');
  });

  await test.step('Group 5: getByAltText - Assert image is visible', async () => {
    // assert the Playwright logo image is visible on the page (alt text is 'logo image')
    await expect.soft(page.getByAltText('logo image')).toBeVisible();
  });

  await test.step('Group 6: getByTitle - Assert element full text', async () => {
    // assert the full text of the abbreviation element whose title is 'HyperText Markup Language'
    await expect.soft(page.getByTitle('HyperText Markup Language')).toHaveText('HTML');
  });

  await test.step('Group 7: getByTestId - Assert element contains part of its text', async () => {
    // assert the Edit Profile button (data-testid='edit-profile-btn') contains its label text
    await expect.soft(page.getByTestId('edit-profile-btn')).toContainText('Edit Profile');
  });
});
