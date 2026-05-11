import { test as setup } from '@tests/steps/fixtures';
import { Credentials } from '@lib/resourses/enums/Credentials';

setup(
  `Generate Token`,
  {
    tag: '@api',
    annotation: [
      { type: 'username', description: Credentials.EMAIL },
      { type: 'password', description: Credentials.PASSWORD },
    ],
  },
  async ({ apiSteps }) => {
    // making the API call to generate the token:
    await apiSteps.postGenerateToken(Credentials.EMAIL, Credentials.PASSWORD);
    // verifying that the token exists and saving it for future use in an environment variable:
    await apiSteps.verifyTokenExistsAndSaveIt();
  },
);
