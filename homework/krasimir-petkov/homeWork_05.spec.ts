import {test, expect} from '@playwright/test';


// use the code gen tool in VScode Testing tab to generate the following scenario:

test('First exercise - Navigate to Pragmatic', async ({page}) => {
// go to https://pragmatic.bg/
await page.goto('https://pragmatic.bg/');
await expect(page).toHaveTitle(`Pragmatic LLC – Курсове по Програмиране, C#, QA(Тестване), ASP.NET, Java, PHP, Бази Данни`);
await page.getByRole('link', { name: 'Курсове' }).hover();
// click on "Автоматизирано Тестване с Playwright и TypeScript"
await page.locator('#menu-item-9220').click();
await expect(page).toHaveTitle(`Автоматизирано Тестване с Playwright и TypeScript – Pragmatic LLC`);
// click the title of lecture 11 (its a link)
await page.getByRole('link', { name: 'Въведение в Playwright' }).click();
await expect(page).toHaveTitle(`Въведение в Playwright – Pragmatic LLC`);

// afterwords you will have a new file in project/tests folder. 
// Move it to your homework folder and rename the file and scenario inside to something meaningfull
// you can execute the new scenario "*.spec.ts" file by scenario name with this command: `npx playwright test -g "Scenario Name"` by changing "Scenario Name" to your scenario's name

// bonus: you can add some assertions to check page titles after each navigation (see lecture 11 example of this assertion)

// Good luck and happy hacking!

});

