import { test, expect } from '@playwright/test';
import LoginPage from '@tests/pages/Login.page';
import LandingPage from '@tests/pages/Landing.page';

/* 
  Page Object Model Example improved with hooks:
*/

let loginPage: LoginPage;
let landingPage: LandingPage;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page, page.context());
  landingPage = new LandingPage(page, page.context());
});

test.afterEach(async ({ page }) => {
  await page.close();
});

test.describe('PoM with Hooks', { tag: ['@suite', '@smoke', '@regression'] }, () => {
  test.use({ baseURL: 'https://st2016.inv.bg' });

  test('Navigate to New Invoice Page', { tag: '@invoice' }, async ({ page }) => {
    await test.step('Navigate to Site', async () => {
      await page.goto('/');
      await expect(page).toHaveTitle(loginPage.TITLE);
    });

    await test.step('Login', async () => {
      await loginPage.EMAIL_INPUT.fill('karamfilovs@gmail.com');
      await loginPage.PASSWORD_INPUT.fill('111111');
      await loginPage.LOGIN_BUTTON.click();
      await expect(page).toHaveTitle(landingPage.TITLE);
    });

    await test.step('Navigate New Invoice Page', async () => {
      await page.getByRole('link', { name: 'Нова Фактура', exact: true }).click();
      await expect(page).toHaveTitle('Нова фактура - QA Ground');
    });
  });

  test('Navigate to Clients Page', { tag: '@clients' }, async ({ page }) => {
    await test.step('Navigate to Site', async () => {
      await page.goto('/');
      await expect(page).toHaveTitle(loginPage.TITLE);
    });

    await test.step('Login', async () => {
      await loginPage.EMAIL_INPUT.fill('karamfilovs@gmail.com');
      await loginPage.PASSWORD_INPUT.fill('111111');
      await loginPage.LOGIN_BUTTON.click();
      await expect(page).toHaveTitle(landingPage.TITLE);
    });

    await test.step('Navigate to Clients Page', async () => {
      await page.getByRole('link', { name: 'Клиенти', exact: true }).click();
      await expect(page).toHaveTitle('Клиенти - QA Ground');
    });
  });

  test('Navigate to Articles Page', { tag: '@articles' }, async ({ page }) => {
    await test.step('Navigate to Site', async () => {
      await page.goto('/');
      await expect(page).toHaveTitle(loginPage.TITLE);
    });

    await test.step('Login', async () => {
      await loginPage.EMAIL_INPUT.fill('karamfilovs@gmail.com');
      await loginPage.PASSWORD_INPUT.fill('111111');
      await loginPage.LOGIN_BUTTON.click();
      await expect(page).toHaveTitle(landingPage.TITLE);
    });

    await test.step('Navigate to Articles Page', async () => {
      await page.getByRole('link', { name: 'Артикули', exact: true }).click();
      await expect(page).toHaveTitle('Управление на артикули - QA Ground');
    });
  });
});
