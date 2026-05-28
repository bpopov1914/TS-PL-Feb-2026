import { test as baseTest } from "@playwright/test";

/* UI Steps */
import SharedSteps from "./Shared.steps";
import LandingSteps from "./Landing.steps";
import DocumentsSteps from "./Documents.steps";
import NewInvoiceSteps from "./New.Invoice.steps";
import SettingsPlanSteps from "./Settings.Plan.steps";
import ClientsSteps from "./Clients.steps";

/* Api Implementation */
import InvBgApi from "@lib/api/Inv.bg.api";
import ApiSteps from "./Api.steps";

type MyFixtures = {
  sharedSteps: SharedSteps;
  landingSteps: LandingSteps;
  documentSteps: DocumentsSteps;
  newInvoiceSteps: NewInvoiceSteps;
  settingsPlanSteps: SettingsPlanSteps;
  clientsSteps: ClientsSteps;
  invBgApi: InvBgApi;
  apiSteps: ApiSteps;
};

export const test = baseTest.extend<MyFixtures>({
  sharedSteps: async ({ page, context }, use) => {
    await use(new SharedSteps(page, context));
  },
  landingSteps: async ({ page, context }, use) => {
    await use(new LandingSteps(page, context));
  },
  documentSteps: async ({ page, context }, use) => {
    await use(new DocumentsSteps(page, context));
  },
  newInvoiceSteps: async ({ page, context }, use) => {
    await use(new NewInvoiceSteps(page, context));
  },
  settingsPlanSteps: async ({ page, context }, use) => {
    await use(new SettingsPlanSteps(page, context));
  },
  clientsSteps: async ({ page, context }, use) => {
    await use(new ClientsSteps(page, context));
  },
  invBgApi: async ({ request }, use) => {
    await use(new InvBgApi(request));
  },
  apiSteps: async ({ invBgApi }, use) => {
    await use(new ApiSteps(invBgApi));
  },
});