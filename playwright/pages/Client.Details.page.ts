import { Page, BrowserContext, Locator } from '@playwright/test';
import BasePage from '@tests/pages/Base.page';

export default class ClientDetailsPage extends BasePage {
  public readonly SUCCESS_MESSAGE: string;
  public readonly MESSAGE_BOX: Locator;

  constructor(page: Page, context: BrowserContext) {
    super(page, context);

    this.URL = 'https://st2016.inv.bg/clients/manage/view/2007';
    this.TITLE = 'Профил:';
    this.SUCCESS_MESSAGE = 'Клиентът е добавен успешно.';

    /* Locators: */
    this.MESSAGE_BOX = this.page.locator('#okmsg');
  }
}
