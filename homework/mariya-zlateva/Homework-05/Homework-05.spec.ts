import { test, expect } from '@playwright/test';

test('Homework 5', async ({ page }) => {
  await page.goto('https://pragmatic.bg/');
  await expect(page).toHaveTitle(/Pragmatic LLC/);

  await page.getByRole('link', { name: 'Курсове' }).hover();

  await page
    .locator('#menu-item-9220')
    .getByRole('link', { name: 'Автоматизирано Тестване с' })
    .click();

  await expect(page).toHaveTitle(/Playwright/);

  await page.getByRole('link', { name: 'Въведение в Playwright' }).click();
  await expect(page).toHaveTitle(/Въведение в Playwright/);
});
