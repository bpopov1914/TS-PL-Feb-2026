import { test } from '@tests/steps/fixtures';

/* 
  Final Page Object Model Example improved with reusable Step Definitions set up in Fixtures, test.describe is no longer needed when we use fixtures:
*/

test(
  'Navigate to New Invoice Page',
  { tag: ['@ui', '@invoice'] },
  async ({ sharedSteps, landintSteps }) => {
    await sharedSteps.navigateToSite('https://st2016.inv.bg');
    await sharedSteps.login('karamfilovs@gmail.com', '111111');
    await landintSteps.navigateToNewInvoicePage();
  },
);

test(
  'Navigate to Clients Page',
  { tag: ['@ui', '@invoice'] },
  async ({ sharedSteps, landintSteps }) => {
    await sharedSteps.navigateToSite('https://st2016.inv.bg');
    await sharedSteps.login('karamfilovs@gmail.com', '111111');
    await landintSteps.navigateToClientsPage();
  },
);

test(
  'Navigate to Articles Page',
  { tag: ['@ui', '@invoice'] },
  async ({ sharedSteps, landintSteps }) => {
    await sharedSteps.navigateToSite('https://st2016.inv.bg');
    await sharedSteps.login('karamfilovs@gmail.com', '111111');
    await landintSteps.navigateToArticlesPage();
  },
);
