import PageFactory from '@tests/pages/Page.factory';
import { expect, Page, BrowserContext } from '@playwright/test';
import { step } from '@lib/tools/step.decorator';

export default class ClientsSteps extends PageFactory {
  constructor(page: Page, context: BrowserContext) {
    super(page, context);
  }

  @step('Navigate New Client Page')
  async navigateToClientAddPage() {
    await this.clientsPage.NEW_CLIENT_BUTTON.click();
    await expect(this.page, 'Verify page title').toHaveTitle(this.clientsAddPage.TITLE);
  }

  @step('Create New Client')
  async createClient(clientName: string) {
    await this.clientsAddPage.CLIENT_NAME_INPUT.fill(clientName);
    await this.clientsAddPage.SAVE_BUTTON.click();
    await expect(this.clientsDetailsPage.MESSAGE_BOX, 'Verify success message').toHaveText(
      this.clientsDetailsPage.SUCCESS_MESSAGE,
    );
  }

  @step('Delete Client')
  async deleteClient(clientName: string) {
    await this.clientsPage.CLIENT_CHECKBOX(clientName).check();
    await this.clientsPage.DELETE_CLIENT_BUTTON.click();
    await this.clientsPage.DELETE_CONFIRM_BUTTON.click();
    await expect(this.clientsPage.MESSAGE_BOX, 'Verify success message').toHaveText(
      this.clientsPage.SUCCESS_MESSAGE,
    );
  }
}
