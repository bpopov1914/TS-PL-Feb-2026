import PageFactory from '@tests/pages/Page.factory';
import { test, expect, Page, BrowserContext } from '@playwright/test';

export default class NewInvoiceSteps extends PageFactory {
  constructor(page: Page, context: BrowserContext) {
    super(page, context);
  }

  async navigateToSettingsPlanPage() {
    await test.step('Navigate Settings Plan Page', async () => {
      await this.newInvoicePage.UPGRADE_TO_HIGHER_PLAN_BUTTON.click();
      await expect(this.page, 'Verify page title').toHaveTitle(this.settingsPlanPage.TITLE);
    });
  }
}
