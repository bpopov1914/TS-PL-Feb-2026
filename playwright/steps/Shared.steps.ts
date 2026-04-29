import PageFactory from '@tests/pages/Page.factory';
import { test, expect, Page, BrowserContext } from '@playwright/test';

export default class SharedSteps extends PageFactory {
  constructor(page: Page, context: BrowserContext) {
    super(page, context);
  }
  
  async navigateToSite(url: string) {
    await test.step('Navigate to Site', async () => {
      await this.page.goto(url);
      await expect(this.page).toHaveTitle(this.loginPage.TITLE);
    });
  }

  async login(username: string, password: string) {
    await test.step('Login', async () => {
      await this.loginPage.EMAIL_INPUT.fill(username);
      await this.loginPage.PASSWORD_INPUT.fill(password);
      await this.loginPage.LOGIN_BUTTON.click();
      await expect(this.page).toHaveTitle(this.landingPage.TITLE);
    });
  }
}
