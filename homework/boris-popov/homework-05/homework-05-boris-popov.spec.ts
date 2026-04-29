import { test, expect } from '@playwright/test';

test('Lecture 11 link can be opened', async ({ page }) => {
  // go to https://pragmatic.bg/
  await page.goto('https://pragmatic.bg/');
  //assert page is loaded by verifying the title
  await expect(page).toHaveTitle(
    'Pragmatic LLC – Курсове по Програмиране, C#, QA(Тестване), ASP.NET, Java, PHP, Бази Данни',
  );
  //Hover over "Курсове")
  await page.locator('text="Курсове"').hover();
  //click on "Автоматизирано Тестване с Playwright и TypeScript"
  await page.locator('//li[@id="menu-item-9220"]').click();
  //assert page is loaded by verifying the alt text of the course image
  await expect(
    page.getByAltText('Автоматизирано Тестване с Playwright и TypeScript'),
  ).toBeVisible();
  //click the title of lecture 11
  await page.getByTitle('Въведение в Playwright').click();
  //assert page is loaded by verifying the title
  await expect(page.locator('//h2[contains(., "Въведение в Playwright ")]')).toBeVisible();
});
