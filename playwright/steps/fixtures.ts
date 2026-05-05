import { test as baseTest } from "@playwright/test";

/* UI Steps */
import SharedSteps from "./Shared.steps";
import LandingSteps from "./Landing.steps";
import DocumentsSteps from "./Documents.steps";

/* Api Implementation */
import InvBgApi from "@lib/api/Inv.bg.api";
import ApiSteps from "./Api.steps";

type MyFixtures = {
  sharedSteps: SharedSteps;
  landintSteps: LandingSteps;
  documentSteps: DocumentsSteps;
  invBgApi: InvBgApi;
  apiSteps: ApiSteps;
};

export const test = baseTest.extend<MyFixtures>({
  sharedSteps: async ({ page, context }, use) => {
    await use(new SharedSteps(page, context));
  },
  landintSteps: async ({ page, context }, use) => {
    await use(new LandingSteps(page, context));
  },
  documentSteps: async ({ page, context }, use) => {
    await use(new DocumentsSteps(page, context));
  },
  invBgApi: async ({ request }, use) => {
    await use(new InvBgApi(request));
  },
  apiSteps: async ({ invBgApi }, use) => {
    await use(new ApiSteps(invBgApi));
  },
});