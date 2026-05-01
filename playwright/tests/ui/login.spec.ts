import { test } from '@tests/steps/step.factory';
import { Credentials } from '@tests/resourses/enums/Credentials';
import { faker } from '@faker-js/faker';

// faker documentation: https://fakerjs.dev/guide/usage.html

[
  {
    scenario: 'Admin user',
    email: Credentials.EMIAL,
    password: Credentials.PASSWORD,
    usingEnterKey: false,
  },
  {
    scenario: 'Admin user with Enter Key',
    email: Credentials.EMIAL,
    password: Credentials.PASSWORD,
    usingEnterKey: true,
  },
  {
    scenario: 'Normal user',
    email: 'testUser2',
    password: '111111',
    usingEnterKey: false,
  },
  {
    scenario: 'Technical user',
    email: 'testUser3',
    password: '111111',
    usingEnterKey: false,
  },
].forEach(({ scenario, email, password, usingEnterKey }) => {
  test(
    `Login and Logout with user ${scenario}`,
    { tag: ['@ui', '@login', '@positive'] },
    async ({ sharedSteps }) => {
      await sharedSteps.navigateToSite('');
      await sharedSteps.login(email, password, usingEnterKey);
    },
  );
});

[
  {
    scenario: 'empty username',
    username: '',
    password: '111111',
    errorMessage: 'Моля, попълнете вашия email',
  },
  {
    scenario: 'empty password',
    username: faker.internet.email(),
    password: '',
    errorMessage: 'Моля, попълнете вашата парола',
  },
  {
    scenario: 'wrong password',
    username: 'karamfilovs@gmail.com',
    password: faker.internet.password(),
    errorMessage: 'Грешно потребителско име или парола. Моля, опитайте отново.',
  },
].forEach(({ scenario, username, password, errorMessage }) => {
  test(
    `Unsuccesful Login with ${scenario}`,
    {
      tag: ['@ui', '@login', '@negative'],
      annotation: [
        { type: 'Info', description: 'This scenario tets ...... or uses special user .....' },
        { type: 'Test Managmetn Id', description: '12312312' },
        { type: 'username', description: username },
        { type: 'password', description: password },
        { type: 'errorMessage', description: errorMessage },
      ],
    },
    async ({ sharedSteps }) => {
      await sharedSteps.navigateToSite('');
      await sharedSteps.loginFail(username, password, errorMessage);
    },
  );
});
