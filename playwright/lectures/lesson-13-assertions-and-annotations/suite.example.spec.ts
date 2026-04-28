import { test, expect } from '@playwright/test';

test.describe('Test Suite #1', { tag: ['@suite', '@smoke', '@regression'] }, () => {
  test.use({ baseURL: 'https://st2016.inv.bg' });

  test('Navigate to New Invoice Page', { tag: '@invoice' }, async ({ page }) => {
    await test.step('Navigate to Site', async () => {
      await page.goto('/');
      await expect(page).toHaveTitle('Вход - QA Ground');
    });

    await test.step('Login', async () => {
      await page.locator('#loginusername').fill('karamfilovs@gmail.com');
      await page.locator('#loginpassword').fill('111111');
      await page.locator('#loginsubmit').click();
      await expect(page).toHaveTitle('Система за фактуриране - QA Ground');
    });

    await test.step('Navigate New Invoice Page', async () => {
      await page.getByRole('link', { name: 'Нова Фактура', exact: true }).click();
      await expect(page).toHaveTitle('Нова фактура - QA sdasdasdGround');
    });
  });

  test('Navigate to Clients Page', { tag: '@clients' }, async ({ page }) => {
    await test.step('Navigate to Site', async () => {
      await page.goto('/');
      await expect(page).toHaveTitle('Вход - QA Ground');
    });

    await test.step('Login', async () => {
      await page.locator('#loginusername').fill('karamfilovs@gmail.com');
      await page.locator('#loginpassword').fill('111111');
      await page.locator('#loginsubmit').click();
      await expect(page).toHaveTitle('Система за фактуриране - QA Ground');
    });

    await test.step('Navigate New Invoice Page', async () => {
      await page.getByRole('link', { name: 'Клиенти', exact: true }).click();
      await expect(page).toHaveTitle('Клиенти - QA Ground');
    });
  });

  test('Navigate to Articles Page', { tag: '@articles' }, async ({ page }) => {
    await test.step('Navigate to Site', async () => {
      await page.goto('/');
      await expect(page).toHaveTitle('Вход - QA Ground');
    });

    await test.step('Login', async () => {
      await page.locator('#loginusername').fill('karamfilovs@gmail.com');
      await page.locator('#loginpassword').fill('111111');
      await page.locator('#loginsubmit').click();
      await expect(page).toHaveTitle('Система за фактуриране - QA Ground');
    });

    await test.step('Navigate New Invoice Page', async () => {
      await page.getByRole('link', { name: 'Артикули', exact: true }).click();
      await expect(page).toHaveTitle('Управление на артикули - QA Ground');
    });
  });
});
