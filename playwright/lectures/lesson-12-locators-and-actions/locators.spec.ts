import { test } from '@playwright/test';

// documentation: https://playwright.dev/docs/locators
// best practices: https://playwright.dev/docs/best-practices#best-practices

test('Locator Examples', async ({ page }) => {
  await page.goto('https://st2016.inv.bg/login');

  /*
    Locators (Xpath or CSS)
    All locators in Playwright by default work with elements in the Shadow DOM. The exceptions are: Locating by XPath does not pierce shadow roots. Closed-mode shadow roots are not supported.
  */

  // find by ID
  await page.locator("//*[@id='loginusername']").fill('username'); // Xpath
  await page.locator('#loginusername').fill('username'); // CSS

  // find by Attribute - Name
  await page.locator("//*[@name='password']").fill('password'); // Xpath
  await page.locator('[name=password]').fill('password'); // CSS

  // find by Attribute - Tabindex
  await page.locator("//*[@tabindex='3']").click(); // Xpath
  await page.locator("[tabindex='3']").click(); // CSS

  // find by Class
  await page.locator('.selenium-forgotten-page').hover(); // CSS
  await page.locator("//*[contains(@class, 'selenium-forgotten-page')]").hover();

  // find by Text
  await page.locator('//*[contains(text(), "Забравена парола?")]').hover(); // XPath
  await page.locator('text="Забравена парола?"').hover(); // CSS

  /*
    Playwright Build-in Locators
  */

  // find by Role
  await page.getByRole('button', { name: 'Вход' }).click();
  await page.getByRole('checkbox', { name: 'запомни входа от това устройство' }).click();

  // find by Label
  await page.getByLabel('Search Wikipedia').fill('Knowledge');

  // find by Placeholder
  await page.getByPlaceholder('Search IMDb').fill('Avatar');

  // find by Text
  await page.getByText('Забравена парола?').hover(); // find any element which contains this text
  await page.getByText('Забравена парола?', { exact: true }).hover(); // find element with this exact text

  // find by Alt Text
  await page.getByAltText('Get Certified Offer').click();

  // find by Title
  await page.getByTitle('English — Wikipedia — The Free Encyclopedia').click();

  // find by Test Id
  await page.getByTestId('edit-profile-btn').click();

  /*
    Working with Multiple Locators:
   */

  // Filter Example:
  await page.locator("//*[contains(@class, 'selenium')]").filter({ hasText: 'Български' }).click();

  // Chain locator (locator combination):
  await page
    .locator("//*[contains(@class, 'selenium')]")
    .getByRole('button', { name: 'Вход' })
    .click();

  // counts all elements found by locator
  console.log(await page.locator('//*[contains(@class, "selenium")]').count());

  // find all elements: ignores unique constrain and returns a list of found elements:
  console.log((await page.locator('//*[contains(@class, "selenium")]').all()).toString());

  // use as last resort
  // find first element
  await page.locator("//*[contains(@class, 'selenium')]").first().click();
  // find last elemnt
  await page.locator("//*[contains(@class, 'selenium')]").last().click();
  // find nth element (3rd element)
  await page.locator("//*[contains(@class, 'selenium')]").nth(2).click();
});
