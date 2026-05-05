import { test } from '@tests/steps/fixtures';
import { Credentials } from '@lib/resourses/enums/Credentials';
import { faker } from '@faker-js/faker';

// faker documentation: https://fakerjs.dev/guide/usage.html

// test data parametrization for multiple scenarios:
[
  // scenario 1:
  {
    scenario: 'Admin user',
    email: Credentials.EMAIL,
    password: Credentials.PASSWORD,
    usingEnterKey: false,
  },
  // scenario 2
  {
    scenario: 'Admin user with Enter Key',
    email: Credentials.EMAIL,
    password: Credentials.PASSWORD,
    usingEnterKey: true,
  },
  // example scenario 3
  // {
  //   scenario: 'Normal user',
  //   email: 'testUser2',
  //   password: '111111',
  //   usingEnterKey: false,
  // },
  // example scenario 4
  // {
  //   scenario: 'Technical user',
  //   email: 'testUser3',
  //   password: '111111',
  //   usingEnterKey: false,
  // },
  // pass the test data params forward to the test function:
].forEach(({ scenario, email, password, usingEnterKey }) => {
  test(
    `Login and Logout with user ${scenario}`, // test scenario title + param 'scenario' to make the title unique for each scenario
    {
      tag: ['@ui', '@login', '@positive'], // tags for scenario categorization
      annotation: [
        // annotations for better reporting:
        { type: 'Info', description: 'This scenario tets ...... or uses special user .....' },
        { type: 'Test Managmetn Id', description: '12312312' },
        { type: 'username', description: email },
        { type: 'password', description: password },
      ],
    }, // inject fixtures here to be able to use their steps in the test body:
    async ({ sharedSteps }) => {
      // finally actual test body containing calls to test step definitions executing our code:
      await sharedSteps.navigateToSite('https://st2016.inv.bg/login/');
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
    username: faker.internet.email(), // using faker to generate a new random e-mail for negative scenario each execution
    password: '',
    errorMessage: 'Моля, попълнете вашата парола',
  },
  {
    scenario: 'wrong password',
    username: 'karamfilovs@gmail.com',
    password: faker.internet.password(), // using faker to generate a new random password for negative scenario each execution
    errorMessage: 'Грешно потребителско име или парола. Моля, опитайте отново.',
  },
].forEach(({ scenario, username, password, errorMessage }) => {
  test(
    `Unsuccesful Login with ${scenario}`,
    {
      tag: ['@ui', '@login', '@negative'],
      annotation: [
        { type: 'username', description: username },
        { type: 'password', description: password },
        { type: 'errorMessage', description: errorMessage },
      ],
    },
    async ({ sharedSteps }) => {
      await sharedSteps.navigateToSite('https://st2016.inv.bg/login/');
      await sharedSteps.loginFail(username, password, errorMessage);
    },
  );
});
