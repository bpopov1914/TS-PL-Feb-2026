//npx playwright test homework-06-2.spec.ts --reporter=html

// create the below 2 test scenarios
// put all groups of actions into a test.step
// use soft assertions, unless we are assrting a navigation has taken place
// try to add meaningful comments to all assertions
// you can find test execution command examples in the Readme.md file in project's main folder
// you can add -ui mode debug your tests during execution
// after execution view html report with command: 'npx playwright show-report' (if any tests failed report will open automaticaly)
// a trace artifact will be added to the report if any test has failed, you can use as well to debug your tests

// second test scenario use only Playwright selectors like page.getByRole('button', { name: 'Вход' }).click();

// navigate to https://testautomationpractice.blogspot.com/p/playwrightpractice.html
// assert succesful naviation

// In Playwright Practice session group 1. getByRole() Locators pick a locator from section Navigation and click on it.
// assert navigation has taken place (url has changed)

// In Playwright Practice session group 2. getByText() Locators pick one of the paragraphs with colored text and assert is color

// In Playwright Practice session group 3. getByLabel() Locators Locators click the unchecked radio button
// assert is is checked now

// In Playwright Practice session group 4. getByPlaceholder() Locators pick an input fill and assert it is editable
// fill the input filed with text

// In Playwright Practice session group 5.getByAltText() Locators assert the image is visible

// In Playwright Practice session group 6. getByTitle() Locators assert one of the elements' full text

// In Playwright Practice session group 7. getByTestId() Locators assert one of the element contains part of its text

import { Page, Locator, test, expect } from '@playwright/test';

const baseURL = 'https://testautomationpractice.blogspot.com/p/playwrightpractice.html';

class AutomPracticePage {
  readonly page: Page;
  readonly titleHomepage: Locator;
  readonly titleTechStack: Locator;
  readonly linkProducts: Locator;
  readonly coloredText: Locator;
  readonly radiobuttonStandard: Locator;
  readonly inputYourMessage: Locator;
  readonly imgLogoPlaywright: Locator;
  readonly titleHTML: Locator;
  readonly userEmail: Locator;

  constructor(page: Page) {
    this.page = page;

    this.titleHomepage = page.getByRole('heading', {
      level: 1,
      name: 'Automation Testing Practice',
    }); //0
    this.titleTechStack = page.getByText('For Selenium, Cypress & Playwright', { exact: true }); //0
    this.linkProducts = page.getByRole('link', { name: 'Products' }).first(); //1
    this.coloredText = page.getByText('colored text', { exact: true }); //2
    this.radiobuttonStandard = page.getByLabel('Standard'); //3
    this.inputYourMessage = page.getByPlaceholder('Type your message here...'); //4
    this.imgLogoPlaywright = page.getByAltText('logo image'); //5
    this.titleHTML = page.getByTitle('HyperText Markup Language'); //6
    this.userEmail = page.getByTestId('profile-email'); //7
  }
}

test.describe(
  'HW-6 Task-2: Test the Page: Automation Testing Practice',
  { tag: '@Playwright-locators' },
  () => {
    test(
      'Check basic functionality on Page',
      { tag: ['@basic-assertions', '@positive-scenarios'] },
      async ({ page }) => {
        const automationPage = new AutomPracticePage(page);
        await test.step('Navigate to Site', async () => {
          await page.goto(baseURL);
          await expect(automationPage.titleHomepage).toBeVisible();
          await expect(automationPage.titleTechStack).toBeVisible();
        });

        await test.step('Group 1: Verify link "Products" redirects properly', async () => {
          await automationPage.linkProducts.click();
          await expect
            .soft(page, 'Should be redirected after clicking link "Products"')
            .toHaveURL(`${baseURL}#`);
        });

        await test.step('Group 2: Verify color of selected text', async () => {
          await expect
            .soft(automationPage.coloredText, 'The text should be colored as expected (red)')
            .toHaveCSS('color', 'rgb(255, 0, 0)');
        });

        await test.step('Group 3: Verify checking of radiobutton is working', async () => {
          await automationPage.radiobuttonStandard.click();
          await expect
            .soft(
              automationPage.radiobuttonStandard,
              'Radiobutton "Standard" should be checked after click',
            )
            .toBeChecked();
        });

        await test.step('Group 4: Enter text in an input field and veirify it is correctly stored', async () => {
          await expect
            .soft(automationPage.inputYourMessage, 'Input field should be editable')
            .toBeEditable();
          await automationPage.inputYourMessage.fill('La vita è bella');
          await expect
            .soft(automationPage.inputYourMessage, 'The entered text should be as expected')
            .toHaveValue('La vita è bella');
        });

        await test.step('Group 5: Verify image with logo is visible', async () => {
          await expect
            .soft(automationPage.imgLogoPlaywright, 'Playwright logo should be visible')
            .toBeVisible();
        });

        await test.step('Group 6: Verify element`s full text', async () => {
          await expect
            .soft(automationPage.titleHTML, 'Element should have the expected text')
            .toHaveText('HTML');
        });

        await test.step('Group 7: Verify element`s partial text', async () => {
          await expect
            .soft(automationPage.userEmail, 'Element should contain the expected partial text')
            .toContainText('john.doe');
        });
      },
    );
  },
);
