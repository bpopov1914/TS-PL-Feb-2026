import { test, expect } from '@playwright/test';

//Homework task with generated test code plus assertions for different headings
test('Navigation to Lecture 11', async ({ page }) => {
  await page.goto('https://pragmatic.bg/');
  await page.getByRole('link', { name: 'Курсове', exact: true }).hover();
  await page
    .locator('#menu-item-9220')
    .getByRole('link', { name: 'Автоматизирано Тестване с' })
    .click();

  await expect(page.getByRole('heading', { name: 'Автоматизирано Тестване с' })).toBeVisible();
  await page.getByRole('link', { name: 'Въведение в Playwright' }).click();
  await expect(page.getByRole('heading', { name: 'Въведение в Playwright' })).toBeVisible();
});
