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

import { test, expect } from '@playwright/test';

test.describe('Playwright Practice Scenarios with TypeScript', () => {

    test('Scenario 1: Using CSS and XPath Selectors', async ({ page }) => {
        
        await test.step('Navigate to practice page', async () => {
            await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
            await expect(page).toHaveURL(/AutomationPractice/);
        });

        await test.step('Interact with Radio Button #2', async () => {
            const radio2 = page.locator('input[value="radio2"]');
            await radio2.check();
            await expect.soft(radio2, 'Radio button #2 should be checked after interaction').toBeChecked();
        });

        await test.step('Auto-complete suggestion for Bulgaria', async () => {
            const autoCompleteInput = page.locator('#autocomplete');
            await autoCompleteInput.fill('Bulgaria');
            await page.locator('.ui-menu-item').first().click();
            await expect.soft(autoCompleteInput, 'Input value should be "Bulgaria" after selecting auto-complete suggestion').toHaveValue('Bulgaria');
        });

        await test.step('Select option #2 from dropdown', async () => {
            const dropdown = page.locator('#dropdown-class-example');
            await dropdown.selectOption('option2');
            await expect.soft(dropdown, 'Selected option should be "option2"').toHaveValue('option2');
        });

        await test.step('Check checkbox #3', async () => {
            const checkbox3 = page.locator('#checkBoxOption3');
            await checkbox3.check();
            await expect.soft(checkbox3, 'Checkbox #3 should be checked after interaction').toBeChecked();
        });

        await test.step('Hide input element and verify', async () => {
            await page.locator('#hide-textbox').click();
            await expect.soft(page.locator('#displayed-text'), 'Input element should be hidden after clicking "Hide" button').toBeHidden();
        });

        await test.step('Hover over "Mouse Hover" and verify "Top" link visibility', async () => {
            await page.locator('#mousehover').hover();
            const topLink = page.locator('a[href="#top"]');
            await expect.soft(topLink, 'Top link should be visible after hovering over "Mouse Hover" element').toBeVisible();
        });
   
    });
});
    

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

test('Scenario 2: Using Playwright Role-based and User-centric Locators', async ({ page }) => {
        
        await test.step('Navigate to Playwright Practice page', async () => {
            await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
            await expect(page).toHaveURL(/playwrightpractice/);
        });


        await test.step('Navigate using getByRole() locator', async () => {
            await page.locator('#role-locators').getByRole('link', { name: 'Home' }).click();
            await expect.soft(page).toHaveURL('https://testautomationpractice.blogspot.com/p/playwrightpractice.html#');
        });

        await test.step('Assert colored text using getByText() locator', async () => {
            const coloredParagraph = page.getByText('colored text');
            await expect.soft(coloredParagraph, 'The paragraph should have red color').toHaveCSS('color', 'rgb(255, 0, 0)');  
        });

        await test.step('Interact with radio button using getByLabel() locator', async () => {
            const radioButton = page.getByLabel(' Standard');
            await radioButton.click();
            await expect.soft(radioButton, 'The radio button should be checked after interaction').toBeChecked();
        });

        await test.step('Fill input using getByPlaceholder() locator', async () => {
            const inputField = page.getByPlaceholder('Enter your full name');
            await inputField.fill('JB Daneva');
            await expect.soft(inputField, 'The input field should be editable and contain the filled text').toHaveValue('JB Daneva');
        });

        await test.step('Assert image visibility using getByAltText() locator', async () => {
            const image = page.getByAltText('logo image');
            await expect.soft(image, 'The image with alt text "logo image" should be visible on the page').toBeVisible();
        });

        await test.step('Assert element text using getByTitle() locator', async () => {
            const elementWithTitle = page.getByTitle('Tooltip text');
            await expect.soft(elementWithTitle, 'Tooltip text').toHaveText('This text has a tooltip');
        });

        await test.step('Assert element text using getByTestId() locator', async () => {
            const elementWithTestId = page.getByTestId('edit-profile-btn');
            await expect.soft(elementWithTestId, 'Element with test id "edit-profile-btn" should contain part of its text').toContainText('Edit');
        });

    });

