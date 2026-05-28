import PageFactory from '@tests/pages/Page.factory';
import { test, expect, Page, BrowserContext } from '@playwright/test';

export default class LandingSteps extends PageFactory {
  constructor(page: Page, context: BrowserContext) {
    super(page, context);
  }

  async navigateToNewInvoicePage() {
    await test.step('Navigate New Invoice Page', async () => {
      await this.landingPage.NEW_INVOICE_PAGE_LINK.click();
      await expect(this.page, 'Verify page title').toHaveTitle('Нова фактура - QA Ground');
    });
  }

  async navigateToClientsPage() {
    await test.step('Navigate to Clients Page', async () => {
      await this.landingPage.CLIENTS_PAGE_LINK.click();
      await expect(this.page, 'Verify page title').toHaveTitle(this.clientsPage.TITLE);
    });
  }

  async navigateToArticlesPage() {
    await test.step('Navigate to Articles Page', async () => {
      await this.landingPage.NEW_ARTICLES_PAGE_LINK.click();
      await expect(this.page, 'Verify page title').toHaveTitle(
        'Управление на артикули - QA Ground',
      );
    });
  }

  async navigateToDocumentsPage() {
    await test.step('Navigate to Documents Page', async () => {
      await this.landingPage.DOCUMENTS_PAGE_LINK.click();
      await expect(this.page, 'Verify page title').toHaveTitle(this.documentPage.TITLE);
    });
  }
}
