import { Page, BrowserContext, Locator } from '@playwright/test';
import BasePage from '@tests/pages/Base.page';

export default class NewInvoice extends BasePage {
  public readonly UPGRADE_TO_HIGHER_PLAN_BUTTON: Locator;

  constructor(page: Page, context: BrowserContext) {
    super(page, context);

    this.URL = 'https://st2016.inv.bg/invoices/new';
    this.TITLE = 'Нова фактура - QA Ground';

    this.UPGRADE_TO_HIGHER_PLAN_BUTTON = this.page.getByRole('link', {
      name: 'Преминете на по-висок план',
    });
  }
}
