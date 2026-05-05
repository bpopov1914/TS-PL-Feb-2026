import { test, expect } from '@playwright/test';

test.describe('Homework 06 test scenario 1', { tag: '@hw-6-1' }, () => {
  test('test: XPath and CSS', async ({ page }) => {
    await test.step('Navigate to Practice Page', async () => {
      await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
      await expect(page, "Verify Page title").toHaveTitle('Practice Page');
    });

    await test.step('Check radio button #2', async () => {
      await page.locator("//input[@value='radio2']").check();
      await expect(page.locator("//input[@value='radio2']"), "Verify radio button #2 is checked").toBeChecked();
    });

    await test.step('Fill autocomplete with text', async () => {
      await page.locator('#autocomplete').fill('Bulgaria');
      await page.locator('.ui-menu-item').first().click();
      await expect.soft(page.locator('#autocomplete'), "Verify the input value is 'Bulgaria'").toHaveValue('Bulgaria');
    });

    await test.step('Select option 2 from dropdown', async () => {
      await page.locator('#dropdown-class-example').selectOption('option2');
      await expect.soft(page.locator('#dropdown-class-example'), "Verify the selected option is 'option2'").toHaveValue('option2');
    });

    await test.step('Check checkbox #3', async () => {
      await page.locator('#checkBoxOption3').check();
      await expect.soft(page.locator('#checkBoxOption3'), "Verify checkbox #3 is checked").toBeChecked();
    });

    await test.step('Click on "Hide" button', async () => {
      await page.locator('#hide-textbox').click();
      await expect.soft(page.locator('#displayed-text'), "Verify the input element is now hidden").toBeHidden();
    });

    await test.step('Hover over "Mouse Hover" element', async () => {
      await page.locator('#mousehover').hover();
      await expect.soft(page.locator('.mouse-hover-content'), "Verify mouse hover content is visible").toBeVisible();
      await expect.soft(page.locator('.mouse-hover-content a:has-text("Top")'), "Verify top link is visible").toBeVisible();
    });
  });
});