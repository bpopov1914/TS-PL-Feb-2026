import { Page, BrowserContext } from '@playwright/test';

export default class BasePage {
  public readonly page: Page;
  public readonly context: BrowserContext;

  public URL: string;
  public TITLE: string;

  constructor(page: Page, context: BrowserContext) {
    this.page = page;
    this.context = context;

    this.URL = '';
    this.TITLE = '';
  }
}
