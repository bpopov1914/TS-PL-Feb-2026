import { test, expect } from '@playwright/test';

[
  {
    scenario: 'empty username',
    username: '',
    password: '111111',
    errorMessage: 'Моля, попълнете вашия email',
  },
  {
    scenario: 'empty password',
    username: 'karamfilovs@gmail.com',
    password: '',
    errorMessage: 'Моля, попълнете вашата парола',
  },
  {
    scenario: 'wrong password',
    username: 'karamfilovs@gmail.com',
    password: '222222',
    errorMessage: 'Грешно потребителско име или парола. Моля, опитайте отново.',
  },
].forEach(({ scenario, username, password, errorMessage }) => {
  test(`Unsuccesful Login with ${scenario}`, { tag: '@data' }, async ({ page }) => {
    await test.step('Navigate to Site', async () => {
      await page.goto('https://st2016.inv.bg/');
      await expect(page).toHaveTitle('Вход - QA Ground');
    });

    await test.step('Login', async () => {
      await page.locator('#loginusername').fill(username);
      await page.locator('#loginpassword').fill(password);
      await page.locator('#loginsubmit').click();
      await expect(page.locator('#error')).toContainText(errorMessage);
    });
  });
});
