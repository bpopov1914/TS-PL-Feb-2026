import { test as setup } from '@tests/steps/fixtures';
import { Credentials } from '@lib/resourses/enums/Credentials';
import path from 'path';

// const authFile = path.join(__dirname, '..', '../.auth/user.json');
const authFile = path.resolve(process.cwd(), 'auth', 'user.json');

setup('authenticate', async ({ sharedSteps, page }) => {
  // Perform authentication steps
  await sharedSteps.navigateToSite('https://st2016.inv.bg/login/');
  // Make sure you wait here until the page receives the cookies, otherwise the authentication state won't be saved correctly. Inside .login method, we wait for page title which accoplishes this on this site.
  await sharedSteps.login(Credentials.EMAIL, Credentials.PASSWORD);
  // End of authentication steps, save the authentication state to a storage file
  await page.context().storageState({ path: authFile });
});