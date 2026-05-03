import { test, expect } from '@playwright/test';

test('Scenario 1 Homework 06 Mihaelina', { tag: '@homework' }, async ({ page }) => {
  await test.step('Navigate to site', async () => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await expect(page, 'Verifying the correct page is loaded').toHaveTitle('Practice Page');
  });

  await test.step('Check radiobutton from Radio Button Example', async () => {
    await page.locator("[name = 'radioButton'][value = 'radio2']").click();
    await expect
      .soft(
        page.locator("[name = 'radioButton'][value = 'radio2']"),
        'Verify the radio button is checked',
      )
      .toBeChecked();
  });

  await test.step('Fill in country in Suggession Class Example', async () => {
    await page.locator('.inputs.ui-autocomplete-input').fill('Bulgaria');
    await page.locator('.ui-menu-item-wrapper').first().click();
    await expect
      .soft(page.locator('.inputs.ui-autocomplete-input'), 'First autocomplete suggestion selected')
      .toHaveValue('Bulgaria');
  });

  await test.step('Select Dropdown Example option', async () => {
    await page.locator('#dropdown-class-example').selectOption({ index: 2 });
    await expect
      .soft(page.locator('#dropdown-class-example'), 'Option 2 from the dropdown is selected')
      .toHaveValue('option2');
  });

  await test.step('Select option from Checkbox Example', async () => {
    await page.locator('#checkBoxOption3').click();
    await expect
      .soft(page.locator('#checkBoxOption3'), 'Verify checkbox 3 is selected')
      .toBeChecked();
  });

  await test.step('Hide input element form Element Displayed Example', async () => {
    await page.locator('#hide-textbox').click();
    await expect
      .soft(page.locator('.inputs.displayed-class'), 'Verify the input element is hidden')
      .toBeHidden();
  });

  await test.step('Hover over Mouse Hover Example element', async () => {
    await page.locator('#mousehover').hover();
    await expect
      .soft(page.locator("a[href='#top']"), 'Verify the Top link is now visible')
      .toBeVisible();
  });
});

test('Scenatio 2 Homework 06 Mihaelina', { tag: '@homework6' }, async ({ page }) => {
  await test.step('Navigate to site', async () => {
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
    await expect(page, 'Verifying the correct page is loaded').toHaveTitle(
      'Automation Testing Practice: PlaywrightPractice',
    );
  });

  await test.step('Navigate to Products', async () => {
    await page.getByRole('menuitem').getByRole('link', { name: 'Products' }).click();
    await expect(page, 'Verifying the URL has changed').toHaveURL(
      'https://testautomationpractice.blogspot.com/p/playwrightpractice.html#',
    );
  });

  await test.step('Verify text color of section 2 text', async () => {
    // await page.getByText('colored text').hover();
    await expect
      .soft(page.getByText('colored text'), 'Verifying the text color')
      .toHaveCSS('color', 'rgb(255, 0, 0)');
  });

  await test.step('Select radio button', async () => {
    await page.getByLabel('Express').click();
    await expect
      .soft(page.getByLabel('Express'), 'Verify the radio button is checked')
      .toBeChecked();
  });

  await test.step('Fill in the input field with text', async () => {
    await page.getByPlaceholder('Enter your full name').click();
    await expect
      .soft(page.getByPlaceholder('Enter your full name'), 'Verify the selected field is editable')
      .toBeEditable();
    await page.getByPlaceholder('Enter your full name').fill('Mihaelina Lilova');
  });

  await test.step('Verify the image in section 5 is visible', async () => {
    // await page.getByAltText('logo image').hover();
    await expect.soft(page.getByAltText('logo image'), 'Verify the image is visible').toBeVisible();
  });

  await test.step('Assert an element in section 6 full text', async () => {
    // await page.getByTitle('Tooltip text').hover();
    await expect
      .soft(page.getByTitle('Tooltip text'), 'Assert the full text of the element')
      .toHaveText('This text has a tooltip');
  });

  await test.step('Assert element from section 7 by ID', async () => {
    // await page.getByTestId('product-card-2').getByTestId('product-name').hover();
    await expect
      .soft(
        page.getByTestId('product-card-2').getByTestId('product-name'),
        'Verify the correct element is hovered',
      )
      .toContainText('Product B');
  });

  await page.pause();
});
