import PageFactory from '@tests/pages/Page.factory';
import { test, expect, Page, BrowserContext } from '@playwright/test';

export default class LandingSteps extends PageFactory {
  constructor(page: Page, context: BrowserContext) {
    super(page, context);
  }

  async navigateToNewInvoicePage() {
    await test.step('Navigate New Invoice Page', async () => {
      await this.page.getByRole('link', { name: 'Нова Фактура', exact: true }).click();
      await expect(this.page).toHaveTitle('Нова фактура - QA Ground');
    });
  }

  async navigateToClientsPage() {
    await test.step('Navigate to Clients Page', async () => {
      await this.page.getByRole('link', { name: 'Клиенти', exact: true }).click();
      await expect(this.page).toHaveTitle('Клиенти - QA Ground');
    });
  }

  async navigateToArticlesPage() {
    await test.step('Navigate to Articles Page', async () => {
      await this.page.getByRole('link', { name: 'Артикули', exact: true }).click();
      await expect(this.page).toHaveTitle('Управление на артикули - QA Ground');
    });
  }
}
