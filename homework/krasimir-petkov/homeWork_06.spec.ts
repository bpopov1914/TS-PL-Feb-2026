import { test, expect, Locator } from '@playwright/test';

// create the below 2 test scenarios
// put all groups of actions into a test.step
// use soft assertions, unless we are assrting a navigation has taken place
// try to add meaningful comments to all assertions
// you can find test execution command examples in the Readme.md file in project's main folder
// you can add -ui mode debug your tests during execution
// after execution view html report with command: 'npx playwright show-report' (if any tests failed report will open automaticaly)
// a trace artifact will be added to the report if any test has failed, you can use as well to debug your tests

// first test scenario use CSS and XPATH selectors like page.locator('location string'):
test.describe(
  'Homework-6 - Locator and Actions and assertions practise',
  { tag: '@K-HMW' },
  async () => {
    // navigate to https://rahulshettyacademy.com/AutomationPractice/
    // assert succesful naviation
    test('Scenario 1: xpath and CSS', { tag: ['@XPathK', '@CSSK'] }, async ({ page }) => {
      await test.step('Navigate to the site', async () => {
        await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
        const headerLocator: Locator = page.locator('//h1[contains(text(), "Practice Page")]');
        await expect(headerLocator, 'Verify page loaded successfully').toBeVisible();
      });

      await test.step('Check radio button #3', async () => {
        // check radio button #3
        // assert Radio button #3 is checked
        const radiotButton3: Locator = page.locator('//input[@value="radio3"]');
        await radiotButton3.check();
        await expect(radiotButton3, 'Verify that the button #3 is checked').toBeChecked();
      });

      await test.step('Fill the input field with Bulgaria and select the first auto complete suggestion', async () => {
        // fill the input with "Bulgaria"
        // click on the first auto complete suggestion
        // Verify the input value is "Bulgaria"
        const inputfiled: Locator = page.locator('//input[@id="autocomplete"]');
        await inputfiled.fill('Bulgaria');
        await page.locator('#ui-id-1').click();
        await expect(inputfiled, 'Verify that the input field is filled with Bulgaria').toHaveValue(
          'Bulgaria',
        );
      });
      await test.step('Select option #3 from the dropdwon menu and verify it is selected', async () => {
        // select option #3 from the dropdown
        // Verify the selected option is "option2"
        const dropDownMenu: Locator = page.locator('#dropdown-class-example');
        const option: string = 'option3';
        await dropDownMenu.selectOption(option);
        await expect(dropDownMenu, 'Verify that the option #3 is selected').toHaveValue(option);
      });
      await test.step('Check checkbox #4 and verify it is checked', async () => {
        // check checkbox #3
        // Verify checkbox #3 is checked
        const checkBox3: Locator = page.locator('#checkBoxOption3');
        await checkBox3.check();
        await expect(checkBox3, 'Verify that the checkbox #3 is checked').toBeChecked();
      });
      await test.step('Click the HIDE button and verify it is hidden ', async () => {
        // click on the "Hide" button
        // Verify the input element is now hidden
        const buttonVisibleInitially: Locator = page.locator('//input[@id="displayed-text"]');
        await expect(
          buttonVisibleInitially,
          'Verifu that the input element is vvisible initially',
        ).toBeVisible();
        const buttonHide: Locator = page.locator('#hide-textbox');
        await buttonHide.click();
        await expect(
          buttonVisibleInitially,
          'Verify that the input element is hidden',
        ).toBeHidden();
      });
      await test.step('Hover over the Mouse Hover elemen and verify tha the TOP and RELOAD link are visible', async () => {
        // hover over the "Mouse Hover" element
        // Verify the "Top" link is now visible
        const mouseHoverButtonElement: Locator = page.locator('#mousehover');
        await mouseHoverButtonElement.hover();

        const topLinkElement: Locator = page.locator('//a[text()="Top"]');
        const reloadLinkElement: Locator = page.locator('//a[text()="Reload"]');

        await expect(topLinkElement, 'Verify that the TOP link is visible').toBeVisible();
        await expect(reloadLinkElement, 'Verify that the RELOAD link is visible').toBeVisible();
      });
    });
    test('Scenrio 2 - Playwright locators', { tag: '@PlaywrightLocatorsK' }, async ({ page }) => {
      // second test scenario use only Playwright selectors like page.getByRole('button', { name: 'Вход' }).click();

      await test.step('Navigation to the site and verify page title', async () => {
        // navigate to https://testautomationpractice.blogspot.com/p/playwrightpractice.html
        // assert succesful naviation
        await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
        await expect(
          page.getByText('Automation Testing Practice'),
          'Verify that the page header is visible',
        ).toBeVisible();
        await expect(page, 'Verify page title').toHaveTitle(
          'Automation Testing Practice: PlaywrightPractice',
        );
      });
      await test.step('Click on the "Products" link and verify navigation', async () => {
        // In Playwright Practice session group 1. getByRole() Locators pick a locator from section Navigation and click on it.
        // assert navigation has taken place
        const productLink: Locator = await page
          .locator('#role-locators')
          .getByRole('link', { name: 'Products' });
        await productLink.click();
        await expect(page, 'Verify page url').toHaveURL(
          'https://testautomationpractice.blogspot.com/p/playwrightpractice.html#',
        );
      });
      await test.step('Assert color of paragraph with colored text', async () => {
        // In Playwright Practice session group 2. getByText() Locators pick one of the paragraphs with colored text and assert its color
        await expect(page.getByText('START', { exact: true })).toHaveCSS('color', 'rgb(0, 0, 0)');
        await expect(page.getByText('START', { exact: true })).toHaveCSS(
          'background-color',
          'rgb(154, 205, 50)',
        );
      });
      await test.step('Check radio button is unchecked/checked using getByLabel at Shipping Method section', async () => {
        // In Playwright Practice session group 3. getByLabel() Locators Locators check the unchecked radio button
        // assert is is checked now
        const radioButtonStandart:Locator = page.getByLabel('Standard');
        const radioButtonExpress:Locator = page.getByLabel('Express');
        await expect(radioButtonStandart,'Verify that the Standard radio button is unchecked').not.toBeChecked();
        await expect(radioButtonExpress,'Verify that the Express radio button is unchecked').not.toBeChecked();

        radioButtonStandart.check();
        await expect(radioButtonStandart,'Verify that the Standard radio button is checked').toBeChecked();

        radioButtonExpress.check();
        await expect(radioButtonExpress,'Verify that the Express radio button is checked').toBeChecked();
      });

      await test.step('', async () => {
        // In Playwright Practice session group 4. getByPlaceholder() Locators pick an input fill and assert it is editable
        // fill the input filed with text
        const inputField1EnterFullName: Locator = page.getByPlaceholder('Enter your full name');
        const inputField2PhoneNumber: Locator = page.getByPlaceholder('Phone number (xxx-xxx-xxxx)');
        const inputField3SearchProducts: Locator = page.getByPlaceholder('Search products...');

        await expect(inputField1EnterFullName,'Verify that the Enter your full name input field is editable').toBeEditable();
        await expect(inputField2PhoneNumber,'Verify that the Phone number input field is editable').toBeEditable();
        await expect(inputField3SearchProducts,'Verify that the Search products input field is editable').toBeEditable();

        await inputField1EnterFullName.fill('Krasimir Petkov');
        await inputField2PhoneNumber.fill('123-456-7890');
        await inputField3SearchProducts.fill('Laptop');

        await expect(inputField1EnterFullName,'Verify that the Enter your full name input field is filled with expected Text').toHaveValue('Krasimir Petkov');
        await expect(inputField2PhoneNumber,'Verify that the Phone number input field is filled with expected Text').toHaveValue('123-456-7890');
        await expect(inputField3SearchProducts,'Verify that the Search products input field is filled with expected Text').toHaveValue('Laptop');

      });
      await test.step('', async () => {
        // In Playwright Practice session group 5.getByAltText() Locators assert the image is visible
        const logoImage: Locator = page.getByAltText('logo image');
        await expect(logoImage,'Verify that the Playwright logo is visible').toBeVisible();
      });
      await test.step('', async () => {
        // In Playwright Practice session group 6. getByTitle() Locators assert one of the elements' full text
        const firstElementWithTitle: Locator = page.getByTitle('Home page link');
        const secondElementWithTitle: Locator = page.getByTitle('HyperText Markup Language');
        const thirdElementWithTitle: Locator = page.getByTitle('Tooltip text');
        
        await expect(firstElementWithTitle,'Verify that the element with title Home page link has expected text').toHaveText('Home');
        await expect(secondElementWithTitle,'Verify that the element with title HyperText Markup Language has expected text').toHaveText('HTML');
        await expect(thirdElementWithTitle,'Verify that the element with title Tooltip text has expected text').toHaveText('This text has a tooltip');
      });
      await test.step('', async () => {
        // In Playwright Practice session group 7. getByTestId() Locators assert one of the element contains part of its text
        const elementWithTestIdPriceProduct = page.getByTestId('product-card-2').getByTestId('product-price');
        await expect(elementWithTestIdPriceProduct,'Verify that the element with test id product-price contains expected text').toContainText('29.99');
      });
    });
  },
);
