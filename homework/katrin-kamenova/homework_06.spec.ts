import { test, expect } from '@playwright/test';

test('Usage of CSS and XPATH selectors', async ({ page }) => {
  await test.step('Navigate to Rahul Shetty Academy', async () => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await expect(page).toHaveURL('https://rahulshettyacademy.com/AutomationPractice/'); // assert that navigation to the page was successful
  });

  await test.step('Check radio button #2', async () => {
    await page.locator("(//input[@value='radio2'])[1]").click(); // check radio button #2
    await expect(page.locator("(//input[@value='radio2'])[1]")).toBeChecked(); // assert Radio button #2 is checked
  });

  await test.step('Autocomplete check', async () => {
    await page.locator('#autocomplete').fill('Bulgaria'); // fill the input with "Bulgaria"
    await page.locator('.ui-menu-item-wrapper').first().click(); // click on the first auto complete suggestion
    await expect(page.locator('#autocomplete')).toHaveValue('Bulgaria'); // Verify the input value is "Bulgaria"
  });

  await test.step('Drop-down and option selection', async () => {
    await page.locator('#dropdown-class-example').selectOption('option2'); // select option #2 from the dropdown
    await expect(page.locator('#dropdown-class-example')).toHaveValue('option2'); // Verify the selected option is "option2"
  });

  await test.step('Checkbox #3 check', async () => {
    await page.locator('#checkBoxOption3').check(); // check checkbox #3
    await expect(page.locator('#checkBoxOption3')).toBeChecked(); // Verify checkbox #3 is checked
  });

  await test.step('Hide and show input field', async () => {
    await page.locator('#hide-textbox').click(); // click on the "Hide" button
    await expect(page.locator('#displayed-text')).toBeHidden(); // Verify the input element is now hidden
    await page.locator('#show-textbox').click(); // click on the "Show" button
    await expect(page.locator('#displayed-text')).toBeVisible(); // Verify the input element is now visible again
  });

  await test.step('Mouse Over verification', async () => {
    await page.locator('#mousehover').hover(); // hover over the "Mouse Hover" element
    await expect(page.locator("a:has-text('Top')")).toBeVisible(); // Verify the "Top" link is now visible
  });
});

test('Scenario with Playwright locators', async ({ page }) => {
  await test.step('Navigate to Playwright Practice', async () => {
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
    await expect(page.getByRole('link', { name: 'Automation Testing Practice' })).toBeVisible(); // assert succesful navigation
  });

  await test.step('URL change verification', async () => {
    await page.locator('#role-locators').getByRole('link', { name: 'Products' }).click(); // click on the 'Products' link
    await expect(page).toHaveURL(
      'https://testautomationpractice.blogspot.com/p/playwrightpractice.html#',
    ); // assert the url has changed
  });

  await test.step('Color of element verification', async () => {
    await page.getByText('colored text'); // locate the element with the colored text
    await expect(page.getByText('colored text')).toHaveCSS('color', 'rgb(255, 0, 0)'); // assert the color of the text is red
  });

  await test.step('Radio button 2 check', async () => {
    await page.getByLabel('Standard').check(); // click on the radio button with label "Radio2"
    await expect(page.getByLabel('Standard')).toBeChecked(); // assert the radio button with label "Radio2" is checked
  });

  await test.step('Get placeholder text - Search products field', async () => {
    await page.getByPlaceholder('Search products...').fill('Playwright'); // fill the input filed with text
    await expect(page.getByPlaceholder('Search products...')).toHaveValue('Playwright'); // assert the input field is editable and contains the text "Playwright"
  });

  await test.step('Playwright Image logo is visible', async () => {
    await page.getByAltText('logo image');
    await expect(page.getByAltText('logo image')).toBeVisible(); // assert the image with alt text "logo image" is visible
  });

  await test.step('Get title text ', async () => {
    await page.getByTitle('HyperText Markup Language').hover(); // hover over the element with title "HTML"
    await expect(page.getByTitle('HyperText Markup Language')).toHaveAttribute(
      'title',
      'HyperText Markup Language',
    ); // assert the element with title "HTML" has the correct title attribute
  });

  await test.step('Profile name has correct text', async () => {
    await page.getByTestId('profile-name');
    await expect(page.getByTestId('profile-name')).toHaveText('John Doe'); // assert the element with test ID "profile-name" has the text "John Doe"
  });
});
