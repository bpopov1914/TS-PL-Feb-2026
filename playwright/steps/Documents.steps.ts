import PageFactory from '@tests/pages/Page.factory';
import { test, expect, Page, BrowserContext } from '@playwright/test';
import path from 'path';

export default class DocumentsSteps extends PageFactory {
  constructor(page: Page, context: BrowserContext) {
    super(page, context);
  }

  async clickUploadDocumentLink() {
    await test.step('Click upload document link', async () => {
      await this.documentPage.UPLOAD_DOCUMENT_LINK.click();
      await expect(this.documentPage.CHOOSE_FILE_BUTTON).toBeVisible();
    });
  }

  async uploadFile(filename: string) {
    await test.step('Upload File', async () => {
      await this.documentPage.CHOOSE_FILE_BUTTON.setInputFiles(
        path.join(__dirname, '..', 'resourses', 'files', filename),
      );
      await this.documentPage.CREATE_BUTTON.click();
      await expect(this.documentPage.MESSAGE_BOX).toHaveText(
        this.documentPage.UPLOAD_SUCCESS_MESSAGE,
      );
    });
  }

  async deleteFile(filename: string) {
    await test.step('Upload File', async () => {
      await this.documentPage.DOCUMENT_CHECKBOX(filename).check();

      // Delete action triggers pop up box, so we handle it with auto accept:
      this.page.on('dialog', (dialog) => dialog.accept());
      await this.documentPage.DELETE_FILE_BUTTON.click();
      
      await expect(this.documentPage.MESSAGE_BOX).toHaveText(
        this.documentPage.DELETE_SUCCESS_MESSAGE,
      );
    });
  }
}
