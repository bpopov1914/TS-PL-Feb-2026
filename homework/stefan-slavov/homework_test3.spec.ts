import { expect, test } from '@playwright/test';

test('First test scenario', async ({ page }) => {
  await test.step('Navigate to test page', async () => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    //verify we are on the testing page
    await expect(page).toHaveTitle('Practice Page');
  });

  await test.step('Radio button step', async () => {
    await page.locator('input[value="radio2"]').check();
    //verify second radio button is checked
    await expect.soft(page.locator('input[value="radio2"]')).toBeChecked();
  });

  await test.step('Autocomplete field step', async () => {
    await page.locator('#autocomplete').fill('Bulgaria');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
    //verify Bulgaria in the input field
    await await expect.soft(page.locator('#autocomplete')).toHaveValue('Bulgaria');
  });

  await test.step('Dropdown step', async () => {
    await page.locator('#dropdown-class-example').selectOption('option2');
    //verify option 2 is selected from the dropdown
    await expect.soft(page.locator('#dropdown-class-example')).toHaveValue('option2');
  });

  await test.step('Checkbox step', async () => {
    await page.locator('#checkBoxOption3').check();
    //verify checkbox is checked
    await expect.soft(page.locator('#checkBoxOption3')).toBeChecked();
  });

  await test.step('Hide/Show button step', async () => {
    await page.locator('#hide-textbox').click();
    //verify text is hidden
    await expect.soft(page.locator('#displayed-text')).toBeHidden();
  });

  await test.step('Mouse hover step', async () => {
    await page.locator('#mousehover').hover();
    //verify text is visible
    await expect.soft(page.locator('.mouse-hover-content a[href="#top"]')).toBeVisible();
  });
});

test('Second test scenario', async ({ page }) => {
  await test.step('Navigating to test page', async () => {
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
    //verify we are on the testing page
    await expect.soft(page).toHaveTitle('Automation Testing Practice: PlaywrightPractice');
  });

  //   await test.step('getByRole step', async () => {
  //     await page.getByRole('menuitem').getByRole('link', { name: 'Products' }).first().click();
  //     //verify navigation
  //     await expect.soft(page).toHaveURL(/.*products/);
  //   });

  await test.step('getByText step', async () => {
    await page.getByText('colored text');
    //verify color of text
    await expect.soft(page.getByText('colored text')).toHaveAttribute('style', 'color: red');
  });

  await test.step('getByLabel step', async () => {
    await page.getByLabel(' Standard').check();
    //verify it is checked
    await expect.soft(page.getByLabel(' Standard')).toBeChecked();
  });

  await test.step('getByPlaceholder step', async () => {
    //verify input field is editable
    await expect.soft(page.getByPlaceholder('Enter your full name')).toBeEditable();
  });

  await test.step('getByAltText step', async () => {
    //verify image is visible
    await expect.soft(page.getByAltText('logo image')).toBeVisible();
  });

  await test.step('getByTitle step', async () => {
    //verify text of the element
    await expect.soft(page.getByTitle('Home page link')).toHaveText('Home');
  });

  await test.step('getByTestId step', async () => {
    await expect.soft(page.getByTestId('profile-name')).toContainText('John');
  });
});
