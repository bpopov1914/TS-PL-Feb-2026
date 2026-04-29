import { test, expect } from '@playwright/test';
import PageFactory from '@tests/pages/Page.factory';

/* 
  Page Object Model Example improved with Page Factory:
*/

let pageFactory: PageFactory;

test.beforeEach(async ({ page }) => {
  pageFactory = new PageFactory(page, page.context());
});

test.describe('PoM with Page Factory', { tag: ['@suite', '@smoke', '@regression'] }, () => {
  test.use({ baseURL: 'https://st2016.inv.bg' });

  test('Navigate to New Invoice Page', { tag: '@invoice' }, async ({ page }) => {
    await test.step('Navigate to Site', async () => {
      await page.goto('/');
      await expect(page).toHaveTitle(pageFactory.loginPage.TITLE);
    });

    await test.step('Login', async () => {
      await pageFactory.loginPage.EMAIL_INPUT.fill('karamfilovs@gmail.com');
      await pageFactory.loginPage.PASSWORD_INPUT.fill('111111');
      await pageFactory.loginPage.LOGIN_BUTTON.click();
      await expect(page).toHaveTitle(pageFactory.landingPage.TITLE);
    });

    await test.step('Navigate New Invoice Page', async () => {
      await page.getByRole('link', { name: 'Нова Фактура', exact: true }).click();
      await expect(page).toHaveTitle('Нова фактура - QA Ground');
    });
  });

  test('Navigate to Clients Page', { tag: '@clients' }, async ({ page }) => {
    await test.step('Navigate to Site', async () => {
      await page.goto('/');
      await expect(page).toHaveTitle(pageFactory.loginPage.TITLE);
    });

    await test.step('Login', async () => {
      await pageFactory.loginPage.EMAIL_INPUT.fill('karamfilovs@gmail.com');
      await pageFactory.loginPage.PASSWORD_INPUT.fill('111111');
      await pageFactory.loginPage.LOGIN_BUTTON.click();
      await expect(page).toHaveTitle(pageFactory.landingPage.TITLE);
    });

    await test.step('Navigate to Clients Page', async () => {
      await page.getByRole('link', { name: 'Клиенти', exact: true }).click();
      await expect(page).toHaveTitle('Клиенти - QA Ground');
    });
  });

  test('Navigate to Articles Page', { tag: '@articles' }, async ({ page }) => {
    await test.step('Navigate to Site', async () => {
      await page.goto('/');
      await expect(page).toHaveTitle(pageFactory.loginPage.TITLE);
    });

    await test.step('Login', async () => {
      await pageFactory.loginPage.EMAIL_INPUT.fill('karamfilovs@gmail.com');
      await pageFactory.loginPage.PASSWORD_INPUT.fill('111111');
      await pageFactory.loginPage.LOGIN_BUTTON.click();
      await expect(page).toHaveTitle(pageFactory.landingPage.TITLE);
    });

    await test.step('Navigate to Articles Page', async () => {
      await page.getByRole('link', { name: 'Артикули', exact: true }).click();
      await expect(page).toHaveTitle('Управление на артикули - QA Ground');
    });
  });
});
