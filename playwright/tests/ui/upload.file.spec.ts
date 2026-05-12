import { test } from '@tests/steps/fixtures';
import { Credentials } from '@lib/resourses/enums/Credentials';

// uncomment and add 'setup' project as dependency project to the main test project 'Google Chrome' in playwright.config.ts in order to reuse authorization state in these tests:

[
  {
    scenario: '.doc',
    username: Credentials.EMAIL,
    password: Credentials.PASSWORD,
    filename: 'empty.doc',
  },
  {
    scenario: '.jpeg',
    username: Credentials.EMAIL,
    password: Credentials.PASSWORD,
    filename: 'empty.jpeg',
  },
  {
    scenario: '.pdf',
    username: Credentials.EMAIL,
    password: Credentials.PASSWORD,
    filename: 'empty.pdf',
  },
].forEach(({ scenario, username, password, filename }) => {
  test(
    `Upload Document File Type: ${scenario}`,
    {
      tag: ['@ui', '@upload-file', '@positive'], // tags for scenario categorization
      annotation: [
        { type: 'username', description: username },
        { type: 'password', description: password },
      ],
    },
    async ({ sharedSteps, landintSteps, documentSteps }) => {
      await sharedSteps.navigateToSite('https://st2016.inv.bg/login/');
      await landintSteps.navigateToDocumentsPage();
      await documentSteps.clickUploadDocumentLink();
      await documentSteps.uploadFile(filename);
      await documentSteps.deleteFile(filename);
    },
  );
});
