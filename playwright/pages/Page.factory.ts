import { Page, BrowserContext } from '@playwright/test';

import LoginPage from '@tests/pages/Login.page';
import LandingPage from '@tests/pages/Landing.page';

export default class PageFactory {
  public readonly page: Page;
  public readonly context: BrowserContext;

  public readonly loginPage: LoginPage;
  public readonly landingPage: LandingPage;

  constructor(page: Page, context: BrowserContext) {
    // Page Setup
    this.page = page;
    this.context = context

    this.loginPage = new LoginPage(page, context);
    this.landingPage = new LandingPage(page, context);
  }
}
