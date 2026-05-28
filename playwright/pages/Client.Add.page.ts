import { Page, BrowserContext, Locator } from '@playwright/test';
import BasePage from '@tests/pages/Base.page';

export default class ClientAddPage extends BasePage {
  public readonly CLIENT_NAME_INPUT: Locator;
  public readonly SAVE_BUTTON: Locator;

  constructor(page: Page, context: BrowserContext) {
    super(page, context);

    this.URL = 'https://st2016.inv.bg/clients/manage/add';
    this.TITLE = 'Добавяне на клиент - QA Ground';

    /* Locators: */
    this.CLIENT_NAME_INPUT = this.page.locator('#name-bg');
    this.SAVE_BUTTON = this.page.getByRole('button', { name: 'Запази' });
  }
}
