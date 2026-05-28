import { Page, BrowserContext, Locator } from '@playwright/test';
import BasePage from '@tests/pages/Base.page';

export default class SettingsPlan extends BasePage {
  public readonly CORPORATE_PLAN: string;
  public readonly BUSINESS_PLAN: string;
  public readonly SMALL_BUSINESS_PLAN: string;
  public readonly PERSONAL_PLAN: string;
  public readonly FREE_PLAN: string;

  public readonly PLAN: (filename: string) => Locator;
  public readonly HEADER_SECTION: Locator;
  public readonly PRICE_EURO: Locator;
  public readonly PRICE_LV: Locator;
  public readonly VALUES_SECTION: Locator;
  public readonly CORPORATE_VALUE: Locator;
  public readonly CLIENTS_VALUE: Locator;
  public readonly INVOICES_VALUE: Locator;
  public readonly EMPLOYEES_VALUE: Locator;
  public readonly FEATURES_SECTION: Locator;
  public readonly FEATURE_1: Locator;
  public readonly FEATURE_2: Locator;
  public readonly FEATURE_3: Locator;

  constructor(page: Page, context: BrowserContext) {
    super(page, context);

    this.URL = 'https://st2016.inv.bg/settings/plan';
    this.TITLE = 'Абонамент - QA Ground';

    this.CORPORATE_PLAN = 'custom-plan';
    this.BUSINESS_PLAN = 'plan-platinum1';
    this.SMALL_BUSINESS_PLAN = 'plan-gold1';
    this.PERSONAL_PLAN = 'plan-silver1';
    this.FREE_PLAN = 'plan-free1';

    this.PLAN = (filename: string) => this.page.locator(`.selenium-${filename}-container`);
    this.HEADER_SECTION = this.page.locator('.plansv2header');
    this.PRICE_EURO = this.page.locator('h4').first();
    this.PRICE_LV = this.page.locator('h4').nth(1);
    this.VALUES_SECTION = this.page.locator('.plansv2valuescontainer');
    this.CORPORATE_VALUE = this.page.locator('.plansv2value2corp');
    this.CLIENTS_VALUE = this.page.locator('.plansv2value').first();
    this.INVOICES_VALUE = this.page.locator('.plansv2value').nth(1);
    this.EMPLOYEES_VALUE = this.page.locator('.plansv2value').last();
    this.FEATURES_SECTION = this.page.locator('.plansv2features');
    this.FEATURE_1 = this.page.locator('.plansv2feature').first();
    this.FEATURE_2 = this.page.locator('.plansv2feature').nth(1);
    this.FEATURE_3 = this.page.locator('.plansv2feature').last();
  }
}
