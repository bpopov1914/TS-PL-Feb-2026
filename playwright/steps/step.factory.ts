import { test as baseTest } from "@playwright/test";

import SharedSteps from "./Shared.steps";
import LandingSteps from "./Landing.steps";

type MyFixtures = {
    sharedSteps: SharedSteps;
    landintSteps: LandingSteps;
}

export const test = baseTest.extend<MyFixtures>({
    sharedSteps: async ({ page, context }, use) => {
        await use(new SharedSteps(page, context))
    },
    landintSteps: async ({ page, context }, use) => {
        await use(new LandingSteps(page, context))
    }
});