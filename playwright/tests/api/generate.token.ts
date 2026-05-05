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
    await apiSteps.postGenerateToken(Credentials.EMAIL, Credentials.PASSWORD);
    await apiSteps.verifyTokenExists();
  },
);
