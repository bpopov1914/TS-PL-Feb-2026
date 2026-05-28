import PageFactory from '@tests/pages/Page.factory';
import { step } from '@lib/tools/step.decorator';
import { Page, BrowserContext, expect } from '@playwright/test';

export default class SettingsPlanSteps extends PageFactory {
  constructor(page: Page, context: BrowserContext) {
    super(page, context);
  }

  @step('Verify Plan Header')
  async verifyPlanHeader(scenario: string, planHeader: { priceEuro: string; priceLv: string }) {
    await expect(
      this.settingsPlanPage
        .PLAN(this.planPicker(scenario))
        .locator(this.settingsPlanPage.HEADER_SECTION)
        .locator(this.settingsPlanPage.PRICE_EURO),
    ).toHaveText(planHeader.priceEuro);
    if (planHeader.priceLv) {
      await expect(
        this.settingsPlanPage
          .PLAN(this.planPicker(scenario))
          .locator(this.settingsPlanPage.HEADER_SECTION)
          .locator(this.settingsPlanPage.PRICE_LV),
      ).toHaveText(planHeader.priceLv);
    }
  }

  @step('Verify Plan Values')
  async verifyPlanValues(
    scenario: string,
    planValues: {
      corporate: string;
      clients: string;
      invoices: string;
      employees: string;
    },
  ) {
    if (planValues.corporate) {
      await expect(
        this.settingsPlanPage
          .PLAN(this.planPicker(scenario))
          .locator(this.settingsPlanPage.VALUES_SECTION)
          .locator(this.settingsPlanPage.CORPORATE_VALUE),
      ).toHaveText(planValues.corporate);
    }
    await expect(
      this.settingsPlanPage
        .PLAN(this.planPicker(scenario))
        .locator(this.settingsPlanPage.VALUES_SECTION)
        .locator(this.settingsPlanPage.CLIENTS_VALUE),
    ).toHaveText(planValues.clients);
    await expect(
      this.settingsPlanPage
        .PLAN(this.planPicker(scenario))
        .locator(this.settingsPlanPage.VALUES_SECTION)
        .locator(this.settingsPlanPage.INVOICES_VALUE),
    ).toHaveText(planValues.invoices);
    await expect(
      this.settingsPlanPage
        .PLAN(this.planPicker(scenario))
        .locator(this.settingsPlanPage.VALUES_SECTION)
        .locator(this.settingsPlanPage.EMPLOYEES_VALUE),
    ).toHaveText(planValues.employees);
  }

  @step('Verify Plan Features')
  async verifyPlanFeatures(
    scenario: string,
    planFeatures: { feature1: string; feature2: string; feature3: string },
  ) {
    if (planFeatures.feature1) {
      await expect(
        this.settingsPlanPage
          .PLAN(this.planPicker(scenario))
          .locator(this.settingsPlanPage.FEATURES_SECTION)
          .locator(this.settingsPlanPage.FEATURE_1),
      ).toHaveText(planFeatures.feature1);
    }
    if (planFeatures.feature2) {
      await expect(
        this.settingsPlanPage
          .PLAN(this.planPicker(scenario))
          .locator(this.settingsPlanPage.FEATURES_SECTION)
          .locator(this.settingsPlanPage.FEATURE_2),
      ).toHaveText(planFeatures.feature2);
    }
    if (planFeatures.feature3) {
      await expect(
        this.settingsPlanPage
          .PLAN(this.planPicker(scenario))
          .locator(this.settingsPlanPage.FEATURES_SECTION)
          .locator(this.settingsPlanPage.FEATURE_3),
      ).toHaveText(planFeatures.feature3);
    }
  }

  planPicker(scenario: string): string {
    let plan: string = '';
    switch (scenario) {
      case 'Корпоративен':
        plan = this.settingsPlanPage.CORPORATE_PLAN;
        break;
      case 'Бизнес':
        plan = this.settingsPlanPage.BUSINESS_PLAN;
        break;
      case 'Малък бизнес':
        plan = this.settingsPlanPage.SMALL_BUSINESS_PLAN;
        break;
      case 'Персонален':
        plan = this.settingsPlanPage.PERSONAL_PLAN;
        break;
      case 'Безплатен':
        plan = this.settingsPlanPage.FREE_PLAN;
        break;
    }
    return plan;
  }
}
