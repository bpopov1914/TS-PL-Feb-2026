import { Page, BrowserContext, Locator } from '@playwright/test';
import BasePage from '@tests/pages/Base.page';

export default class DocumentsPage extends BasePage {
  public readonly UPLOAD_SUCCESS_MESSAGE: string;
  public readonly DELETE_SUCCESS_MESSAGE: string;

  public readonly UPLOAD_DOCUMENT_LINK: Locator;
  public readonly CHOOSE_FILE_BUTTON: Locator;
  public readonly CREATE_BUTTON: Locator;
  public readonly MESSAGE_BOX: Locator;
  public readonly DOCUMENT_CHECKBOX: (filename: string) => Locator;
  public readonly DELETE_FILE_BUTTON: Locator;

  constructor(page: Page, context: BrowserContext) {
    super(page, context);

    this.URL = 'https://st2016.inv.bg/documents';
    this.TITLE = 'Документи - QA Ground';
    this.UPLOAD_SUCCESS_MESSAGE = 'Файлът е качен успешно.';
    this.DELETE_SUCCESS_MESSAGE = 'Избраните файлове/папки бяха перманентно изтрити.';

    /* Locators: */
    this.UPLOAD_DOCUMENT_LINK = this.page.getByRole('link', { name: 'Качи документ' });
    this.CHOOSE_FILE_BUTTON = this.page.locator('.selenium-file-input');
    this.CREATE_BUTTON = this.page.getByRole('button', { name: 'Създай' });
    this.MESSAGE_BOX = this.page.locator('#okmsg');
    this.DOCUMENT_CHECKBOX = (filename: string) =>
      this.page
        .getByRole('row', {
          name: filename,
        })
        .getByRole('checkbox');
    this.DELETE_FILE_BUTTON = this.page.getByRole('link', { name: 'Изтрий' });
  }

  // this does the same as the arrow method above DOCUMENT_CHECKBOX
  //   documentCheckbox(filename: string) {
  //     return this.page
  //       .getByRole('row', {
  //         name: filename,
  //       })
  //       .getByRole('checkbox');
  //   }
}
