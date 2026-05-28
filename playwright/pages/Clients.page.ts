import { Page, BrowserContext, Locator } from '@playwright/test';
import BasePage from '@tests/pages/Base.page';

export default class ClientsPage extends BasePage {
  public readonly NEW_CLIENT_BUTTON: Locator;
  public readonly CLIENT_CHECKBOX: (clientName: string) => Locator;
  public readonly DELETE_CLIENT_BUTTON: Locator;
  public readonly DELETE_CONFIRM_BUTTON: Locator;
  public readonly MESSAGE_BOX: Locator;
  public readonly SUCCESS_MESSAGE: string;

  constructor(page: Page, context: BrowserContext) {
    super(page, context);

    this.URL = 'https://st2016.inv.bg/clients/manage/';
    this.TITLE = 'Клиенти - QA Ground';
    this.SUCCESS_MESSAGE = 'Избраните клиенти бяха изтрити успешно.';

    /* Locators: */
    this.NEW_CLIENT_BUTTON = this.page.getByRole('link', { name: 'Нов Клиент' });
    this.CLIENT_CHECKBOX = (clientName: string) =>
      this.page.getByRole('row', { name: clientName }).getByRole('checkbox');
    this.DELETE_CLIENT_BUTTON = this.page.getByRole('link', { name: 'Изтрий' });
    this.DELETE_CONFIRM_BUTTON = this.page.locator('#submit-clients-delete');
    this.MESSAGE_BOX = this.page.locator('#okmsg');
  }
}
