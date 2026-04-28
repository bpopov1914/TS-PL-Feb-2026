import { test, expect } from '@playwright/test';

test('Task1', async ({ page }) => {
  await test.step('Navigate New Page', async () => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await expect(page).toHaveTitle('Practice Page');
  });
  //Radio button is checked
  await test.step('Radio button check', async () => {
    await page.locator('input[type="radio"][value="radio2"]').check();
    await expect.soft(page.locator('input[type="radio"][value="radio2"]')).toBeChecked();
  });
  //Enter "Bulgaria" string and verify it'
  await test.step('Enter string and verify it', async () => {
    await page.locator('#autocomplete').fill('Bulgaria');
    await page.locator('.ui-menu-item-wrapper').click();
    await expect
      .soft(await page.getByRole('textbox', { name: 'Type to Select Countries' }))
      .toHaveValue('Bulgaria');
  });
  // Select Option 2 from dropdown and verify it
  await test.step('Select dropdown', async () => {
    await page.locator('#dropdown-class-example').selectOption('Option2');
    await expect.soft(page.locator('#dropdown-class-example')).toHaveValue('option2');
  });
  //Select and verify checkbox
  await test.step('Select checkbox', async () => {
    await page.locator('#checkBoxOption3').check();
    await expect.soft(page.locator('#checkBoxOption3')).toBeChecked();
  });
  //Hide and check if button is visible
  await test.step('Hide button', async () => {
    await page.locator('#hide-textbox').click();
    await expect.soft(page.locator('#displayed-text')).not.toBeVisible();
  });
  //Hover mouse over link and check if visible
  await test.step('Hover mouse', async () => {
    await page.locator('#mousehover').hover();
    await expect.soft(page.getByRole('link', { name: 'Top', exact: true })).toBeVisible();
  });
});

test.describe('Playwright Practice Navigation', { tag: '@suite' }, () => {
  test('Navigate page', async ({ page }) => {
    await test.step('Navigate and very page', async () => {
      await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
      await expect(page).toHaveTitle('Automation Testing Practice: PlaywrightPractice');
    });
  });
});

test.describe('Playwright Practice group 1', { tag: '@suite' }, () => {
  test('Get link with playwright locator', async ({ page }) => {
    await test.step('Navigation with playwright locator', async () => {
      await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
      await page.getByRole('link', { name: 'Home', exact: true }).first(); //maybe not the best way to locate it. :(
      await expect(page).toHaveURL(
        'https://testautomationpractice.blogspot.com/p/playwrightpractice.html',
      );
    });
  });
});

test.describe('Playwright Practice group 2', { tag: '@suite' }, () => {
  test('Check text color', async ({ page }) => {
    await test.step('Pick paragraph with playwright locator', async () => {
      await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
      await expect(page.getByText('colored text')).toHaveCSS('color', 'rgb(255, 0, 0)');
    });
  });
});

test.describe('Playwright Practice group 3', { tag: '@suite' }, () => {
  test('click radio button', async ({ page }) => {
    await test.step('Pick label and click radio button with playwright locator', async () => {
      await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
      await page.getByLabel(' Standard').click();
      await expect(page.getByLabel('Standard')).toBeChecked();
    });
  });
});

test.describe('Playwright Practice group 4', { tag: '@suite' }, () => {
  test('fill placeholder', async ({ page }) => {
    await test.step('Pick by placeholder and fill text with playwright locator', async () => {
      await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
      await expect(page.getByPlaceholder('Enter your full name')).toBeEditable();
      await page.getByPlaceholder('Enter your full name').fill('The field is editable');
    });
  });
});

test.describe('Playwright Practice group 5', { tag: '@suite' }, () => {
  test('Assert image is visible', async ({ page }) => {
    await test.step('Pick by AltText and assert image is visible with playwright locator', async () => {
      await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
      await expect(page.getByAltText('logo image')).toBeVisible();
    });
  });
});

test.describe('Playwright Practice group 6', { tag: '@suite' }, () => {
  test('Check title', async ({ page }) => {
    await test.step('Pick by Tittle and check tittle with playwright locator', async () => {
      await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
      await expect(page).toHaveTitle('Automation Testing Practice: PlaywrightPractice');
    });
  });
});

test.describe('Playwright Practice group 7', { tag: '@suite' }, () => {
  test('Check if string contains text', async ({ page }) => {
    await test.step('Pick by testID and assert element contains text with playwright locator', async () => {
      await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
      await expect(page.getByTestId('edit-profile-btn')).toContainText('Profile');
    });
  });
});
