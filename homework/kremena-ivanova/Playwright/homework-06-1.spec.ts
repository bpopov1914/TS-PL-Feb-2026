//npx playwright test homework-06-1.spec.ts --reporter=html

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

import { Page, Locator, test, expect } from '@playwright/test';

const baseURL = 'https://rahulshettyacademy.com/AutomationPractice/';

//AUTOMATIONPRACTICE PAGE

class AutomPracticePage {
  readonly page: Page;
  readonly titleHomepage: Locator;
  readonly radiobutton2: Locator;
  readonly inputCountries: Locator;
  readonly countryOptBg: Locator;
  readonly dropdownOptions: Locator;
  readonly checkbox3: Locator;
  readonly buttonHide: Locator;
  readonly inputHideShowExample: Locator;
  readonly buttonMousehover: Locator;
  readonly hoverDropdownOptionTop: Locator;

  constructor(page: Page) {
    this.page = page;
    this.titleHomepage = page.locator('//h1[normalize-space()="Practice Page"]');
    this.radiobutton2 = page.locator('//input[@value="radio2"]');
    this.inputCountries = page.locator('input#autocomplete');
    this.countryOptBg = page.locator('//div[@class="ui-menu-item-wrapper" and text()="Bulgaria"]');
    this.dropdownOptions = page.locator('select[id="dropdown-class-example"]');
    this.checkbox3 = page.locator('input#checkBoxOption3');
    this.buttonHide = page.locator('input#hide-textbox');
    this.inputHideShowExample = page.locator('//input[placeholder="Hide/Show Example"]');
    this.buttonMousehover = page.locator('//button[@id="mousehover"]');
    this.hoverDropdownOptionTop = page.locator('//a[text()="Top"]');
  }
}

test.describe(
  'HW-6 Task-1: Test the Page: AutomationPractice Page',
  { tag: ['@XPath-locators', '@CSS-locators'] },
  () => {
    test(
      'Check basic functionality on Page',
      { tag: ['@basic-assertions', '@positive-scenarios'] },
      async ({ page }) => {
        const automationPage = new AutomPracticePage(page);
        await test.step('Navigate to Site', async () => {
          await page.goto(baseURL);
          await expect(automationPage.titleHomepage).toBeVisible();
        });

        await test.step('check radio button #2', async () => {
          await automationPage.radiobutton2.check();
          await expect
            .soft(automationPage.radiobutton2, 'Radio button #2 should be checked')
            .toBeChecked();
        });

        await test.step('fill the input with "Bulgaria"', async () => {
          await automationPage.inputCountries.fill('Bul');
          await expect
            .soft(automationPage.countryOptBg, 'Autocomplete option "Bulgaria" should be visible')
            .toBeVisible();
          await automationPage.countryOptBg.click();
          await expect
            .soft(automationPage.inputCountries, 'Input should be filled with "Bulgaria"')
            .toHaveValue('Bulgaria');
        });

        await test.step('select option #2 from the dropdown', async () => {
          await automationPage.dropdownOptions.selectOption('option2');
          await expect
            .soft(automationPage.dropdownOptions, 'option2 should be selected')
            .toHaveValue('option2');
        });

        await test.step('check checkbox #3', async () => {
          await automationPage.checkbox3.check();
          await expect
            .soft(automationPage.checkbox3, 'checkbox option3 should be checked')
            .toBeChecked();
        });

        await test.step('Verify the "Hide" button', async () => {
          await automationPage.buttonHide.click();
          await expect
            .soft(
              automationPage.inputHideShowExample,
              'input "example" should be hidden after clicking "Hide" button',
            )
            .not.toBeVisible();
        });

        await test.step('hover over the "Mouse Hover" element shows "Top" option', async () => {
          await automationPage.buttonMousehover.hover();
          await expect
            .soft(automationPage.hoverDropdownOptionTop, '"Top" link should be visible after hover')
            .toBeVisible();
        });
      },
    );
  },
);
