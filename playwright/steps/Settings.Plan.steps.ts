import PageFactory from '@tests/pages/Page.factory';
import { step } from '@lib/tools/step.decorator';
import { Page, BrowserContext, expect } from '@playwright/test';

export default class SettingsPlanSteps extends PageFactory {
  constructor(page: Page, context: BrowserContext) {
    super(page, context);
  }

  @step('Verify Plan Header')
  /**
   * This method verifies the plan header details (price in Euro and price in Bulgarian Lev) for a given plan scenario.
   * It uses the `planPicker` method to select the appropriate plan based on the scenario and then checks the text of the price elements against the expected values provided in the `planHeader` object.
   * If the price in Bulgarian Lev is not provided (empty string), it will skip the verification for that element.
   * @type {string} scenario - The name of the plan scenario (e.g., "Корпоративен", "Бизнес", etc.)
   * @type { priceEuro: string; priceLv: string } planHeader - An object containing the expected price values for Euro and Bulgarian Lev.
   */
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

  /**
   * This method verifies the plan values (corporate, clients, invoices, employees) for a given plan scenario.
   * It uses the `planPicker` method to select the appropriate plan based on the scenario and then checks the text of the value elements against the expected values provided in the `planValues` object.
   * If a value is not provided (empty string), it will skip the verification for that element.
   * @type {string} scenario - The name of the plan scenario (e.g., "Корпоративен", "Бизнес", etc.)
   * @type {corporate: string; clients: string; invoices: string; employees: string;} planValues - An object containing the expected values for each plan attribute.
   */
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
  /**
   * This method verifies the plan features for a given plan scenario. It checks the presence and text of up to three features based on the expected values provided in the `planFeatures` object.
   * It uses the `planPicker` method to select the appropriate plan based on the scenario and then checks the text of the feature elements against the expected values.
   * If a feature value is not provided (empty string), it will skip the verification for that element.
   * @type {string} scenario - The name of the plan scenario (e.g., "Корпоративен", "Бизнес", etc.)
   * @type {feature1: string; feature2: string; feature3: string;} planFeatures - An object containing the expected values for each plan feature.
   */
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

  /**
   * This method selects the appropriate plan locator based on the provided scenario name. It uses a switch statement to match the scenario with the corresponding plan locator defined in the `settingsPlanPage` object.
   * If the scenario does not match any of the predefined cases, it returns an empty string.
   * @type {string} scenario - The name of the plan scenario (e.g., "Корпоративен", "Бизнес", etc.)
   * @returns {string} The `plan` substring to the corresponding plan locator for the selected plan or an empty string if the scenario is not recognized.
   */
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
