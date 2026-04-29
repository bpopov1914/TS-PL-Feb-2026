import { test, expect } from '@playwright/test';
// use the code gen tool in VScode Testing tab to generate the following scenario:

// go to https://pragmatic.bg/
// hover on "Курсове"
// click on "Автоматизирано Тестване с Playwright и TypeScript"
// click the title of lecture 11 (its a link)

// afterwords you will have a new file in project/tests folder. 
// Move it to your homework folder and rename the file and scenario inside to something meaningfull
// you can execute the new scenario "*.spec.ts" file by scenario name with this command: `npx playwright test -g "Scenario Name"` by changing "Scenario Name" to your scenario's name

// bonus: you can add some assertions to check page titles after each navigation (see lecture 11 example of this assertion)

// Good luck and happy hacking!


test('example visit and assertion', async({page}) => {
    await page.goto('https://pragmatic.bg/');
    await page.getByText('Курсове');
    await page.getByRole('link', {name: 'Автоматизирано Тестване с Playwright и TypeScript'}).click();
    await expect(page).toHaveTitle(/Автоматизирано Тестване с Playwright и TypeScript/);
    await expect(page).toHaveURL(/automated-testing-with-typescript-and-playwright-course/);
})