import { Page, BrowserContext, Locator } from '@playwright/test';
import BasePage from "@tests/pages/Base.page";

export default class LoginPage extends BasePage {
  public readonly EMAIL_INPUT: Locator;
  public readonly PASSWORD_INPUT: Locator;
  public readonly LOGIN_BUTTON: Locator;
  public readonly ERROR_MESSAGE: Locator;

  constructor(page: Page, context: BrowserContext) {
    super(page, context)

    this.URL = 'https://st2016.inv.bg/login';
    this.TITLE = 'Вход - QA Ground';

    this.EMAIL_INPUT = this.page.locator('#loginusername');
    this.PASSWORD_INPUT = this.page.locator('#loginpassword');
    this.LOGIN_BUTTON = this.page.locator('#loginsubmit');
    this.ERROR_MESSAGE = this.page.locator('#error');
  }

//   public clickLoginButton() {
//     this.LOGIN_BUTTON.click()
//   }
}
