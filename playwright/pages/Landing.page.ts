import { Page, BrowserContext } from '@playwright/test';
import BasePage from '@tests/pages/Base.page';

export default class LandingPage extends BasePage {

  constructor(page: Page, context: BrowserContext) {
    super(page, context)

    this.URL = 'https://st2016.inv.bg/home';
    this.TITLE = 'Система за фактуриране - QA Ground';
  }

}
