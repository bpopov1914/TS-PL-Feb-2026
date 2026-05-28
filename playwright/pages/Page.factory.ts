import { Page, BrowserContext } from '@playwright/test';

import LoginPage from '@tests/pages/Login.page';
import LandingPage from '@tests/pages/Landing.page';
import DocumentsPage from './Documents.page';
import NewInvoice from './New.Invoice.page';
import SettingsPlanPage from './Settings.Plan.page';
import ClientsPage from './Clients.page';
import ClientAddPage from './Client.Add.page';
import ClientDetailsPage from './Client.Details.page';

export default class PageFactory {
  public readonly page: Page;
  public readonly context: BrowserContext;

  public readonly loginPage: LoginPage;
  public readonly landingPage: LandingPage;
  public readonly documentPage: DocumentsPage;
  public readonly newInvoicePage: NewInvoice;
  public readonly settingsPlanPage: SettingsPlanPage;
  public readonly clientsPage: ClientsPage;
  public readonly clientsAddPage: ClientAddPage;
  public readonly clientsDetailsPage: ClientDetailsPage;

  constructor(page: Page, context: BrowserContext) {
    // Page Setup
    this.page = page;
    this.context = context

    this.loginPage = new LoginPage(page, context);
    this.landingPage = new LandingPage(page, context);
    this.documentPage = new DocumentsPage(page, context);
    this.newInvoicePage = new NewInvoice(page, context);
    this.settingsPlanPage = new SettingsPlanPage(page, context);
    this.clientsPage = new ClientsPage(page, context);
    this.clientsAddPage = new ClientAddPage(page, context);
    this.clientsDetailsPage = new ClientDetailsPage(page, context);
  }
}
