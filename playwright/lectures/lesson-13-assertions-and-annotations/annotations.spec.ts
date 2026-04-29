import { test, expect } from '@playwright/test';

// documentation: https://playwright.dev/docs/test-annotations

/*
  Annotations allow for basic test structure
*/

// test.describe() - creates a group of tests like a test suite. Can have nested subgroups.
// test.describe.skip - can skip whole test suites
// test.describe.parallel() - creates a test suite that forces execution of tests within in parallel
// test.use({ colorScheme: 'dark' }); - set group specific scenario configurations, used in test.desribe block
// tags - set at suite and scenario levels, used for easier scenario subgroup execution
// test.step() - creates a test step which can contain multiple actions and assertions, used for better reporting
// tet.only - run only this test and ignore all who dont have this, used for development purposes
// test.skip() - marks a test to be skipped in test execution, used to disable tests, can be added inside a test with condition
// test.fixme - put at a spot to stop test execution of that particualr scenario at this point, used when scenarios work only partially due to changes or bugs, can have comments too
// test.slow(); - force triple default timeout for this scenario or suite
// test.fail(); - force scenario failure, used to check for false possitves
// test.pause(); - adds a breakpoint, pausing test execution and entering debug mode

test.describe('Test Suite #1', { tag: ['@suite', '@smoke', '@regression'] }, () => {
  test.use({ baseURL: 'https://st2016.inv.bg', colorScheme: 'light'});

  test.fail('Navigate to New Invoice Page', { tag: '@invoice' }, async ({ page }) => {
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
    await test.step('Navigate New Invoice Page', async () => {
      await page.getByRole('link', { name: 'Нова Фактура', exact: true }).click();
      await expect(page).toHaveTitle('Нова фактура - QA Ground');
    });

    await test.step('Navigate New Invoice Page', async () => {
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
});

test.describe.parallel('Test Suite #2', { tag: ['@suite', '@regression'] }, () => {
  test.use({ baseURL: 'https://st2016.inv.bg', colorScheme: 'light' });

  test('Navigate to New Invoice Page', { tag: '@invoice' }, async ({ page, browserName }) => {
    // skip this test if the browser is not Chromium
    test.skip(browserName !== 'chromium', 'This feature is Chromium-only');

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

    // run this test only up to here because of active bug ticket
    test.fixme(true, 'Bug #12345: This test is not working as expected');

    await test.step('Navigate New Invoice Page', async () => {
      await page.getByRole('link', { name: 'Нова Фактура', exact: true }).click();
      await expect(page).toHaveTitle('Нова фактура - QA Ground');
    });
  });

  test('Navigate to Clients Page', { tag: '@clients' }, async ({ page }) => {
    test.slow(); // this test will be marked as slow = tripple default timeout
    await test.step('Navigate New Invoice Page', async () => {
      await page.getByRole('link', { name: 'Нова Фактура', exact: true }).click();
      await expect(page).toHaveTitle('Нова фактура - QA Ground');
    });

    await test.step('Navigate New Invoice Page', async () => {
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
});
