import { Page, BrowserContext, Locator } from '@playwright/test';
import BasePage from '@tests/pages/Base.page';

export default class LandingPage extends BasePage {
  public readonly NEW_INVOICE_PAGE_LINK: Locator;
  public readonly CLIENTS_PAGE_LINK: Locator;
  public readonly NEW_ARTICLES_PAGE_LINK: Locator;
  public readonly DOCUMENTS_PAGE_LINK: Locator;

  constructor(page: Page, context: BrowserContext) {
    super(page, context);

    this.URL = 'https://st2016.inv.bg/home';
    this.TITLE = 'Система за фактуриране - QA Ground';

    /* Locators: */
    this.NEW_INVOICE_PAGE_LINK = this.page.getByRole('link', { name: 'Нова Фактура', exact: true });
    this.CLIENTS_PAGE_LINK = this.page.getByRole('link', { name: 'Клиенти', exact: true });
    this.NEW_ARTICLES_PAGE_LINK = this.page.getByRole('link', { name: 'Артикули', exact: true });
    this.DOCUMENTS_PAGE_LINK = this.page.getByRole('link', { name: 'Документи' });
  }
}
