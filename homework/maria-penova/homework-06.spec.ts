// create the below 2 test scenarios and put them in a test suite
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
import { test, expect } from '@playwright/test';

test.describe('Homework 6 - Locators and Test Steps', () => {
    test('Scenario 1: Using CSS and XPATH selectors', async ({ page }) => {
        
        await test.step('Navigate to Rahul Shetty Academy', async () => {
            await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
            await expect(page).toHaveURL(/AutomationPractice/);
        });

        await test.step('Interact with Radio Buttons', async () => {
            const radio2 = page.locator('input[value="radio2"]');
            await radio2.check();
            await expect.soft(radio2, 'Radio button #2 should be checked').toBeChecked();
        });

        await test.step('Autocomplete suggestions', async () => {
            const countryInput = page.locator('#autocomplete');
            await countryInput.fill('Bulgaria');
            await page.locator('.ui-menu-item div').first().click();
            await expect.soft(countryInput, 'Input value should be Bulgaria').toHaveValue('Bulgaria');
        });

        await test.step('Dropdown and Checkbox', async () => {
            const dropdown = page.locator('#dropdown-class-example');
            await dropdown.selectOption('option2');
            await expect.soft(dropdown, 'Option 2 should be selected').toHaveValue('option2');

            const checkbox3 = page.locator('#checkBoxOption3');
            await checkbox3.check();
            await expect.soft(checkbox3, 'Checkbox #3 should be checked').toBeChecked();
        });

        await test.step('Visibility and Hover', async () => {
            await page.locator('#hide-textbox').click();
            await expect.soft(page.locator('#displayed-text'), 'Input should be hidden').toBeHidden();

            // Hover
            await page.locator('#mousehover').hover();
            const topLink = page.locator('a[href="#top"]');
            await expect.soft(topLink, 'Top link should be visible after hover').toBeVisible();
        });
    });

// second test scenario use only Playwright selectors like page.getByRole('button', { name: 'Вход' }).click();

// navigate to https://testautomationpractice.blogspot.com/p/playwrightpractice.html
// assert succesful naviation

// In Playwright Practice session group 1. getByRole() Locators pick a locator from section Navigation and click on it.
// assert navigation has taken place

// In Playwright Practice session group 2. getByText() Locators pick one of the paragraphs with colored text and assert its color

// In Playwright Practice session group 3. getByLabel() Locators Locators check the unchecked radio button
// assert is is checked now

// In Playwright Practice session group 4. getByPlaceholder() Locators pick an input fill and assert it is editable
// fill the input filed with text

// In Playwright Practice session group 5.getByAltText() Locators assert the image is visible

// In Playwright Practice session group 6. getByTitle() Locators assert one of the elements' full text

// In Playwright Practice session group 7. getByTestId() Locators assert one of the element contains part of its text

test('Scenario 2: Using Playwright getBy* locators', async ({ page }) => {
        
        await test.step('Navigate to Test Automation Practice', async () => {
            await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
            await expect(page).toHaveTitle(/PlaywrightPractice/);
        });

        await test.step('Group 1: getByRole navigation', async () => {
            await page.getByRole('link', { name: 'Home' }).first().click();
            await expect(page).toHaveURL(/testautomationpractice/);
            await page.goBack(); 
            await page.waitForLoadState('networkidle');        });

     await test.step('Group 2: getByText color assertion', async () => {
             const coloredParagraph = page.getByText('colored text');
             await expect(coloredParagraph).toBeVisible();
             await expect.soft(coloredParagraph).toHaveCSS('color', 'rgb(255, 0, 0)');
        });

        await test.step('Group 3: getByLabel radio button', async () => {
            const radio = page.getByLabel('Standard', { exact: true });
            await radio.check();
            await expect.soft(radio, 'Standard radio should be checked').toBeChecked();
        });

        await test.step('Group 4: getByPlaceholder input field', async () => {
            const input = page.getByPlaceholder('Enter your full name');
            await expect.soft(input, 'Field should be editable').toBeEditable();
            await input.fill('Maria Penova');
        });

        await test.step('Group 5: getByAltText image visibility', async () => {
            const image = page.getByAltText(/logo image/);
            await expect.soft(image, 'Main image should be visible').toBeVisible();
        });

        await test.step('Group 6: getByTitle full text assertion', async () => {
            const homeIcon = page.getByTitle('Home');
            await expect.soft(homeIcon).toBeVisible();
        });

        await test.step('Group 7: getByTestId() Locators', async () => {
        const userName = page.getByTestId('profile-name');
        await expect.soft(userName).toContainText('John');
        const productB = page.getByTestId('product-name').nth(1);
        await expect.soft(productB).toContainText('Product B');
        });
    });
});